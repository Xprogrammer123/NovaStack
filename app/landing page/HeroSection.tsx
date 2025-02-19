"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import TypewriterComponent from "typewriter-effect"
import { ArrowRight} from "lucide-react"


export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
     
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-10"
          style={{
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0",
          }}
        />

        <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Make Your{" "}
              <span className="block text-[#FF8C42]">
                <TypewriterComponent
                  options={{
                    strings: ["Website", "Tech Stack", "Development"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              Exceptional
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Achieve precision and confidence in your tech development with our advanced AI-powered platform.
              Experience up to 95% improvement in website performance across multiple metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#FF8C42] text-white hover:bg-[#FF8C42]/90 group relative overflow-hidden"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Start Building <ArrowRight className="ml-2 h-4 w-4" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.1 }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
              <Button variant="outline" size="lg" className="border-[#FF8C42] text-[#FF8C42] hover:bg-[#FF8C42]/10">
                View Demo
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-[#FF8C42]">95%</div>
                <div className="text-sm text-gray-400">Performance Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF8C42]">24/7</div>
                <div className="text-sm text-gray-400">Support Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF8C42]">10k+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">TechBoost Analytics</h3>
                  <p className="text-sm text-gray-400">Real-time performance metrics</p>
                </div>
                <Button size="sm" variant="ghost" className="text-[#FF8C42]">
                  Live Demo
                </Button>
              </div>
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-r from-[#FF8C42]/20 to-transparent rounded-lg flex items-end p-4">
                  <div className="w-8 h-20 bg-[#FF8C42]/20 rounded-md mx-1"></div>
                  <div className="w-8 h-32 bg-[#FF8C42]/40 rounded-md mx-1"></div>
                  <div className="w-8 h-24 bg-[#FF8C42]/30 rounded-md mx-1"></div>
                  <div className="w-8 h-28 bg-[#FF8C42] rounded-md mx-1"></div>
                  <div className="w-8 h-16 bg-[#FF8C42]/50 rounded-md mx-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-white/5 rounded-lg p-4">
                    <div className="w-full h-2 bg-[#FF8C42]/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#FF8C42]"
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div className="h-20 bg-white/5 rounded-lg p-4">
                    <div className="w-full h-2 bg-[#FF8C42]/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#FF8C42]"
                        initial={{ width: "0%" }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                  <div className="h-20 bg-white/5 rounded-lg p-4">
                    <div className="w-full h-2 bg-[#FF8C42]/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#FF8C42]"
                        initial={{ width: "0%" }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

