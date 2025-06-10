"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function SchemeAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your government scheme assistant. How can I help you today?"
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input }
    setMessages((prev: Message[]) => [...prev, userMessage as Message])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      // Handle HTTP errors
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Request failed with status ${response.status}`)
      }

      const data = await response.json()
      setMessages(prev => [...prev, { role: "assistant", content: data.message }])
    } catch (error) {
      console.error("Error:", error)
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `Sorry, I couldn't process your request. ${error instanceof Error ? error.message : "Please try again later."}`
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Government Scheme Assistant
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-[400px] overflow-y-auto space-y-4 p-4 border rounded-lg bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    message.role === "user" 
                      ? "bg-teal-600 text-white rounded-br-none" 
                      : "bg-blue-50 border border-blue-100 text-gray-900 rounded-bl-none"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                  <span>Searching for relevant schemes...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about government schemes, benefits, or eligibility..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-teal-600 hover:bg-teal-700"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </form>
          
          <div className="text-xs text-gray-500 text-center">
            Assistant may occasionally provide inaccurate information. Verify important details.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}