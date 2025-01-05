import { PersonaFormData, ApiResponse } from '../types';

const OPENAI_API_URL: string = import.meta.env.VITE_API_URL;
if (!OPENAI_API_URL) {
  throw new Error('API_URL environment variable is required');
}

export async function generatePersona(formData: PersonaFormData): Promise<ApiResponse> {
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