"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" defaultValue="john@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">New Password</Label>
                  <Input id="password" type="password" placeholder="Enter new password" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted">Receive notifications via email</p>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted">Receive notifications in browser</p>
                  </div>
                  <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label>Current Plan</Label>
                  <Select defaultValue="pro">
                    <SelectTrigger>
                      <SelectValue placeholder="Select plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="pro">Pro</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Payment Method</Label>
                  <Input type="text" placeholder="**** **** **** 1234" disabled />
                </div>
                <div className="grid gap-2">
                  <Label>Billing Email</Label>
                  <Input type="email" placeholder="billing@example.com" defaultValue="john@example.com" />
                </div>
                <Button>Update Billing Info</Button>
              </CardContent>

             
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

