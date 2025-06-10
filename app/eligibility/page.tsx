import { EligibilityForm } from "@/components/eligibility-form"

export default function EligibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Check Your Eligibility</h1>
          <p className="text-xl text-gray-600">Fill out this form to discover government schemes you qualify for</p>
        </div>
        <EligibilityForm />
      </div>
    </div>
  )
}
