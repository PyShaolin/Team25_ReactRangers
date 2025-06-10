"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  Users,
  IndianRupee,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import { schemes } from "@/data/schemes"

interface SchemeDetailsProps {
  schemeId: string
}

export function SchemeDetails({ schemeId }: SchemeDetailsProps) {
  // Find the scheme by ID
  const scheme = schemes.find((s) => s.id === schemeId)

  if (!scheme) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center py-12">
            <CardContent>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Scheme Not Found</h1>
              <p className="text-gray-600">The requested scheme could not be found.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const handleApplyNow = () => {
    window.open(scheme.applicationUrl, "_blank", "noopener,noreferrer")
  }

  const handleOfficialWebsite = () => {
    window.open(scheme.officialWebsite, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-2xl lg:text-3xl mb-4">{scheme.name}</CardTitle>
                <p className="text-lg text-gray-600 mb-4">{scheme.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {scheme.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-teal-100 text-teal-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:w-48">
                <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleApplyNow}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Quick Info */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <IndianRupee className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-600">Benefits</div>
                  <div className="font-semibold">{scheme.benefits}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-600">Deadline</div>
                  <div className="font-semibold">{scheme.deadline}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-600">Coverage</div>
                  <div className="font-semibold">{scheme.state}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-sm text-gray-600">Target Group</div>
                  <div className="font-semibold">{scheme.targetGroup}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Scheme Description
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">{scheme.description}</p>
            {scheme.ministry && (
              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="text-sm text-teal-800">
                  <strong>Implementing Ministry:</strong> {scheme.ministry}
                </div>
                {scheme.launchYear && (
                  <div className="text-sm text-teal-800 mt-1">
                    <strong>Launch Year:</strong> {scheme.launchYear}
                  </div>
                )}
                {scheme.budgetAllocation && (
                  <div className="text-sm text-teal-800 mt-1">
                    <strong>Budget Allocation:</strong> {scheme.budgetAllocation}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Eligibility Criteria */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Eligibility Criteria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {scheme.eligibility.map((criteria, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{criteria}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {scheme.documents.map((document, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FileText className="w-4 h-4 text-teal-600" />
                  <span className="text-gray-700">{document}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Step-by-Step Application Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheme.applicationSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">Important Notice</h4>
                <p className="text-orange-800">
                  Please ensure all documents are valid and up-to-date before applying. Incomplete applications may be
                  rejected. For any queries, contact the helpline or visit your nearest Common Service Center (CSC).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4" onClick={handleOfficialWebsite}>
                <ExternalLink className="w-4 h-4 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Official Website</div>
                  <div className="text-sm text-gray-600">Visit the official portal</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4" onClick={handleApplyNow}>
                <FileText className="w-4 h-4 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Apply Online</div>
                  <div className="text-sm text-gray-600">Start your application</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <Users className="w-4 h-4 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Helpline</div>
                  <div className="text-sm text-gray-600">Get support</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <Download className="w-4 h-4 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Download Forms</div>
                  <div className="text-sm text-gray-600">Get application forms</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
