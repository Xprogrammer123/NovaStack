"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star, ExternalLink, Bookmark } from "lucide-react"

type Tool = {
  id: string
  name: string
  description: string
  category: string
  website: string
  github: string
  stars: number
  price: string
  tags: string[]
  saved: boolean
}

const mockTools: Tool[] = [
  {
    id: "1",
    name: "Next.js",
    description:
      "The React framework for production, providing hybrid static & server rendering, TypeScript support, smart bundling, and more.",
    category: "Framework",
    website: "https://nextjs.org",
    github: "https://github.com/vercel/next.js",
    stars: 98500,
    price: "Free",
    tags: ["react", "typescript", "ssr", "static"],
    saved: false,
  },
  {
    id: "2",
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    category: "CSS",
    website: "https://tailwindcss.com",
    github: "https://github.com/tailwindlabs/tailwindcss",
    stars: 71200,
    price: "Free",
    tags: ["css", "utility", "responsive"],
    saved: true,
  },
]

export default function ToolsPage() {
  const [tools, setTools] = useState<Tool[]>(mockTools)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTools = tools.filter((tool) => tool.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const toggleSaved = (id: string) => {
    setTools(tools.map((tool) => (tool.id === id ? { ...tool, saved: !tool.saved } : tool)))
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Tech Tool Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="search"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tool</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Stars</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTools.map((tool) => (
                  <TableRow key={tool.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{tool.name}</div>
                        <div className="text-sm text-muted">{tool.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge>{tool.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {tool.stars.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>{tool.price}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {tool.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => toggleSaved(tool.id)}>
                          <Bookmark className={`h-4 w-4 ${tool.saved ? "fill-current" : ""}`} />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => window.open(tool.website, "_blank")}>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

