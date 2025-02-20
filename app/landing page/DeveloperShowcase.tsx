"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check, Code2, Github, Star } from "lucide-react";

const codeSnippets = [
  {
    title: "React Custom Hook - useLocalStorage",
    author: "Sarah Chen",
    stars: 245,
    language: "TypeScript",
    code: `const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
};`,
  },
 
  {
    title: "Next.js API Route with Rate Limiting",
    author: "Alex Thompson",
    stars: 312,
    language: "TypeScript",
    code: `import { NextApiRequest, NextApiResponse } from 'next';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await limiter(req, res);
    // Your API logic here
  } catch (error) {
    res.status(429).json({ error: 'Too many requests' });
  }
}`,
  }
];

const recentContributions = [
  "Sarah Chen contributed a new React hook",
  "Mike Johnson updated animation library",
  "Alex Thompson fixed a critical bug",
  "Emma Wilson added new components"
];

export default function DeveloperShowcase() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Developer Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore and share code snippets with developers worldwide
          </p>
        </motion.div>

        {/* Live Contributions Feed */}
        <div className="mb-12 bg-orange-500/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <Github className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg font-semibold">Recent Contributions</h3>
          </div>
          <div className="space-y-2">
            {recentContributions.map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                {contribution}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {codeSnippets.map((snippet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/50 rounded-lg border border-orange-500/20 hover:border-orange-500 transition-colors group"
            >
              <div className="p-6 border-b border-orange-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold">{snippet.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Star className="w-4 h-4 text-orange-500" />
                    {snippet.stars}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>by {snippet.author}</span>
                  <span>{snippet.language}</span>
                </div>
              </div>
              
              <div className="relative group">
                <pre className="p-6 overflow-x-auto font-mono text-sm">
                  <code>{snippet.code}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(snippet.code, index)}
                  className="absolute top-4 right-4 p-2 bg-orange-500/10 hover:bg-orange-500/20 rounded-lg transition-colors"
                >
                  {copiedIndex === index ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-orange-500" />
                  )}
                </button>
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
            Contribute Your Code
          </button>
        </motion.div>
      </div>
    </section>
  );
}

