import React, { useState, useMemo } from "react";
import {AgeRange, PersonaFormData, ProfileFormProps} from "../types";
import { CONSTANTS } from "../constants";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
const ProfileForm = ({ onSubmit, isLoading }: ProfileFormProps) => {
  // Initialize the form data
  const [formData, setFormData] = useState<PersonaFormData>({
    age: "",
    yearsBorn: "",
    country: "",
    healthStatus: "", 
    gender: "female",
    livingArrangement: "independent",
  });

  // Calculate age from year born
  const calculateAge = (yearBorn: string): number => {
    const currentYear = new Date().getFullYear();
    return yearBorn ? currentYear - parseInt(yearBorn) : 0;
  };
  
  // Validate the year born
  const isValidYear = (year: string) => {
    const currentYear = new Date().getFullYear();
    const yearNum = parseInt(year);
    return year.trim() !== "" && yearNum <= currentYear && yearNum >= 1900;
  };

  // Validate the form data
  const isSubmissionReady = () => {
    const isValidField = (key: keyof PersonaFormData, value: string) => {
      if (key === "gender" || key === "livingArrangement") return true;
      if (key === "yearsBorn") return isValidYear(value);
      return value.trim() !== "";
    };

    return Object.entries(formData).every(([key, value]) => 
      isValidField(key as keyof PersonaFormData, value)
    );
  }

  // Handle the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSubmissionReady || isLoading) {
      return;
    }
    const selectedCountry =
      CONSTANTS.PERSONA_CARD.COUNTRY.find((c) => c.value === formData.country)
        ?.label || "";
    const healthLabel =
      CONSTANTS.PERSONA_CARD.HEALTH_STATUS.find(
        (h) => h.id === formData.healthStatus
      )?.label || "";

    // Include both yearsBorn and calculated age in submission
    const submissionData: PersonaFormData = {
      ...formData,
      country: selectedCountry,
      healthStatus: healthLabel,
    };

    onSubmit(submissionData);
  };

  // Handle the years born change
  const handleYearsBornChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yearBorn = e.target.value;
    // Update form data with yearsBorn
    setFormData({ ...formData, yearsBorn: yearBorn, age: calculateAge(yearBorn).toString() });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 space-y-6"
    >
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
              checked={formData.gender === "female"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  gender: e.target.value as "female" | "male",
                })
              }
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">Female</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  gender: e.target.value as "female" | "male",
                })
              }
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">Male</span>
          </label>
        </div>
      </div>

      {/* Years Born */}
      <div>
      <label
        htmlFor="yearsBorn"
        className="text-sm font-medium text-gray-700 flex items-center justify-between"
      >
          Years Born
          {formData.yearsBorn && !isValidYear(formData.yearsBorn) && (
            <span className="ml-2 text-sm text-red-600 flex items-center">
              <ExclamationCircleIcon className="h-4 w-4 mr-1" />
              Invalid input
            </span>
          )}
        </label>
        <input
          id="yearsBorn"
          type="number"
          value={formData.yearsBorn}
          onChange={handleYearsBornChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Country */}
      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <select
          id="country"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
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
        <label
          htmlFor="livingArrangement"
          className="block text-sm font-medium text-gray-700"
        >
          Living Arrangement
        </label>
        <select
          id="livingArrangement"
          value={formData.livingArrangement}
          onChange={(e) =>
            setFormData({
              ...formData,
              livingArrangement: e.target
                .value as PersonaFormData["livingArrangement"],
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="independent">Living Independently</option>
          <option value="family">Living with Family</option>
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
                onChange={(e) =>
                  setFormData({ ...formData, healthStatus: e.target.value })
                }
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{status.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={!isSubmissionReady || isLoading}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          !isSubmissionReady || isLoading
            ? "bg-indigo-200 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        Generate Profile
      </button>
    </form>
  );
};

export default ProfileForm;
