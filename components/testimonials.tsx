import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      text: "Found 3 schemes I was eligible for within minutes. The platform is so easy to use!",
      rating: 5,
      scheme: "Women Entrepreneur Scheme",
    },
    {
      name: "Rajesh Kumar",
      location: "Patna, Bihar",
      text: "As a farmer, I discovered schemes I never knew existed. Got ₹6000 annual support.",
      rating: 5,
      scheme: "PM Kisan Samman Nidhi",
    },
    {
      name: "Anita Devi",
      location: "Jaipur, Rajasthan",
      text: "The voice navigation feature helped me fill the form easily. Great accessibility!",
      rating: 5,
      scheme: "Disability Support Scheme",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people sharing how our platform helped them access government benefits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">"{testimonial.text}"</blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-teal-600 mt-1">Beneficiary: {testimonial.scheme}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
