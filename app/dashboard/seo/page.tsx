"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Globe, ArrowUpRight, Trash2 } from "lucide-react"

type Website = {
  id: string
  url: string
  status: "pending" | "boosted" | "needs_improvement"
  score: number
  lastAnalyzed: string
  metrics: {
    performance: number
    accessibility: number
    seo: number
    bestPractices: number
  }
}

const mockWebsites: Website[] = [
  {
    id: "1",
    url: "example.com",
    status: "boosted",
    score: 85,
    lastAnalyzed: "2024-02-17",
    metrics: {
      performance: 90,
      accessibility: 85,
      seo: 95,
      bestPractices: 88,
    },
  },
  {
    id: "2",
    url: "mysite.com",
    status: "needs_improvement",
    score: 65,
    lastAnalyzed: "2024-02-16",
    metrics: {
      performance: 60,
      accessibility: 75,
      seo: 70,
      bestPractices: 65,
    },
  },
]

export default function SEOPage() {
  const [url, setUrl] = useState("")
  const [websites, setWebsites] = useState<Website[]>(mockWebsites)
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null)

  const handleAnalyze = () => {
    // In a real app, this would make an API call
    const newWebsite: Website = {
      id: Math.random().toString(),
      url,
      status: "pending",
      score: 0,
      lastAnalyzed: new Date().toISOString().split("T")[0],
      metrics: {
        performance: 0,
        accessibility: 0,
        seo: 0,
        bestPractices: 0,
      },
    }
    setWebsites([...websites, newWebsite])
    setUrl("")
  }

  const handleRemove = (id: string) => {
    setWebsites(websites.filter((w) => w.id !== id))
  }

  const getStatusColor = (status: Website["status"]) => {
    switch (status) {
      case "boosted":
        return "bg-green-500"
      case "needs_improvement":
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
            <CardTitle>SEO Boost Tool</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input type="url" placeholder="Enter website URL" value={url} onChange={(e) => setUrl(e.target.value)} />
              <Button onClick={handleAnalyze}>Analyze</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Websites</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Website</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Last Analyzed</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {websites.map((website) => (
                  <TableRow key={website.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span>{website.url}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(website.status)}>{website.status.replace("_", " ")}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={website.score} className="w-[60px]" />
                        <span>{website.score}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{website.lastAnalyzed}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => setSelectedWebsite(website)}>
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleRemove(website.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {selectedWebsite && (
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analysis for {selectedWebsite.url}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                  <div className="grid gap-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Performance</span>
                        <span>{selectedWebsite.metrics.performance}%</span>
                      </div>
                      <Progress value={selectedWebsite.metrics.performance} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Accessibility</span>
                        <span>{selectedWebsite.metrics.accessibility}%</span>
                      </div>
                      <Progress value={selectedWebsite.metrics.accessibility} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>SEO</span>
                        <span>{selectedWebsite.metrics.seo}%</span>
                      </div>
                      <Progress value={selectedWebsite.metrics.seo} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Best Practices</span>
                        <span>{selectedWebsite.metrics.bestPractices}%</span>
                      </div>
                      <Progress value={selectedWebsite.metrics.bestPractices} />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Improvement Suggestions</h3>
                  <ul className="space-y-2">
                    <li>Optimize images for better performance</li>
                    <li>Add meta descriptions to all pages</li>
                    <li>Improve mobile responsiveness</li>
                    <li>Fix broken links</li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button>Boost Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

