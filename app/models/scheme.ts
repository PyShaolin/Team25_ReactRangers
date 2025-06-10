interface Scheme {
  id: string;
  title: string;
  description: string;
  eligibilityCriteria: string[];
  documents: string[];
  applicationProcess: string;
  benefits: string[];
  geography: {
    level: 'central' | 'state' | 'district' | 'municipality';
    state?: string;
    district?: string;
    municipality?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  lastUpdated: Date;
  version: number;
}

interface OfflineData {
  schemes: Scheme[];
  lastSynced: Date;
  userLocation: {
    state: string;
    district: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
}