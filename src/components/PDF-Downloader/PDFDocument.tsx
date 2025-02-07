import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Font,
} from "@react-pdf/renderer";
import type { PDFDocumentProps, Persona } from "../../types";
import type { AttributesContentProps } from "../../types/pdfTypes";
import styles from "./StyleSheet";

// Register the font
Font.register({
  family: "SpaceGrotesk",
  fonts: [
    { src: "/fonts/SpaceGrotesk-Regular.ttf" },
    { src: "/fonts/SpaceGrotesk-Medium.ttf", fontWeight: 500 },
    { src: "/fonts/SpaceGrotesk-Bold.ttf", fontWeight: 700 },
  ],
});

const Background = () => (
  <View style={styles.background}>
    <Svg viewBox="0 0 842 595">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#E6E6FA" stopOpacity="1" />
          <Stop offset="1" stopColor="#DDA0DD" stopOpacity="0.8" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="860" height="620" fill="url(#grad)" />
    </Svg>
  </View>
);

const ProfileContent: React.FC<{ persona: Persona }> = ({ persona }) => (
  <View style={styles.boxContent}>
    <View>
      <Text style={styles.summaryHeader}>Summary</Text>
      <Text style={styles.summaryText}>{persona.summary}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Age</Text>
        <Text style={styles.infoValue}>{persona.age}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Gender</Text>
        <Text style={styles.infoValue}>{persona.gender}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Country</Text>
        <Text style={styles.infoValue}>{persona.country}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Health Status</Text>
        <Text style={styles.infoValue}>{persona.healthStatus}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Living Arrangement</Text>
        <Text style={styles.infoValue}>{persona.livingArrangement}</Text>
      </View>
    </View>
  </View>
);

const AttributesContent: React.FC<AttributesContentProps> = ({
  historicalEvents,
  technology,
  technologyDevices,
  health,
  healthPredictions,
}) => (
  <View style={styles.boxContent}>
    <View style={styles.attributesContainer}>
      <View style={styles.attributesSection}>
        <Text style={styles.summaryHeader}>Events</Text>
        <View style={styles.timelineContainer}>
          {historicalEvents.map((event) => (
            <View
              style={styles.timelineEvent}
              key={`${event.year}-${event.event}`}
            >
              <View style={styles.timelineDot} />
              <Text style={styles.timelineYear}>{event.year}</Text>
              <Text style={styles.timelineText}>{event.event}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.attributesSection}>
        <Text style={styles.summaryHeader}>Technology</Text>
        <Text style={styles.attributesText}>{technology.familiarity}</Text>
        <Text style={styles.subsectionHeader}>Devices Used</Text>
        <View style={styles.deviceContainer}>
          {technologyDevices
            .filter((tech) =>
              ["Basic User", "Regular User"].includes(tech.familiarity)
            )
            .map((tech) => (
              <Text style={styles.deviceItem} key={tech.name}>
                {tech.name}
              </Text>
            ))}
        </View>

        <Text style={styles.subsectionHeader}>Challenges</Text>
        {technology.challenges.map((challenge, index) => (
          <Text style={styles.attributesText} key={index}>
            {challenge}
          </Text>
        ))}
      </View>
    </View>

    <View style={styles.attributesContainer}>
      <View style={styles.attributesSection}>
        <Text style={styles.summaryHeader}>Health Status</Text>
        <Text style={styles.subsectionHeader}>
          Current Diseases:{" "}
          {health.map((condition, index) => (
            <Text style={styles.diseaseText} key={`${condition.name}-${index}`}>
              {condition.name}
              {index !== health.length - 1 ? ", " : ""}
            </Text>
          ))}
        </Text>

        <View>
          <Text style={styles.subsectionHeader}>Health Considerations</Text>
          {healthPredictions.considerations?.map((consideration, index) => (
            <View style={styles.healthConsideration} key={index}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.attributesText}>{consideration}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  </View>
);

const PDFDocument: React.FC<PDFDocumentProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape">
      <Background />
      <View style={styles.mainContent}>
        <Text style={styles.title}>Persona Card</Text>
        <View style={styles.content}>
          <View style={[styles.box, styles.leftSection]}>
            <View style={styles.boxHeader}>
              <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.boxContent}>
              <ProfileContent persona={data.persona} />
            </View>
          </View>
          <View style={[styles.box, styles.rightSection]}>
            <View style={styles.boxHeader}>
              <Text style={styles.headerText}>Attributes</Text>
            </View>
            <View style={styles.boxContent}>
              <AttributesContent
                historicalEvents={data.historicalEvents}
                technology={data.technology}
                technologyDevices={data.technology.devices}
                health={data.health.current}
                healthPredictions={data.health}
              />
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
