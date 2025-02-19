"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"

type Suggestion = {
  id: string
  title: string
  description: string
  priority: "high" | "medium" | "low"
  status: "completed" | "in_progress" | "pending"
  impact: number
  effort: number
}

const mockSuggestions: Suggestion[] = [
  {
    id: "1",
    title: "Improve page load speed",
    description: "Optimize images and minimize JavaScript bundles to improve loading performance.",
    priority: "high",
    status: "in_progress",
    impact: 85,
    effort: 60,
  },
  {
    id: "2",
    title: "Fix broken links",
    description: "Several broken links were found in the navigation and footer sections.",
    priority: "medium",
    status: "pending",
    impact: 70,
    effort: 30,
  },
]

export default function SuggestionsPage() {
  const [suggestions] = useState<Suggestion[]>(mockSuggestions)
  const [selectedWebsite, setSelectedWebsite] = useState<string>("")

  const getStatusIcon = (status: Suggestion["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in_progress":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getPriorityColor = (priority: Suggestion["priority"]) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Website Improvement Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedWebsite} onValueChange={setSelectedWebsite}>
              <SelectTrigger>
                <SelectValue placeholder="Select a website" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="example.com">example.com</SelectItem>
                <SelectItem value="mysite.com">mysite.com</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.id}>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(suggestion.status)}
                      <h3 className="text-xl font-bold">{suggestion.title}</h3>
                    </div>
                    <Badge className={getPriorityColor(suggestion.priority)}>{suggestion.priority} priority</Badge>
                  </div>
                  <p className="text-muted">{suggestion.description}</p>
                  <div className="grid gap-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Impact</span>
                        <span>{suggestion.impact}%</span>
                      </div>
                      <Progress value={suggestion.impact} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Effort Required</span>
                        <span>{suggestion.effort}%</span>
                      </div>
                      <Progress value={suggestion.effort} />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">View Details</Button>
                    <Button>Start Improvement</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

