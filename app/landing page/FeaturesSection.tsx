"use client";

import { motion } from "framer-motion";
import { Search, Newspaper, LineChart, Code2, Bot, Mailbox as Toolbox } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "SEO Boost Tool",
    description: "Optimize your website for search engines and track performance."
  },
  {
    icon: Newspaper,
    title: "Tech News Aggregator",
    description: "Stay updated with the latest tech news from top companies."
  },
  {
    icon: LineChart,
    title: "Website Improvement",
    description: "Get actionable tips to improve your site's performance."
  },
  {
    icon: Code2,
    title: "Developer Hub",
    description: "Share and discover reusable code snippets and components."
  },
  {
    icon: Bot,
    title: "AI Component Creator",
    description: "Generate basic UI components with AI in seconds."
  },
  {
    icon: Toolbox,
    title: "Tech Tool Directory",
    description: "Explore and compare the best tech tools and frameworks."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to enhance your web presence and stay ahead in the tech world
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-black/50 hover:bg-orange-500/10 transition-colors group"
            >
              <feature.icon className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
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
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}

