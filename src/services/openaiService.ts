const OPENAI_API_URL: string = import.meta.env.VITE_API_URL
if (!OPENAI_API_URL) {
  throw new Error('API_URL environment variable is required');
}

export interface FormData {
  ageRange: string;
  ageBand: string;
  country: string;
  healthStatus: string;
  gender?: string;
  livingArrangement?: string;
}

interface HistoricalEvent {
  year: string;
  event: string;
  description: string;
}

interface Technology {
  familiarity: string;
  devices: string[];
  challenges: string[];
}

interface Health {
  current: string;
  conditions: string[];
  predictions: string[];
}

interface Persona {
  summary: string;
  yearOfBirth: string;
}

export interface ApiResponse {
  persona: Persona;
  historicalEvents: HistoricalEvent[];
  technology: Technology;
  health: Health;
}

export async function generatePersona(formData: FormData): Promise<ApiResponse> {
  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate persona');
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating persona:', error);
    throw error;
  }
}