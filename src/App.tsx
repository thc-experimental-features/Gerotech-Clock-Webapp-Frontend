import React, { useState } from 'react'
import ProfileForm from './components/ProfileForm'
import ResultsDisplay from './components/ResultsDisplay'
import EmptyState from './components/EmptyState'
import LoadingState from './components/LoadingState'
import { generatePersona } from './services/openaiService'
import { PersonaFormData, ApiResponse } from './types';

function App(): React.JSX.Element {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [personaData, setPersonaData] = useState<ApiResponse | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: PersonaFormData): Promise<void> => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await generatePersona(formData)
      setPersonaData(data)
    } catch (err) {
      setError('Failed to generate persona. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Persona Card
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ProfileForm onSubmit={handleSubmit} isLoading={isLoading}/>
          </div>
          <div className="lg:col-span-8">
            {isLoading ? (
              <LoadingState />
            ) : personaData ? (
              <ResultsDisplay data={personaData}/>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
