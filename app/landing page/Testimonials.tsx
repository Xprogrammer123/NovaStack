"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    quote: "This platform helped me boost my website's traffic by 50%!",
    author: "Sarah Johnson",
    role: "Tech Startup Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    video: "https://example.com/testimonial1.mp4"
  },
  {
    quote: "The AI tools have revolutionized how we build our web components.",
    author: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    video: "https://example.com/testimonial2.mp4"
  },
  {
    quote: "Best investment we've made for our company's online presence.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    video: "https://example.com/testimonial3.mp4"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from developers and businesses who have transformed their web presence
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 p-8 rounded-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-48 h-48 rounded-full overflow-hidden group-hover:scale-105 transition-transform">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                  <Play className="w-12 h-12 text-orange-500 animate-pulse" />
                </button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-xl mb-6">"{testimonials[currentIndex].quote}"</p>
                <h3 className="text-lg font-bold text-orange-500">
                  {testimonials[currentIndex].author}
                </h3>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

