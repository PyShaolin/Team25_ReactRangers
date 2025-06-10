interface UserProfile {
  age: number;
  gender: string;
  maritalStatus: string;
  occupation: string;
  annualIncome: number;
  educationLevel: string;
  category: string;
  disabilityStatus: boolean;
  location: {
    village: string;
    district: string;
    state: string;
  };
  areaType: 'Rural' | 'Urban';
}

interface EligibleScheme {
  scheme_name: string;
  reason_for_eligibility: string;
  benefits_summary: string;
  application_link: string;
}