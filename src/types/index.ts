export interface Gender {
    value: string;
    label: string;
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
    age: string;
    yearsBorn: string;
    country: string;
    healthStatus: string;
    gender: 'female' | 'male' | 'non-binary' | 'other';
    livingArrangement: 'independent' | 'family' | 'nursing';
}

export interface ApiFormData {
    age: string;
    yearsBorn: string;
    country: string;
    healthStatus: string;
    gender?: string;
    livingArrangement?: string;
}

export interface HistoricalEvent {
    year: string;
    ageAtEvent: string;
    event: string;
    description: string;
}

export interface Device {
    name: string;
    familiarity: string;
    ageAtIntroduction: string;
}

export interface Technology {
    familiarity: string;
    devices: Device[];
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
    isLoading: boolean;
}

export interface ResultsDisplayProps {
    data?: ApiResponse;
}
