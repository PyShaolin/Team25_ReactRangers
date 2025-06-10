import { Shield, Award, Users, CheckCircle } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and never shared",
    },
    {
      icon: Award,
      title: "Government Verified",
      description: "Official data from government sources",
    },
    {
      icon: Users,
      title: "10L+ Users Trust Us",
      description: "Join millions of satisfied citizens",
    },
    {
      icon: CheckCircle,
      title: "95% Success Rate",
      description: "High approval rate for applications",
    },
  ]

  return (
    <section className="py-16 soft-blue-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <badge.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
