"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Download, ExternalLink, Bookmark, Calendar, MapPin, Users, IndianRupee, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { schemes, type Scheme } from "@/data/schemes"

interface CategorySchemesPageProps {
  categoryId: string
}

// Category mapping
const categoryMapping: Record<string, { name: string; description: string }> = {
  education: {
    name: "Education",
    description: "Scholarships, skill development, and educational support schemes",
  },
  women: {
    name: "Women Empowerment",
    description: "Schemes specifically designed for women and girls",
  },
  healthcare: {
    name: "Healthcare",
    description: "Health insurance, medical support, and wellness programs",
  },
  startups: {
    name: "Startups & Business",
    description: "Support for entrepreneurs and small businesses",
  },
  agriculture: {
    name: "Agriculture",
    description: "Farmer welfare, crop insurance, and agricultural support",
  },
  "sc-st": {
    name: "SC/ST Welfare",
    description: "Special schemes for Scheduled Castes and Scheduled Tribes",
  },
  disability: {
    name: "Disability Support",
    description: "Assistance and support for persons with disabilities",
  },
  unemployment: {
    name: "Employment",
    description: "Job creation, skill development, and employment guarantee",
  },
}

export function CategorySchemesPage({ categoryId }: CategorySchemesPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")

  // Get category info
  const categoryInfo = categoryMapping[categoryId]
  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center py-12">
            <CardContent>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
              <p className="text-gray-600 mb-6">The requested category could not be found.</p>
              <Link href="/categories">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Categories
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Filter schemes by category
  const categorySchemes = schemes.filter((scheme) => {
    // Map category IDs to scheme categories
    const categoryMap: Record<string, string[]> = {
      education: ["Education", "Skill Development"],
      women: ["Women", "Girl Child"],
      healthcare: ["Healthcare", "Insurance", "Nutrition"],
      startups: ["Business", "Startup"],
      agriculture: ["Agriculture", "Animal Husbandry", "Fisheries", "Forestry"],
      "sc-st": ["SC/ST", "Social Welfare"],
      disability: ["Disability Support", "Accessibility"],
      unemployment: ["Employment", "Skill Development"],
    }

    const allowedCategories = categoryMap[categoryId] || [categoryInfo.name]
    return allowedCategories.some(
      (cat) =>
        scheme.category.toLowerCase().includes(cat.toLowerCase()) ||
        scheme.tags.some((tag) => tag.toLowerCase().includes(cat.toLowerCase())),
    )
  })

  // Apply filters
  const filteredSchemes = categorySchemes.filter((scheme) => {
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesState = selectedState === "all" || scheme.state === selectedState || scheme.state === "All India"

    return matchesSearch && matchesState
  })

  // Sort schemes
  const sortedSchemes = [...filteredSchemes].sort((a, b) => {
    switch (sortBy) {
      case "deadline":
        return a.deadline.localeCompare(b.deadline)
      case "benefits":
        return b.benefits.localeCompare(a.benefits)
      case "name":
        return a.name.localeCompare(b.name)
      case "state":
        return a.state.localeCompare(b.state)
      default:
        return 0
    }
  })

  const handleApplyNow = (scheme: Scheme) => {
    window.open(scheme.applicationUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/categories" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{categoryInfo.name} Schemes</h1>
          <p className="text-xl text-gray-600 mb-4">{categoryInfo.description}</p>
          <p className="text-lg text-gray-500">Found {sortedSchemes.length} schemes in this category</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search schemes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  <SelectItem value="All India">All India</SelectItem>
                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="West Bengal">West Bengal</SelectItem>
                  <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="Punjab">Punjab</SelectItem>
                  <SelectItem value="Haryana">Haryana</SelectItem>
                  <SelectItem value="Odisha">Odisha</SelectItem>
                  <SelectItem value="Kerala">Kerala</SelectItem>
                  <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="benefits">Benefits</SelectItem>
                  <SelectItem value="state">State</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Category Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">{sortedSchemes.length}</div>
              <div className="text-gray-600">Total Schemes</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {sortedSchemes.filter((s) => s.state === "All India").length}
              </div>
              <div className="text-gray-600">Central Schemes</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {sortedSchemes.filter((s) => s.state !== "All India").length}
              </div>
              <div className="text-gray-600">State Schemes</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {sortedSchemes.filter((s) => s.deadline === "Ongoing").length}
              </div>
              <div className="text-gray-600">Ongoing Schemes</div>
            </CardContent>
          </Card>
        </div>

        {/* Schemes List */}
        <div className="grid gap-6">
          {sortedSchemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{scheme.name}</h3>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>

                    <p className="text-gray-600 mb-4">{scheme.summary}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {scheme.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-teal-100 text-teal-700">
                          {tag}
                        </Badge>
                      ))}
                      {scheme.tags.length > 4 && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                          +{scheme.tags.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4" />
                        <span className="truncate">{scheme.benefits}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{scheme.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{scheme.state}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="truncate">{scheme.targetGroup}</span>
                      </div>
                    </div>

                    {scheme.ministry && (
                      <div className="mt-3 text-sm text-gray-500">
                        <strong>Ministry:</strong> {scheme.ministry}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:w-48">
                    <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => handleApplyNow(scheme)}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                    <Link href={`/scheme/${scheme.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Save PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedSchemes.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-gray-500 mb-4">
                <Search className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No schemes found</h3>
                <p>Try adjusting your search terms or filters</p>
              </div>
              <Link href="/categories">
                <Button variant="outline" className="mt-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Categories
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        {sortedSchemes.length > 0 && (
          <Card className="mt-8 bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download All Schemes PDF
                </Button>
                <Button variant="outline" className="justify-start">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save Category to Favorites
                </Button>
                <Link href="/eligibility">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Check Your Eligibility</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
