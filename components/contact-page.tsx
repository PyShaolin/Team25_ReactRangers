"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle, FileText, Users, Send, CheckCircle } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@schemeconnect.gov.in",
      description: "Get help via email within 24 hours",
    },
    {
      icon: Phone,
      title: "Helpline",
      details: "1800-XXX-XXXX",
      description: "Toll-free support available 24/7",
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: "Digital India Building, New Delhi - 110001",
      description: "Visit us during office hours",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM",
    },
  ]

  const faqCategories = [
    {
      icon: HelpCircle,
      title: "General Queries",
      description: "Questions about platform usage and features",
    },
    {
      icon: FileText,
      title: "Scheme Information",
      description: "Details about specific government schemes",
    },
    {
      icon: Users,
      title: "Technical Support",
      description: "Help with technical issues and bugs",
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Share your suggestions and feedback",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="teal-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-teal-100 max-w-3xl mx-auto">
            We're here to help you navigate government schemes and answer your questions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for support and assistance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <div className="text-teal-600 font-medium mb-2">{info.details}</div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 soft-blue-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange("category", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Query</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="scheme">Scheme Information</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief subject of your message"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your query or feedback in detail..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* FAQ Categories */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqCategories.map((category, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                            <category.icon className="w-6 h-6 text-teal-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{category.title}</h4>
                            <p className="text-gray-600 text-sm">{category.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Tips */}
              <Card className="border-0 shadow-lg bg-teal-50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Include your application reference number if you have one</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Be specific about the scheme you're asking about</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Check our FAQ section before submitting a query</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Response time is usually within 24 hours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Emergency Support</h3>
              <p className="text-red-800 mb-6">
                For urgent issues related to scheme applications or technical emergencies, contact our emergency
                helpline
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-red-900 font-semibold">
                  <Phone className="w-5 h-5" />
                  <span>Emergency: 1800-XXX-EMERGENCY</span>
                </div>
                <div className="flex items-center gap-2 text-red-900 font-semibold">
                  <Mail className="w-5 h-5" />
                  <span>emergency@schemeconnect.gov.in</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
