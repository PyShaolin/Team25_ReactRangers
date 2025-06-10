"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Heart, Briefcase, Sprout, Users, Accessibility, UserX, Search, Filter } from "lucide-react"
import Link from "next/link"

interface Category {
  id: string
  name: string
  description: string
  icon: React.ElementType
  schemeCount: number
  color: string
  schemes: Array<{
    name: string
    summary: string
    benefits: string
  }>
}

export function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedSupport, setSelectedSupport] = useState("all")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const categories: Category[] = [
    {
      id: "education",
      name: "Education",
      description: "Scholarships, skill development, and educational support",
      icon: GraduationCap,
      schemeCount: 45,
      color: "bg-blue-100 text-blue-700",
      schemes: [
        {
          name: "National Scholarship Portal",
          summary: "Scholarships for students from various backgrounds",
          benefits: "Up to ₹50,000 per year",
        },
        {
          name: "Skill India Mission",
          summary: "Skill development and certification programs",
          benefits: "Free training + certification",
        },
      ],
    },
    {
      id: "women",
      name: "Women Empowerment",
      description: "Schemes specifically designed for women and girls",
      icon: Users,
      schemeCount: 32,
      color: "bg-pink-100 text-pink-700",
      schemes: [
        {
          name: "Beti Bachao Beti Padhao",
          summary: "Girl child protection and education",
          benefits: "Education support & awareness",
        },
        {
          name: "Mahila Shakti Kendra",
          summary: "Women empowerment at community level",
          benefits: "Training & support services",
        },
      ],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      description: "Health insurance, medical support, and wellness programs",
      icon: Heart,
      schemeCount: 28,
      color: "bg-red-100 text-red-700",
      schemes: [
        {
          name: "Ayushman Bharat",
          summary: "Health insurance for poor families",
          benefits: "₹5 Lakh health cover",
        },
        {
          name: "Janani Suraksha Yojana",
          summary: "Safe motherhood intervention",
          benefits: "Cash assistance for delivery",
        },
      ],
    },
    {
      id: "startups",
      name: "Startups & Business",
      description: "Support for entrepreneurs and small businesses",
      icon: Briefcase,
      schemeCount: 22,
      color: "bg-green-100 text-green-700",
      schemes: [
        {
          name: "Startup India Seed Fund",
          summary: "Financial support for startups",
          benefits: "Up to ₹20 Lakh funding",
        },
        {
          name: "MUDRA Yojana",
          summary: "Micro finance for small businesses",
          benefits: "Loans up to ₹10 Lakh",
        },
      ],
    },
    {
      id: "agriculture",
      name: "Agriculture",
      description: "Farmer welfare, crop insurance, and agricultural support",
      icon: Sprout,
      schemeCount: 38,
      color: "bg-green-100 text-green-700",
      schemes: [
        {
          name: "PM Kisan Samman Nidhi",
          summary: "Direct income support to farmers",
          benefits: "₹6,000 per year",
        },
        {
          name: "Crop Insurance Scheme",
          summary: "Insurance coverage for crops",
          benefits: "Premium subsidy up to 50%",
        },
      ],
    },
    {
      id: "sc-st",
      name: "SC/ST Welfare",
      description: "Special schemes for Scheduled Castes and Scheduled Tribes",
      icon: Users,
      schemeCount: 25,
      color: "bg-purple-100 text-purple-700",
      schemes: [
        {
          name: "Post Matric Scholarship SC",
          summary: "Educational support for SC students",
          benefits: "Tuition fee + maintenance allowance",
        },
        {
          name: "Stand Up India",
          summary: "Bank loans for SC/ST entrepreneurs",
          benefits: "Loans ₹10 Lakh to ₹1 Crore",
        },
      ],
    },
    {
      id: "disability",
      name: "Disability Support",
      description: "Assistance and support for persons with disabilities",
      icon: Accessibility,
      schemeCount: 18,
      color: "bg-indigo-100 text-indigo-700",
      schemes: [
        {
          name: "Disability Pension Scheme",
          summary: "Monthly pension for disabled persons",
          benefits: "₹500-2000 per month",
        },
        {
          name: "Assistive Devices Scheme",
          summary: "Free aids and appliances",
          benefits: "Free assistive devices",
        },
      ],
    },
    {
      id: "unemployment",
      name: "Employment",
      description: "Job creation, skill development, and employment guarantee",
      icon: UserX,
      schemeCount: 20,
      color: "bg-orange-100 text-orange-700",
      schemes: [
        {
          name: "MGNREGA",
          summary: "Rural employment guarantee",
          benefits: "100 days guaranteed work",
        },
        {
          name: "Pradhan Mantri Rozgar Protsahan",
          summary: "Employment generation in formal sector",
          benefits: "EPF contribution by govt",
        },
      ],
    },
    
  ]

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore Schemes by Category</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse government schemes organized by categories to find the support you need
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="urban">Urban</SelectItem>
                  <SelectItem value="rural">Rural</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSupport} onValueChange={setSelectedSupport}>
                <SelectTrigger>
                  <SelectValue placeholder="Support Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="grant">Grant</SelectItem>
                  <SelectItem value="loan">Loan</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="subsidy">Subsidy</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {category.schemeCount} schemes
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link href={`/categories/${category.id}`}>
                  <Button variant="outline" className="w-full">
                    View Schemes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
