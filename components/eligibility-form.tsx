"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Mic, MicOff } from "lucide-react"
import { useRouter } from "next/navigation"

interface FormData {
  // Step 1
  age: string
  gender: string
  caste: string
  disability: boolean
  region: string
  state: string

  // Step 2
  income: string
  occupation: string
  jobType: string

  // Step 3
  education: string
  maritalStatus: string
  bplStatus: boolean
}

export function EligibilityForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    age: "",
    gender: "",
    caste: "",
    disability: false,
    region: "",
    state: "",
    income: "",
    occupation: "",
    jobType: "",
    education: "",
    maritalStatus: "",
    bplStatus: false,
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form and redirect to results
      router.push("/results")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleVoice = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
    // Mock voice recognition implementation
    if (!isVoiceEnabled) {
      console.log("Voice navigation enabled")
    } else {
      console.log("Voice navigation disabled")
    }
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="age">Age *</Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender *</Label>
          <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="caste">Caste Category</Label>
          <Select value={formData.caste} onValueChange={(value) => handleInputChange("caste", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General</SelectItem>
              <SelectItem value="obc">OBC</SelectItem>
              <SelectItem value="sc">SC</SelectItem>
              <SelectItem value="st">ST</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="region">Region *</Label>
          <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urban">Urban</SelectItem>
              <SelectItem value="rural">Rural</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="state">State *</Label>
        <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
            <SelectItem value="karnataka">Karnataka</SelectItem>
            <SelectItem value="maharashtra">Maharashtra</SelectItem>
            <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
            <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
            <SelectItem value="west-bengal">West Bengal</SelectItem>
            {/* Add more states */}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="disability"
          checked={formData.disability}
          onCheckedChange={(checked) => handleInputChange("disability", checked as boolean)}
        />
        <Label htmlFor="disability">Person with Disability (PWD)</Label>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="income">Annual Family Income *</Label>
        <Select value={formData.income} onValueChange={(value) => handleInputChange("income", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select income range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="below-1-lakh">Below ₹1 Lakh</SelectItem>
            <SelectItem value="1-3-lakh">₹1 - 3 Lakh</SelectItem>
            <SelectItem value="3-5-lakh">₹3 - 5 Lakh</SelectItem>
            <SelectItem value="5-8-lakh">₹5 - 8 Lakh</SelectItem>
            <SelectItem value="above-8-lakh">Above ₹8 Lakh</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation *</Label>
          <Select value={formData.occupation} onValueChange={(value) => handleInputChange("occupation", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="farmer">Farmer</SelectItem>
              <SelectItem value="business">Business Owner</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
              <SelectItem value="unemployed">Unemployed</SelectItem>
              <SelectItem value="retired">Retired</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobType">Employment Type</Label>
          <Select value={formData.jobType} onValueChange={(value) => handleInputChange("jobType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="self-employed">Self Employed</SelectItem>
              <SelectItem value="not-applicable">Not Applicable</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="education">Education Level *</Label>
          <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="below-10th">Below 10th</SelectItem>
              <SelectItem value="10th">10th Pass</SelectItem>
              <SelectItem value="12th">12th Pass</SelectItem>
              <SelectItem value="graduate">Graduate</SelectItem>
              <SelectItem value="post-graduate">Post Graduate</SelectItem>
              <SelectItem value="professional">Professional Degree</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="maritalStatus">Marital Status</Label>
          <Select value={formData.maritalStatus} onValueChange={(value) => handleInputChange("maritalStatus", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select marital status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="bplStatus"
          checked={formData.bplStatus}
          onCheckedChange={(checked) => handleInputChange("bplStatus", checked as boolean)}
        />
        <Label htmlFor="bplStatus">Below Poverty Line (BPL) Card Holder</Label>
      </div>
    </div>
  )


  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">
            Step {currentStep} of {totalSteps}:{" "}
            {currentStep === 1
              ? "Personal Information"
              : currentStep === 2
                ? "Income & Occupation"
                : "Education & Other Details"}
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleVoice}
            className={isVoiceEnabled ? "bg-teal-100 text-teal-700" : ""}
          >
            {isVoiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            Voice {isVoiceEnabled ? "On" : "Off"}
          </Button>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-8">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button onClick={handleNext} className="bg-teal-600 hover:bg-teal-700">
            {currentStep === totalSteps ? "Find Schemes" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
