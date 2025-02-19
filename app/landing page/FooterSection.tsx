"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Documentation", "Updates"]
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Status"]
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export default function Footer() {
  const [email,setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail("");
  };

 
    <footer className="bg-[#2A2A2A] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TechBoost</h3>
            <p className="text-gray-400 mb-6">
              Enhance your web presence with AI-powered tools and stay ahead in tech
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates and tech news
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-3 bg-black/50 rounded-lg border border-orange-500/20 focus:border-orange-500 transition-colors pr-12"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-orange-500 hover:text-orange-400 transition-colors"
              >
                {isSubscribed ? (
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                ) : (
                  <Send className="w-6 h-6" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TechBoost. All rights reserved.
        </div>
      </div>
    </footer>
}

