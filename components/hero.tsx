import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"

export function Hero() {
  return (
    <section className="teal-gradient text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Find Government Schemes You Qualify For</h1>
              <p className="text-xl lg:text-2xl text-teal-100">
                Discover personalized government schemes and benefits based on your profile. Simple, fast, and
                completely free.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/eligibility">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Check Your Eligibility
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-4"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-200" />
                <span>500+ Government Schemes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-200" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-200" />
                <span>Voice Navigation</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
