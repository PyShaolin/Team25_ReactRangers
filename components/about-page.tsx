import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Heart, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Rohini More",
      role: "Project Director",
      description: "Former IAS officer with 20+ years in public administration",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Abhijeet Gaikwad",
      role: "Technology Lead",
      description: "Expert in government digital transformation",
      image: "C:\Users\Abhijeet Gaikwad\Pictures\Saved Pictures\Abhijeet.jpg",
    },
    {
      name: "Shubham Gote",
      role: "Policy Analyst",
      description: "Specialist in government schemes and welfare policies",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Devyani Patil",
      role: "Community Outreach",
      description: "Grassroots experience in rural development",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const achievements = [
    { number: "10L+", label: "Citizens Helped", icon: Users },
    { number: "500+", label: "Schemes Listed", icon: Target },
    { number: "₹500Cr+", label: "Benefits Claimed", icon: Award },
    { number: "95%", label: "Success Rate", icon: Heart },
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="teal-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About SchemeConnect</h1>
          <p className="text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto mb-8">
            Empowering Indian citizens to discover and access government schemes through technology and innovation
          </p>
          <Link href="/eligibility">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Mission and Vision stacked */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Target className="w-8 h-8 text-teal-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To bridge the gap between government schemes and citizens by providing a unified, accessible
                    platform that simplifies scheme discovery and application processes. We believe every eligible
                    citizen should have easy access to government benefits.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Award className="w-8 h-8 text-teal-600" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To create a Digital India where no eligible citizen misses out on government benefits due to lack of
                    awareness or complex procedures. We envision a transparent, efficient, and inclusive welfare
                    delivery system.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Stylized Image Container */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Main container */}
              <div className="relative w-full h-full">
                {/* Background decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-orange-400 rounded-full"></div>

                {/* Stylized capsule shapes - these will contain parts of the image */}
                <div className="absolute top-[5%] left-[10%] w-[70%] h-[40%] rounded-[30px] overflow-hidden border-4 border-white shadow-lg">
                  {/* Replace this with your image - this is the top capsule */}
                   <img src="https://images.hindi.news18.com/ibnkhabar/uploads/2021/03/Women-India-001-12200-shutterstock.jpg?im=FitAndFill,width=1200,height=675" alt=""/>
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Top Image Section</p>
                  </div>
                </div>

                <div className="absolute top-[30%] left-[25%] w-[70%] h-[40%] rounded-[30px] overflow-hidden border-4 border-white shadow-lg">
                  {/* Replace this with your image - this is the middle capsule */}
                 <img src="https://ionizerresearch.com/wp-content/uploads/2014/08/happy-graduation-student-014.jpg" alt=""/>
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Middle Image Section</p>
                  </div>
                </div>

                <div className="absolute top-[55%] left-[15%] w-[70%] h-[40%] rounded-[30px] overflow-hidden border-4 border-white shadow-lg">
                  {/* Replace this with your image - this is the bottom capsule */}
                   <img src="https://tse1.mm.bing.net/th/id/OIP.79L-qEviFZJ4N52jnu9A8AHaFj?w=640&h=480&rs=1&pid=ImgDetMain" alt=""/>
                  
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Bottom Image Section</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 soft-blue-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in millions of lives across India</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals working to serve citizens better</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-teal-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">Principles that guide our work every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We believe in open, honest communication and transparent processes in all our operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusivity</h3>
                <p className="text-gray-600">
                  Our platform is designed to be accessible to all citizens, regardless of their background or
                  abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, continuously improving our services and user experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
