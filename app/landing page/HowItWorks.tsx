"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Wrench, LineChart } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account in seconds."
  },
  {
    icon: Wrench,
    title: "Use Tools",
    description: "Access SEO analysis, tech news, and AI-powered tools."
  },
  {
    icon: LineChart,
    title: "Monitor & Improve",
    description: "Track your website's performance and get improvement suggestions."
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-20 bg-black overflow-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 h-1 bg-orange-500"
        style={{ width: progressWidth }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started in three simple steps and transform your web presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-orange-500 to-orange-500 transform -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20 hover:border-orange-500 transition-colors group">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors">
            Start Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

