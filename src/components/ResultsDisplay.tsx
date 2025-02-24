import React from "react";
import { ResultsDisplayProps } from "../types";
import { Monitor, Smartphone, Phone, Laptop, Tablet } from "lucide-react";

export default function ResultsDisplay({
  data,
}: ResultsDisplayProps): JSX.Element | null {
  if (!data) {
    return null;
  }

  // Function to get the device icon
  const getDeviceIcon = (deviceName: string) => {
    const iconProps = { size: 20, className: "mr-2" };
    switch (deviceName) {
      case "Television":
        return <Monitor {...iconProps} />;
      case "Smartphone":
        return <Smartphone {...iconProps} />;
      case "Telephone":
        return <Phone {...iconProps} />;
      case "Laptop":
        return <Laptop {...iconProps} />;
      case "Tablet":
        return <Tablet {...iconProps} />;
      default:
        return null;
    }
  };

  // Function to determine background color based on familiarity level
  const getFamiliarityColor = (familiarity: string) => {
    switch (familiarity) {
      case "Regular User":
        return "bg-green-100 text-green-800";
      case "Basic User":
        return "bg-yellow-100 text-yellow-800";
      case "Minimal User":
        return "bg-red-100 text-red-800";
      case "Non User":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "High Risk":
        return "bg-red-100 text-red-800 border-red-300";
      case "Medium Risk":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Low Risk":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Persona Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Generated Profile
        </h2>
        <div className="flex items-center mb-4">
          <span className="text-lg font-medium text-gray-600">Age: {data.persona.age}</span>
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-700">{data.persona.summary}</p>
        </div>
      </div>

      {/* Historical Timeline */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Historical Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
          {data.historicalEvents
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((event, index) => (
              <div key={index} className="relative pl-10 pb-8 last:pb-0">
                <div className="absolute left-2 top-0.5 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-white"></div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm font-medium text-indigo-600">
                      {event.year}
                    </span>
                    <span className="text-sm text-gray-500 ml-auto">
                      Patient's age at event: {event.ageAtEvent}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {event.event}
                  </h3>
                  <p className="text-gray-500 mt-1">{event.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Technology Familiarity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Technology Profile
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-600">
              Familiarity Level
            </h3>
            <p className="mt-1 text-base font-semibold text-indigo-600">
              {data.technology.familiarity}
            </p>
          </div>

          <div className="rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Devices Familiarity
            </h3>
            <div className="flex flex-col gap-3 rounded-lg border border-indigo-600 p-4">
              {data.technology.devices.map((device, index) => (
                <div
                  key={index}
                  className={`flex items-center border border-indigo-300 justify-between p-3 rounded-lg ${getFamiliarityColor(
                    device.familiarity
                  )}`}
                >
                  <div className="flex items-center">
                    {getDeviceIcon(device.name)}
                    <span className="font-medium text-gray-900">
                      {device.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">
                      {device.familiarity}
                    </span>
                    <span className="text-xs text-gray-900 bg-white bg-opacity-50 px-2 py-1 rounded-full w-36 h-fit text-center border border-indigo-600">
                      {device.ageAtIntroduction === "0"
                        ? "Available since birth"
                        : `Age at introduction: ${device.ageAtIntroduction}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-600">
              Technology Challenges
            </h3>
            <ul className="mt-2 space-y-2">
              {data.technology.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                    •
                  </span>
                  <span className="text-gray-600">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Health Profile */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Health Profile
        </h2>

        <div className="space-y-6">
          {/* Current Health Conditions */}
          {data.health.current.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-3">
                Current Health Conditions
              </h3>
              <div className="space-y-4">
                {data.health.current.map((disease, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-medium text-gray-900">
                        {disease.name}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getRiskLevelColor(
                          disease.riskLevel
                        )}`}
                      >
                        {disease.riskLevel}
                      </span>
                    </div>
                    <div className="pl-4">
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-medium text-gray-600">
                          Common Challenges:
                        </h5>
                        <span className="text-gray-600 text-sm">
                          {disease.commonChallenges.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Possible Diseases */}
          {data.health.conditions.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Other Possible Diseases
              </h3>
              <ul className="space-y-2">
                {data.health.conditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                      •
                    </span>
                    <span className="text-gray-600">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Health Predictions */}
          {data.health.considerations.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Health Considerations
              </h3>
              <div className="space-y-2">
                {data.health.considerations.map((consideration, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 rounded-lg"
                  >
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 10l5 5 5-5"
                      />
                    </svg>
                    <span className="text-gray-600">{consideration}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
