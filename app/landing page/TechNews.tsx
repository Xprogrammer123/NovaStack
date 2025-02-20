"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const newsItems = [
  {
    title: "The Future of AI in Web Development",
    description: "Exploring how artificial intelligence is revolutionizing the way we build websites and applications.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    date: "2 hours ago",
    source: "TechCrunch"
  },
  {
    title: "Next.js 14 Released with Groundbreaking Features",
    description: "The latest version brings significant performance improvements and new development capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    date: "4 hours ago",
    source: "Vercel Blog"
  },
  {
    title: "Web Performance Optimization Techniques for 2025",
    description: "Learn the latest strategies to keep your website running at peak performance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    date: "6 hours ago",
    source: "Web.dev"
  },
  {
    title: "The Rise of AI-Powered Development Tools",
    description: "How machine learning is making developers more productive than ever before.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    date: "8 hours ago",
    source: "TechRadar"
  }
];

const tickerNews = [
  "Breaking: New Web Standards Announced for 2025",
  "TypeScript 6.0 Released with Major Improvements",
  "Chrome Introduces Revolutionary Developer Tools",
  "React 20 Beta Now Available for Testing"
];

export default function TechNews() {
  const [visibleNews, setVisibleNews] = useState(newsItems.slice(0, 3));
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const loadMore = () => {
    setVisibleNews(newsItems);
  };

  return (
    <section ref={containerRef} className="py-20 bg-[#2A2A2A] relative overflow-hidden">
      {/* News Ticker */}
      <div className="bg-black/50 py-8 mb-16">
        <div className="container mx-auto px-1">
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1000],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
              className="flex whitespace-nowrap text-orange-500 text-lg font-bold font-display" 
            >
              {tickerNews.concat(tickerNews).map((news, index) => (
                <span key={index} className="mx-8">
                  {news}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Latest Tech News</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest developments in technology and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleNews.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              style={{ y }}
              className="group"
            >
              <div className="bg-black/50 rounded-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-400">
                    <span>{news.date}</span>
                    <span>{news.source}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{news.description}</p>
                  <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
                    Read More <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleNews.length < newsItems.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold inline-flex items-center gap-2 group"
            >
              Load More News
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

