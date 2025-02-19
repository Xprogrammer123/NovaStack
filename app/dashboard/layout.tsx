"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BarChart,
  Code,
  Newspaper,
  Search,
  Component,
  Lightbulb,
  Wrench,
  Settings,
  LogOut,
} from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthProvider } from "../contexts/AuthContext" // ✅ Correct import

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Code, label: "Contributions", href: "/dashboard/contributions" },
  { icon: Newspaper, label: "News", href: "/dashboard/news" },
  { icon: Search, label: "SEO", href: "/dashboard/seo" },
  { icon: Component, label: "Create Components", href: "/dashboard/ai" },
  { icon: Lightbulb, label: "Suggestions", href: "/dashboard/suggestions" },
  { icon: Wrench, label: "Tools", href: "/dashboard/tools" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  return (
    <AuthProvider> {/* ✅ Wrap everything inside AuthProvider */}
      <div className="flex min-h-screen bg-background text-foreground">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border">
          <div className="p-6 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">TechBoost</span>
            </Link>
            <ThemeToggle />
          </div>
          <nav className="space-y-1 px-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                    isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
          <div className="absolute bottom-0 w-64 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                {user?.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{user?.name}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <Button variant="outline" className="w-full flex items-center justify-center" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </AuthProvider>
  )
}

