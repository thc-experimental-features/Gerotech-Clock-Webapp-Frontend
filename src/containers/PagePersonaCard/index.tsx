import React, {useState} from "react";
import ProfileForm from "../../components/ProfileForm";
import LoadingState from "../../components/LoadingState";
import ResultsDisplay from "../../components/ResultsDisplay";
import EmptyState from "../../components/EmptyState";
import {ApiResponse, PersonaFormData} from "../../types";
import {generatePersona} from "../../services/openaiService";

const PagePersonaCard: React.FC = () => {

    // NOTE for Minh => You don't need showResult state
    // you can use "truthy/falsy" check of personaData to conditionally render
    // const [showResults, setShowResults] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [personaData, setPersonaData] = useState<ApiResponse | undefined>(undefined)
    const [error, setError] = useState<string | null>(null)


    const handleSubmit = async (formData: PersonaFormData): Promise<void> => {
        setIsLoading(true)
        setError(null)
        try {
            const data = await generatePersona(formData)
            setPersonaData(data)
            // setShowResults(true)
        } catch (err) {
            setError('Failed to generate persona. Please try again.')
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    return <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
            <ProfileForm onSubmit={handleSubmit} isLoading={isLoading}/>
        </div>
        <div className="lg:col-span-8">
            {isLoading ? (
                <LoadingState/>
            ) : personaData ? (
                <ResultsDisplay data={personaData}/>
            ) : (
                <EmptyState/>
            )}
        </div>
    </div>
}

export default PagePersonaCard;