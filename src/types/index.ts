export interface AgeRange {
    value: string;
    label: string;
    minAge: number;
    maxAge: number;
}

export interface Country {
    value: string;
    label: string;
}

export interface HealthStatus {
    id: string;
    label: string;
}

export interface PersonaFormData {
    ageRange: string;
    country: string;
    healthStatus: string;
    gender: 'female' | 'male';
    livingArrangement: 'independent' | 'family' | 'assisted' | 'nursing';
  }

export interface ApiFormData {
    ageRange: string;
    country: string;
    healthStatus: string;
    gender?: string;
    livingArrangement?: string;
}

export interface HistoricalEvent {
    year: string;
    event: string;
    description: string;
}

export interface Technology {
    familiarity: string;
    devices: string[];
    challenges: string[];
}

export interface Health {
    current: string;
    conditions: string[];
    predictions: string[];
}

export interface Persona {
    summary: string;
    yearOfBirth: string;
}

export interface ApiResponse {
    persona: Persona;
    historicalEvents: HistoricalEvent[];
    technology: Technology;
    health: Health;
}

export interface ProfileFormProps {
    onSubmit: (data: PersonaFormData) => void;
    setYearsBorn: (value: string) => void;
    isLoading: boolean;
}

export interface ResultsDisplayProps {
    data?: ApiResponse;
    yearsBornText: string;
}
