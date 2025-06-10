interface LocationSelectorProps {
  onLocationChange: (location: {
    state: string;
    district: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  }) => void;
}

export function LocationSelector({ onLocationChange }: LocationSelectorProps) {
  // Implementation for cascading dropdowns and map selection
}