import { AgeRange, AgeBand, Country, HealthStatus, ProfileFormProps } from '../types';

export const CONSTANTS = {
    PERSONA_CARD: {
        AGE_RANGES: [
            { value: '60-70', label: '60-70 years old' },
            { value: '70-80', label: '70-80 years old' },
            { value: '80-90', label: '80-90 years old' },
            { value: '90+', label: '90+ years old' },
        ] as AgeRange[],

        AGE_BANDS: [
            { value: '60s', label: '60s' },
            { value: '70s', label: '70s' },
            { value: '80s', label: '80s' },
            { value: '90s', label: '90s' },
        ] as AgeBand[],

        HEALTH_STATUS: [
            { id: 'none', label: 'No assistance needed' },
            { id: 'iadls', label: 'Needs help with IADLs' },
            { id: 'adls', label: 'Needs help with ADLs' },
        ] as HealthStatus[],

        COUNTRY: [
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
        ] as Country[]
    }
};

export default CONSTANTS;