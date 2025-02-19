"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  email: string
  name: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in on initial load
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Here you would typically make an API call to authenticate the user
    // For demo purposes, we'll just set a mock user
    const mockUser: User = { id: "1", email, name: "John Doe" }
    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    router.push("/dashboard")
  }

  const signup = async (email: string, password: string, name: string) => {
    // Here you would typically make an API call to create a new user
    // For demo purposes, we'll just set a mock user
    const mockUser: User = { id: "1", email, name }
    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    router.push("/dashboard")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

