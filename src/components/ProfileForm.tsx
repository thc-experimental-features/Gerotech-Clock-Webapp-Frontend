import React, { useState } from 'react';

interface AgeRange {
  value: string;
  label: string;
}

interface AgeBand {
  value: string;
  label: string;
}

interface Country {
  value: string;
  label: string;
}

interface HealthStatus {
  id: string;
  label: string;
}

interface FormData {
  ageRange: string;
  ageBand: string;
  country: string;
  healthStatus: string;
  gender: 'female' | 'male';
  livingArrangement: 'independent' | 'family' | 'assisted' | 'nursing';
}

interface ProcessedData {
  ageInfo: {
    range: string;
    band: string;
  };
  country: string;
  healthStatus: string;
  gender: string;
  livingArrangement: string;
}

const AGE_RANGES: AgeRange[] = [
  { value: '60-70', label: '60-70 years old' },
  { value: '70-80', label: '70-80 years old' },
  { value: '80-90', label: '80-90 years old' },
  { value: '90+', label: '90+ years old' },
];

const AGE_BANDS: AgeBand[] = [
  { value: '60s', label: '60s' },
  { value: '70s', label: '70s' },
  { value: '80s', label: '80s' },
  { value: '90s', label: '90s' },
];

const HEALTH_STATUS: HealthStatus[] = [
  { id: 'none', label: 'No assistance needed' },
  { id: 'iadls', label: 'Needs help with IADLs' },
  { id: 'adls', label: 'Needs help with ADLs' },
];

