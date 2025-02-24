import type { HistoricalEvent, Technology, Device, DiseaseApiResponse, Health } from "./index";

export interface AttributesContentProps {
  historicalEvents: HistoricalEvent[];
  technology: Technology;
  technologyDevices: Device[];
  health: DiseaseApiResponse[];
  healthPredictions: Health;
}