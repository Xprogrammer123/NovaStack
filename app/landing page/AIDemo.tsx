"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Download, Play, Pause, RefreshCw } from "lucide-react";

const previewCode = `
<div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-4">Product Card</h2>
  <img src="product.jpg" alt="Product" className="w-full h-48 object-cover rounded mb-4" />
  <p className="text-gray-600 mb-4">Product description goes here...</p>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Buy Now
  </button>
</div>
`;

export default function AIDemo() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedCode(previewCode);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-[#2A2A2A] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">AI Component Generator</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Generate beautiful UI components in seconds using our AI-powered tool
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 rounded-lg p-6"
          >
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Describe your component</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a product card with an image, title, description, and a buy button..."
                className="w-full h-32 px-4 py-2 bg-black/50 text-white border border-orange-500/20 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Generate Component
                </>
              )}
            </button>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Preview</h3>
              {generatedCode && (
                <button className="px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 rounded-lg text-orange-500 flex items-center gap-2 transition-colors group">
                  <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Download
                </button>
              )}
            </div>
            <div className="relative">
              <pre className="p-4 bg-black/50 rounded-lg overflow-x-auto font-mono text-sm">
                <code className="text-gray-300">
                  {generatedCode || "// Your generated code will appear here..."}
                </code>
              </pre>
              {!generatedCode && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-500 flex items-center gap-2">
                    <Code2 className="w-6 h-6" />
                    Waiting for input...
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Instant Generation",
              description: "Get your component code in seconds",
              icon: Play
            },
            {
              title: "Customizable Output",
              description: "Adjust the generated code to your needs",
              icon: RefreshCw
            },
            {
              title: "Multiple Frameworks",
              description: "Support for React, Vue, and more",
              icon: Code2
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/50 p-6 rounded-lg text-center group hover:bg-orange-500/5 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

