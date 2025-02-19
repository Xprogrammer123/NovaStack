"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Basic SEO analysis",
      "Limited tech news access",
      "Community support",
      "1 project",
      "Basic analytics"
    ]
  },
  {
    name: "Pro",
    price: { monthly: 29, yearly: 290 },
    features: [
      "Advanced SEO tools",
      "Full tech news access",
      "Priority support",
      "10 projects",
      "Advanced analytics",
      "AI component generation",
      "Custom reporting"
    ]
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    features: [
      "Custom SEO solutions",
      "API access",
      "24/7 dedicated support",
      "Unlimited projects",
      "Real-time analytics",
      "Advanced AI features",
      "White-label reports",
      "Custom integrations"
    ]
  }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Select the perfect plan for your needs and start boosting your web presence
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-orange-500/20 rounded-full p-1 transition-colors"
            >
              <motion.div
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-orange-500 rounded-full"
              />
            </button>
            <span className={`${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-orange-500">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative bg-black/50 p-8 rounded-lg border border-orange-500/20 group-hover:border-orange-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-400">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors">
                  {plan.name === "Free" ? "Start Free Trial" : "Upgrade Now"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

