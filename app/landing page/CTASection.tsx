"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-20" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Ready to Boost Your Website and Stay Ahead in Tech?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers who are already using our platform to enhance their web presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-orange-500 rounded-lg font-semibold group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="relative flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <button className="px-8 py-4 border border-orange-500 hover:bg-orange-500/10 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

