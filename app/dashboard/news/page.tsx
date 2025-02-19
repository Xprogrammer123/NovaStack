"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, Share2, ExternalLink } from "lucide-react"

type Article = {
  id: string
  title: string
  excerpt: string
  category: string
  source: string
  date: string
  image: string
  saved: boolean
}

const categories = ["All", "AI", "Blockchain", "Cloud", "DevOps", "Security"]

const mockArticles: Article[] = [
  {
    id: "1",
    title: "The Future of AI in Web Development",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we build websites and applications...",
    category: "AI",
    source: "TechCrunch",
    date: "2024-02-17",
    image: "/placeholder.svg",
    saved: false,
  },
  {
    id: "2",
    title: "Understanding Web3 and Blockchain Technology",
    excerpt: "A comprehensive guide to blockchain technology and its impact on web development...",
    category: "Blockchain",
    source: "Wired",
    date: "2024-02-16",
    image: "/placeholder.svg",
    saved: true,
  },
]

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>(mockArticles)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleSaved = (id: string) => {
    setArticles(articles.map((article) => (article.id === id ? { ...article, saved: !article.saved } : article)))
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Tech News Aggregator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid grid-cols-3 sm:grid-cols-6">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id}>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-[2fr_1fr] gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge>{article.category}</Badge>
                      <span className="text-sm text-muted">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <p className="text-muted">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted">Source: {article.source}</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => toggleSaved(article.id)}>
                          <Bookmark className={`h-4 w-4 ${article.saved ? "fill-current" : ""}`} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-video sm:aspect-square">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt=""
                      className="absolute inset-0 object-cover rounded-lg"
                    />
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

