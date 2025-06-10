import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { TrustBadges } from "@/components/trust-badges"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <Testimonials />
      <TrustBadges />
    </div>
  )
}
