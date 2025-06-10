import { Scheme, schemes } from '@/data/schemes';

export class EligibilityChecker {
  private checkAgeEligibility(userAge: number, schemeAge: string): boolean {
    if (schemeAge === 'All ages') return true;
    
    const ageRange = schemeAge.replace('+', '-150').split('-');
    const minAge = parseInt(ageRange[0]);
    const maxAge = parseInt(ageRange[1]);
    
    return userAge >= minAge && userAge <= maxAge;
  }

  private checkLocationEligibility(userState: string, schemeState: string): boolean {
    return schemeState === 'All India' || schemeState === userState;
  }

  private checkCategoryEligibility(userCategory: string, schemeEligibility: string[]): boolean {
    const categoryMatches = schemeEligibility.some(criteria =>
      criteria.toLowerCase().includes(userCategory.toLowerCase())
    );
    return categoryMatches;
  }

  private checkOccupationEligibility(userOccupation: string, scheme: Scheme): boolean {
    const occupationMatches = scheme.targetGroup.toLowerCase().includes(userOccupation.toLowerCase()) ||
      scheme.eligibility.some(criteria =>
        criteria.toLowerCase().includes(userOccupation.toLowerCase())
      );
    return occupationMatches;
  }

  private generateEligibilityReason(scheme: Scheme, profile: UserProfile): string {
    const reasons: string[] = [];

    if (scheme.targetGroup.toLowerCase().includes(profile.occupation.toLowerCase())) {
      reasons.push(`You are a ${profile.occupation}`);
    }

    if (profile.category !== 'General' && 
        scheme.eligibility.some(e => e.toLowerCase().includes(profile.category.toLowerCase()))) {
      reasons.push(`You belong to ${profile.category} category`);
    }

    if (scheme.state === 'All India' || scheme.state === profile.location.state) {
      reasons.push(`You are a resident of ${profile.location.state}`);
    }

    return reasons.join('. ');
  }

  public findEligibleSchemes(profile: UserProfile): EligibleScheme[] {
    return schemes
      .filter(scheme => {
        const ageEligible = this.checkAgeEligibility(profile.age, scheme.eligibleAge);
        const locationEligible = this.checkLocationEligibility(profile.location.state, scheme.state);
        const categoryEligible = this.checkCategoryEligibility(profile.category, scheme.eligibility);
        const occupationEligible = this.checkOccupationEligibility(profile.occupation, scheme);

        return ageEligible && locationEligible && categoryEligible && occupationEligible;
      })
      .map(scheme => ({
        scheme_name: scheme.name,
        reason_for_eligibility: this.generateEligibilityReason(scheme, profile),
        benefits_summary: scheme.benefits,
        application_link: scheme.applicationUrl
      }));
  }
}