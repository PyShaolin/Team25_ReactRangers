"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Import other necessary components and types

// Define types for family member and form data if not already defined elsewhere
interface FamilyMember {
  id: string;
  name: string;
  age: number;
  // Add other relevant fields for a family member
}

interface FamilyRecommenderFormData {
  familyMembers: FamilyMember[];
  // Add other common fields if any
}

export default function FamilyRecommenderPage() {
  const [formData, setFormData] = useState<FamilyRecommenderFormData>({ familyMembers: [] });
  const [results, setResults] = useState<any>(null); // Replace 'any' with your results type

  const handleAddMember = () => {
    setFormData(prev => ({
      ...prev,
      familyMembers: [...prev.familyMembers, { id: Date.now().toString(), name: '', age: 0 /* Initialize other fields */ }]
    }));
  };

  const handleMemberChange = (index: number, field: keyof FamilyMember, value: string | number) => {
    setFormData(prev => {
      const updatedMembers = [...prev.familyMembers];
      updatedMembers[index] = { ...updatedMembers[index], [field]: value };
      return { ...prev, familyMembers: updatedMembers };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement API call to your backend to get scheme recommendations
    // based on formData
    console.log("Form submitted:", formData);
    // Example: const response = await fetch('/api/family-schemes', { method: 'POST', body: JSON.stringify(formData) });
    // const data = await response.json();
    // setResults(data);
    alert("Form submitted! Check console for data. Implement API call for results.");
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Family Scheme Recommender
        </h1>
        <p className="mt-3 text-xl text-gray-600 sm:mt-4">
          Find eligible government schemes for your entire family.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto bg-white p-8 shadow-xl rounded-lg">
        {formData.familyMembers.map((member, index) => (
          <div key={member.id} className="p-4 border rounded-md space-y-4">
            <h3 className="text-lg font-semibold">Family Member {index + 1}</h3>
            <div>
              <Label htmlFor={`memberName-${index}`}>Name</Label>
              <Input 
                id={`memberName-${index}`} 
                value={member.name} 
                onChange={(e) => handleMemberChange(index, 'name', e.target.value)} 
                placeholder="Enter name"
              />
            </div>
            <div>
              <Label htmlFor={`memberAge-${index}`}>Age</Label>
              <Input 
                id={`memberAge-${index}`} 
                type="number" 
                value={member.age}
                onChange={(e) => handleMemberChange(index, 'age', parseInt(e.target.value, 10))} 
                placeholder="Enter age"
              />
            </div>
            {/* Add more input fields for other family member details as needed */}
          </div>
        ))}

        <Button type="button" variant="outline" onClick={handleAddMember} className="mr-2">
          Add Family Member
        </Button>
        <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
          Find Schemes for Family
        </Button>
      </form>

      {results && (
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Schemes</h2>
          {/* TODO: Display results here, iterating through family members and their schemes */}
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}