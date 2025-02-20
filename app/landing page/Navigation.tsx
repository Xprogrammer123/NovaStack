"use client";

import { motion } from "framer-motion";
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-2 bg-black relative overflow-hidden border-b-2 border-orange-600">
    {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-8 w-8 rounded-full bg-[#FF8C42]" />
              </motion.div>
              <span className="text-xl font-bold font-display">NovaStack</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-sm hover:text-[#FF8C42] transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm hover:text-[#FF8C42] transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-sm hover:text-[#FF8C42] transition-colors">
                Pricing
              </Link>
              <Link href="#demo" className="text-sm hover:text-[#FF8C42] transition-colors">
                Demo
              </Link>
            </div>
    
    <div className="flex items-center space-x-4">
      <Link href="/login" passHref>
        <Button className="bg-[#FF8C42] text-white hover:bg-[#FF8C42]/90 hidden sm:inline-flex">
          Get Started
        </Button>
      </Link>

      
      <Link href="/login" passHref>
        <Button variant="ghost" className="sm:hidden">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </Link>
          </div>

          </div>
        </div>
      </nav>
    </section>
  );
}

