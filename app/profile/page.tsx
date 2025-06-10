"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 1234567890"
  })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">My Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone"
                    value={userDetails.phone}
                    onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                  />
                </div>
                <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <p className="text-gray-700">{userDetails.name}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="text-gray-700">{userDetails.email}</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p className="text-gray-700">{userDetails.phone}</p>
                </div>
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              </div>
            )}

            <div className="mt-8">
              <CardTitle className="text-xl mb-4">My Documents</CardTitle>
              <div className="grid md:grid-cols-2 gap-4">
                {['Aadhaar Card', 'Caste Certificate', 'Ration Card', 'PAN Card'].map((doc) => (
                  <Card key={doc}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <span>{doc}</span>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Download</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button className="mt-4">Upload New Document</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}