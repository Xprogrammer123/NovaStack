"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Download, Copy, Save } from "lucide-react"

type GeneratedComponent = {
  id: string
  prompt: string
  code: string
  framework: string
  date: string
}

const mockComponents: GeneratedComponent[] = [
  {
    id: "1",
    prompt: "A responsive navigation menu with dropdown support",
    code: `
function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Logo />
        <ul className="hidden md:flex space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <button className="md:hidden">Menu</button>
    </nav>
  )
}
    `,
    framework: "react",
    date: "2024-02-17",
  },
]

export default function AIPage() {
  const [prompt, setPrompt] = useState("")
  const [framework, setFramework] = useState("react")
  const [components, setComponents] = useState<GeneratedComponent[]>(mockComponents)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      const newComponent: GeneratedComponent = {
        id: Math.random().toString(),
        prompt,
        code: `// Generated code for: ${prompt}`,
        framework,
        date: new Date().toISOString().split("T")[0],
      }
      setComponents([newComponent, ...components])
      setIsGenerating(false)
      setPrompt("")
    }, 2000)
  }

  return (
    <div className="container mx-auto py-8 font-foreground font-sans">
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>AI Component Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Textarea
                placeholder="Describe the component you want to create..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={framework} onValueChange={setFramework}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="sm:flex-1" onClick={handleGenerate} disabled={!prompt || isGenerating}>
                  {isGenerating ? "Generating..." : "Generate Component"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {components.map((component) => (
            <Card key={component.id}>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <Badge>{component.framework}</Badge>
                    <span className="text-sm text-muted">{component.date}</span>
                  </div>
                  <p className="text-muted">{component.prompt}</p>
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{component.code}</code>
                  </pre>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
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

