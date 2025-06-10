import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Search, FileText, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserCheck,
      title: "Fill Your Profile",
      description: "Provide basic information about your age, income, location, and other details.",
      step: "01",
    },
    {
      icon: Search,
      title: "AI-Powered Matching",
      description: "Our system analyzes your profile against 500+ government schemes.",
      step: "02",
    },
    {
      icon: FileText,
      title: "Get Personalized Results",
      description: "View schemes you qualify for with detailed eligibility and application steps.",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Apply Directly",
      description: "Access official application portals and track your application status.",
      step: "04",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized government scheme recommendations in just 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
