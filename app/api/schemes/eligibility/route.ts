import { NextResponse } from 'next/server';
import { EligibilityChecker } from '@/app/services/eligibility-checker';

export async function POST(request: Request) {
  try {
    const profile = await request.json();
    const checker = new EligibilityChecker();
    const eligibleSchemes = checker.findEligibleSchemes(profile);

    return NextResponse.json({
      eligible_schemes: eligibleSchemes
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process eligibility check' },
      { status: 500 }
    );
  }
}