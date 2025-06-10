"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, Download, Trash2 } from "lucide-react"

interface Document {
  id: string
  name: string
  type: string
  uploadDate: string
  url: string
}

export function DocumentManager() {
  const [documents, setDocuments] = useState<Document[]>([])
  
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Implement file upload logic here
      console.log("Uploading file:", file)
    }
  }

  const handleDelete = async (docId: string) => {
    // Implement delete logic here
    setDocuments(documents.filter((doc: Document) => doc.id !== docId))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Input type="file" className="flex-1" onChange={handleUpload} />
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </div>
          
          <div className="grid gap-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{doc.name}</h4>
                  <p className="text-sm text-gray-500">{doc.uploadDate}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(doc.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}