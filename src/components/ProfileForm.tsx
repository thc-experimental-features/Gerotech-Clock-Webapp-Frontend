import React, { useState } from 'react';
import { PersonaFormData, ProfileFormProps } from '../types';
import { CONSTANTS } from '../constants';

const ProfileForm = ({ onSubmit }: ProfileFormProps) => {
  const [formData, setFormData] = useState<PersonaFormData>({
    ageRange: '',
    ageBand: '',
    country: '',
    healthStatus: '',
    gender: 'female',
    livingArrangement: 'independent',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const selectedCountry = CONSTANTS.PERSONA_CARD.COUNTRY.find(c => c.value === formData.country)?.label || '';
    const healthLabel = CONSTANTS.PERSONA_CARD.HEALTH_STATUS.find(h => h.id === formData.healthStatus)?.label || '';
    
    const submissionData: PersonaFormData = {
      ...formData,
      country: selectedCountry,
      healthStatus: healthLabel,
    };
  
    onSubmit(submissionData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
      {/* Gender Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gender
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'female' | 'male' })}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">Female</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'female' | 'male' })}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">Male</span>
          </label>
        </div>
      </div>

      {/* Age Range */}
      <div>
        <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">
          Age Range
        </label>
        <select
          id="ageRange"
          value={formData.ageRange}
          onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select age range</option>
          {CONSTANTS.PERSONA_CARD.AGE_RANGES.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Age Band */}
      <div>
        <label htmlFor="ageBand" className="block text-sm font-medium text-gray-700">
          Age Band
        </label>
        <select
          id="ageBand"
          value={formData.ageBand}
          onChange={(e) => setFormData({ ...formData, ageBand: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select age band</option>
          {CONSTANTS.PERSONA_CARD.AGE_BANDS.map((band) => (
            <option key={band.value} value={band.value}>
              {band.label}
            </option>
          ))}
        </select>
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          id="country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select country</option>
          {CONSTANTS.PERSONA_CARD.COUNTRY.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>

      {/* Living Arrangement */}
      <div>
        <label htmlFor="livingArrangement" className="block text-sm font-medium text-gray-700">
          Living Arrangement
        </label>
        <select
          id="livingArrangement"
          value={formData.livingArrangement}
          onChange={(e) => setFormData({ ...formData, livingArrangement: e.target.value as PersonaFormData['livingArrangement'] })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="independent">Living Independently</option>
          <option value="family">Living with Family</option>
          <option value="assisted">Assisted Living Facility</option>
          <option value="nursing">Nursing Home</option>
        </select>
      </div>

      {/* Health Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Health Status
        </label>
        <div className="space-y-2">
          {CONSTANTS.PERSONA_CARD.HEALTH_STATUS.map((status) => (
            <label key={status.id} className="flex items-center space-x-3">
              <input
                type="radio"
                name="healthStatus"
                value={status.id}
                checked={formData.healthStatus === status.id}
                onChange={(e) => setFormData({ ...formData, healthStatus: e.target.value })}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{status.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate Profile
      </button>
    </form>
  );
};

export default ProfileForm;