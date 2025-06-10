"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Download, ExternalLink, Bookmark, Calendar, MapPin, Users, IndianRupee } from "lucide-react"
import Link from "next/link"
import { schemes, type Scheme } from "@/data/schemes"

export function ResultsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedState, setSelectedState] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory =
      selectedCategory === "all" || scheme.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesState = selectedState === "all" || scheme.state === selectedState || scheme.state === "All India"

    return matchesSearch && matchesCategory && matchesState
  })

  const sortedSchemes = [...filteredSchemes].sort((a, b) => {
    switch (sortBy) {
      case "deadline":
        return a.deadline.localeCompare(b.deadline)
      case "benefits":
        return b.benefits.localeCompare(a.benefits)
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const handleApplyNow = (scheme: Scheme) => {
    // Open the official application URL in a new tab
    window.open(scheme.applicationUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your Eligible Schemes</h1>
          <p className="text-xl text-gray-600">Found {sortedSchemes.length} schemes matching your profile</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search schemes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Women">Women</SelectItem>
                  <SelectItem value="Employment">Employment</SelectItem>
                  <SelectItem value="Housing">Housing</SelectItem>
                  <SelectItem value="Social Security">Social Security</SelectItem>
                  <SelectItem value="Banking">Banking</SelectItem>
                  <SelectItem value="Energy">Energy</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Food Security">Food Security</SelectItem>
                  <SelectItem value="Insurance">Insurance</SelectItem>
                  <SelectItem value="Fisheries">Fisheries</SelectItem>
                  <SelectItem value="Forestry">Forestry</SelectItem>
                </SelectContent>
              </Select>
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
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
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
                      {scheme.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-teal-100 text-teal-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4" />
                        <span>{scheme.benefits}</span>
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
                        <span>{scheme.targetGroup}</span>
                      </div>
                    </div>
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

        {sortedSchemes.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-gray-500 mb-4">
                <Search className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No schemes found</h3>
                <p>Try adjusting your filters or search terms</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