const COUNTRY: Country[] = [
  { value: 'AFG', label: 'Afghanistan' },
  { value: 'ALB', label: 'Albania' },
  { value: 'DZA', label: 'Algeria' },
  { value: 'AND', label: 'Andorra' },
  { value: 'AGO', label: 'Angola' },
  { value: 'ATG', label: 'Antigua and Barbuda' },
  { value: 'ARG', label: 'Argentina' },
  { value: 'ARM', label: 'Armenia' },
  { value: 'AUS', label: 'Australia' },
  { value: 'AUT', label: 'Austria' },
  { value: 'AZE', label: 'Azerbaijan' },
  { value: 'BHS', label: 'Bahamas' },
  { value: 'BHR', label: 'Bahrain' },
  { value: 'BGD', label: 'Bangladesh' },
  { value: 'BRB', label: 'Barbados' },
  { value: 'BLR', label: 'Belarus' },
  { value: 'BEL', label: 'Belgium' },
  { value: 'BLZ', label: 'Belize' },
  { value: 'BEN', label: 'Benin' },
  { value: 'BTN', label: 'Bhutan' },
  { value: 'BOL', label: 'Bolivia' },
  { value: 'BIH', label: 'Bosnia and Herzegovina' },
  { value: 'BWA', label: 'Botswana' },
  { value: 'BRA', label: 'Brazil' },
  { value: 'BRN', label: 'Brunei' },
  { value: 'BGR', label: 'Bulgaria' },
  { value: 'BFA', label: 'Burkina Faso' },
  { value: 'BDI', label: 'Burundi' },
  { value: 'CPV', label: 'Cabo Verde' },
  { value: 'KHM', label: 'Cambodia' },
  { value: 'CMR', label: 'Cameroon' },
  { value: 'CAN', label: 'Canada' },
  { value: 'CAF', label: 'Central African Republic' },
  { value: 'TCD', label: 'Chad' },
  { value: 'CHL', label: 'Chile' },
  { value: 'CHN', label: 'China' },
  { value: 'COL', label: 'Colombia' },
  { value: 'COM', label: 'Comoros' },
  { value: 'COG', label: 'Congo (Congo-Brazzaville)' },
  { value: 'CRI', label: 'Costa Rica' },
  { value: 'CIV', label: 'Côte d’Ivoire' },
  { value: 'HRV', label: 'Croatia' },
  { value: 'CUB', label: 'Cuba' },
  { value: 'CYP', label: 'Cyprus' },
  { value: 'CZE', label: 'Czechia (Czech Republic)' },
  { value: 'DNK', label: 'Denmark' },
  { value: 'DJI', label: 'Djibouti' },
  { value: 'DMA', label: 'Dominica' },
  { value: 'DOM', label: 'Dominican Republic' },
  { value: 'ECU', label: 'Ecuador' },
  { value: 'EGY', label: 'Egypt' },
  { value: 'SLV', label: 'El Salvador' },
  { value: 'GNQ', label: 'Equatorial Guinea' },
  { value: 'ERI', label: 'Eritrea' },
  { value: 'EST', label: 'Estonia' },
  { value: 'SWZ', label: 'Eswatini (fmr. "Swaziland")' },
  { value: 'ETH', label: 'Ethiopia' },
  { value: 'FJI', label: 'Fiji' },
  { value: 'FIN', label: 'Finland' },
  { value: 'FRA', label: 'France' },
  { value: 'GAB', label: 'Gabon' },
  { value: 'GMB', label: 'Gambia' },
  { value: 'GEO', label: 'Georgia' },
  { value: 'DEU', label: 'Germany' },
  { value: 'GHA', label: 'Ghana' },
  { value: 'GRC', label: 'Greece' },
  { value: 'GRD', label: 'Grenada' },
  { value: 'GTM', label: 'Guatemala' },
  { value: 'GIN', label: 'Guinea' },
  { value: 'GNB', label: 'Guinea-Bissau' },
  { value: 'GUY', label: 'Guyana' },
  { value: 'HTI', label: 'Haiti' },
  { value: 'HND', label: 'Honduras' },
  { value: 'HUN', label: 'Hungary' },
  { value: 'ISL', label: 'Iceland' },
  { value: 'IND', label: 'India' },
  { value: 'IDN', label: 'Indonesia' },
  { value: 'IRN', label: 'Iran' },
  { value: 'IRQ', label: 'Iraq' },
  { value: 'IRL', label: 'Ireland' },
  { value: 'ISR', label: 'Israel' },
  { value: 'ITA', label: 'Italy' },
  { value: 'JAM', label: 'Jamaica' },
  { value: 'JPN', label: 'Japan' },
  { value: 'JOR', label: 'Jordan' },
  { value: 'KAZ', label: 'Kazakhstan' },
  { value: 'KEN', label: 'Kenya' },
  { value: 'KIR', label: 'Kiribati' },
  { value: 'KWT', label: 'Kuwait' },
  { value: 'KGZ', label: 'Kyrgyzstan' },
  { value: 'LAO', label: 'Laos' },
  { value: 'LVA', label: 'Latvia' },
  { value: 'LBN', label: 'Lebanon' },
  { value: 'LSO', label: 'Lesotho' },
  { value: 'LBR', label: 'Liberia' },
  { value: 'LBY', label: 'Libya' },
  { value: 'LIE', label: 'Liechtenstein' },
  { value: 'LTU', label: 'Lithuania' },
  { value: 'LUX', label: 'Luxembourg' },
  { value: 'MDG', label: 'Madagascar' },
  { value: 'MWI', label: 'Malawi' },
  { value: 'MYS', label: 'Malaysia' },
  { value: 'MDV', label: 'Maldives' },
  { value: 'MLI', label: 'Mali' },
  { value: 'MLT', label: 'Malta' },
  { value: 'MHL', label: 'Marshall Islands' },
  { value: 'MRT', label: 'Mauritania' },
  { value: 'MUS', label: 'Mauritius' },
  { value: 'MEX', label: 'Mexico' },
  { value: 'FSM', label: 'Micronesia' },
  { value: 'MDA', label: 'Moldova' },
  { value: 'MCO', label: 'Monaco' },
  { value: 'MNG', label: 'Mongolia' },
  { value: 'MNE', label: 'Montenegro' },
  { value: 'MAR', label: 'Morocco' },
  { value: 'MOZ', label: 'Mozambique' },
  { value: 'MMR', label: 'Myanmar (formerly Burma)' },
  { value: 'NAM', label: 'Namibia' },
  { value: 'NRU', label: 'Nauru' },
  { value: 'NPL', label: 'Nepal' },
  { value: 'NLD', label: 'Netherlands' },
  { value: 'NZL', label: 'New Zealand' },
  { value: 'NIC', label: 'Nicaragua' },
  { value: 'NER', label: 'Niger' },
  { value: 'NGA', label: 'Nigeria' },
  { value: 'MKD', label: 'North Macedonia' },
  { value: 'NOR', label: 'Norway' },
  { value: 'OMN', label: 'Oman' },
  { value: 'PAK', label: 'Pakistan' },
  { value: 'PLW', label: 'Palau' },
  { value: 'PSE', label: 'Palestine State' },
  { value: 'PAN', label: 'Panama' },
  { value: 'PNG', label: 'Papua New Guinea' },
  { value: 'PRY', label: 'Paraguay' },
  { value: 'PER', label: 'Peru' },
  { value: 'PHL', label: 'Philippines' },
  { value: 'POL', label: 'Poland' },
  { value: 'PRT', label: 'Portugal' },
  { value: 'QAT', label: 'Qatar' },
  { value: 'ROU', label: 'Romania' },
  { value: 'RUS', label: 'Russia' },
  { value: 'RWA', label: 'Rwanda' },
  { value: 'KNA', label: 'Saint Kitts and Nevis' },
  { value: 'LCA', label: 'Saint Lucia' },
  { value: 'VCT', label: 'Saint Vincent and the Grenadines' },
  { value: 'WSM', label: 'Samoa' },
  { value: 'SMR', label: 'San Marino' },
  { value: 'STP', label: 'Sao Tome and Principe' },
  { value: 'SAU', label: 'Saudi Arabia' },
  { value: 'SEN', label: 'Senegal' },
  { value: 'SRB', label: 'Serbia' },
  { value: 'SYC', label: 'Seychelles' },
  { value: 'SLE', label: 'Sierra Leone' },
  { value: 'SGP', label: 'Singapore' },
  { value: 'SVK', label: 'Slovakia' },
  { value: 'SVN', label: 'Slovenia' },
  { value: 'SLB', label: 'Solomon Islands' },
  { value: 'SOM', label: 'Somalia' },
  { value: 'ZAF', label: 'South Africa' },
  { value: 'KOR', label: 'South Korea' },
  { value: 'SSD', label: 'South Sudan' },
  { value: 'ESP', label: 'Spain' },
  { value: 'LKA', label: 'Sri Lanka' },
  { value: 'SDN', label: 'Sudan' },
  { value: 'SUR', label: 'Suriname' },
  { value: 'SWE', label: 'Sweden' },
  { value: 'CHE', label: 'Switzerland' },
  { value: 'SYR', label: 'Syria' },
  { value: 'TWN', label: 'Taiwan' },
  { value: 'TJK', label: 'Tajikistan' },
  { value: 'TZA', label: 'Tanzania' },
  { value: 'THA', label: 'Thailand' },
  { value: 'TLS', label: 'Timor-Leste' },
  { value: 'TGO', label: 'Togo' },
  { value: 'TON', label: 'Tonga' },
  { value: 'TTO', label: 'Trinidad and Tobago' },
  { value: 'TUN', label: 'Tunisia' },
  { value: 'TUR', label: 'Turkey' },
  { value: 'TKM', label: 'Turkmenistan' },
  { value: 'TUV', label: 'Tuvalu' },
  { value: 'UGA', label: 'Uganda' },
  { value: 'UKR', label: 'Ukraine' },
  { value: 'ARE', label: 'United Arab Emirates' },
  { value: 'GBR', label: 'United Kingdom' },
  { value: 'USA', label: 'United States of America' },
  { value: 'URY', label: 'Uruguay' },
  { value: 'UZB', label: 'Uzbekistan' },
  { value: 'VUT', label: 'Vanuatu' },
  { value: 'VAT', label: 'Vatican City' },
  { value: 'VEN', label: 'Venezuela' },
  { value: 'VNM', label: 'Vietnam' },
  { value: 'YEM', label: 'Yemen' },
  { value: 'ZMB', label: 'Zambia' },
  { value: 'ZWE', label: 'Zimbabwe' }
];

const ProfileForm = ({ onSubmit }: { onSubmit: (data: ProcessedData) => void} ) => {
  const [formData, setFormData] = useState<FormData>({
    ageRange: '',
    ageBand: '',
    country: '',
    healthStatus: '',
    gender: 'female',
    livingArrangement: 'independent',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const selectedCountry = COUNTRY.find(c => c.value === formData.country)?.label || '';
    const healthLabel = HEALTH_STATUS.find(h => h.id === formData.healthStatus)?.label || '';
    
    const processedData: ProcessedData = {
      ageInfo: {
        range: formData.ageRange,
        band: formData.ageBand,
      },
      country: selectedCountry,
      healthStatus: healthLabel,
      gender: formData.gender,
      livingArrangement: formData.livingArrangement,
    };

    onSubmit(processedData);
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
          {AGE_RANGES.map((range) => (
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
          {AGE_BANDS.map((band) => (
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
          {COUNTRY.map((country) => (
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
          onChange={(e) => setFormData({ ...formData, livingArrangement: e.target.value as FormData['livingArrangement'] })}
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
          {HEALTH_STATUS.map((status) => (
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