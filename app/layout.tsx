import type React from "react"
import "./globals.css"
import { Orbitron } from "next/font/google"
import type { Metadata } from "next"
import { AuthProvider } from "./contexts/AuthContext" // Ensure this path is correct

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "TechBoost - Boost Your Website's Performance",
  description: "Advanced AI-powered platform for improving website performance and development workflow.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable}`}>
        <AuthProvider> {/* Wrap the entire app with AuthProvider */}
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'