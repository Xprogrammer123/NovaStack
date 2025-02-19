"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ThumbsUp, MessageSquare, Share2, Code, Component, Package } from "lucide-react"

type Contribution = {
  id: string
  title: string
  description: string
  type: "component" | "snippet" | "project"
  author: string
  downloads: number
  upvotes: number
  comments: number
  tags: string[]
  code: string
}

const mockContributions: Contribution[] = [
  {
    id: "1",
    title: "Responsive Navigation Menu",
    description: "A fully responsive navigation menu with dropdown support and mobile optimization.",
    type: "component",
    author: "johndoe",
    downloads: 1234,
    upvotes: 56,
    comments: 12,
    tags: ["react", "typescript", "tailwind"],
    code: `
function Navigation() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <ul className="flex space-x-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
    `,
  },
  {
    id: "2",
    title: "Authentication Hooks",
    description: "A collection of React hooks for handling user authentication.",
    type: "snippet",
    author: "janesmith",
    downloads: 987,
    upvotes: 43,
    comments: 8,
    tags: ["react", "hooks", "authentication"],
    code: `
function useAuth() {
  const [user, setUser] = useState(null)
  
  const login = async (credentials) => {
    // Implementation
  }
  
  const logout = async () => {
    // Implementation
  }
  
  return { user, login, logout }
}
    `,
  },
]

export default function ContributionsPage() {
  const [contributions] = useState<Contribution[]>(mockContributions)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredContributions = contributions.filter((contribution) => {
    const matchesType = selectedType === "all" || contribution.type === selectedType
    const matchesSearch = contribution.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  const getTypeIcon = (type: Contribution["type"]) => {
    switch (type) {
      case "component":
        return <Component className="h-4 w-4" />
      case "snippet":
        return <Code className="h-4 w-4" />
      case "project":
        return <Package className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Developer Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="search"
                placeholder="Search contributions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Tabs value={selectedType} onValueChange={setSelectedType}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="component">Components</TabsTrigger>
                  <TabsTrigger value="snippet">Snippets</TabsTrigger>
                  <TabsTrigger value="project">Projects</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {filteredContributions.map((contribution) => (
            <Card key={contribution.id}>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(contribution.type)}
                      <h3 className="text-xl font-bold">{contribution.title}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        {contribution.downloads}
                      </Badge>
                      <Badge variant="outline">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {contribution.upvotes}
                      </Badge>
                      <Badge variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {contribution.comments}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted">{contribution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {contribution.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{contribution.code}</code>
                  </pre>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">By {contribution.author}</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
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

