"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const trafficData = [
  { date: "2024-02-11", visits: 1200 },
  { date: "2024-02-12", visits: 1400 },
  { date: "2024-02-13", visits: 1300 },
  { date: "2024-02-14", visits: 1500 },
  { date: "2024-02-15", visits: 1800 },
  { date: "2024-02-16", visits: 1600 },
  { date: "2024-02-17", visits: 2000 },
]

const sourceData = [
  { source: "Direct", value: 400 },
  { source: "Organic Search", value: 300 },
  { source: "Referral", value: 200 },
  { source: "Social", value: 100 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function AnalyticsPage() {
  const [selectedWebsite, setSelectedWebsite] = useState<string>("")

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Analytics & Clicks</CardTitle>
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

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visits" stroke="#FFA500" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={sourceData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Page Views by URL</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { url: "/home", views: 1200 },
                      { url: "/about", views: 800 },
                      { url: "/contact", views: 600 },
                      { url: "/blog", views: 1000 },
                      { url: "/products", views: 900 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="url" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#FFA500" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

