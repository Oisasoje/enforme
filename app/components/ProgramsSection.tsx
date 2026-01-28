"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Variants } from "framer-motion";

export function ProgramsSection() {
  const programs = [
    {
      name: "Starter",
      price: "29,990",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "3 personal training sessions/month",
        "Access to all group classes",
        "Basic nutrition plan",
        "Locker access",
      ],
      helper: "Included in free trial",
    },
    {
      name: "Pro",
      price: "59,990",
      description: "For dedicated fitness enthusiasts",
      features: [
        "8 personal training sessions/month",
        "Unlimited group classes",
        "Custom nutrition plan",
        "Locker access",
        "Body composition analysis",
        "Priority class booking",
      ],
      featured: true,
      helper: "Unlock after trial",
    },
    {
      name: "Elite",
      price: "99,990",
      description: "Maximum results with premium support",
      features: [
        "Unlimited personal training",
        "Unlimited group classes",
        "Premium nutrition coaching",
        "Private locker",
        "Monthly body composition analysis",
        "Priority everything",
        "Guest passes (2/month)",
      ],
      helper: "Upgrade anytime",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="programs" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-[#1a3a52] mb-4">
            Membership Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to match your fitness goals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`rounded-2xl p-8 relative ${
                program.featured
                  ? "bg-[#1a3a52] text-white scale-105 shadow-2xl z-10"
                  : "bg-gray-50 text-[#1a3a52]"
              }`}
            >
              {program.featured && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-[#c9a961] mb-4 text-sm uppercase tracking-wide font-bold"
                >
                  Most Popular
                </motion.div>
              )}
              <h3 className="text-3xl mb-2">{program.name}</h3>
              <div className="mb-4">
                <span className="text-5xl">₦{program.price}</span>
                <span
                  className={
                    program.featured ? "text-gray-300" : "text-gray-600"
                  }
                >
                  /month
                </span>
              </div>
              <p
                className={`mb-6 ${program.featured ? "text-gray-300" : "text-gray-600"}`}
              >
                {program.description}
              </p>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="shrink-0 text-[#c9a961]" size={20} />
                    <span
                      className={
                        program.featured ? "text-gray-200" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`text-sm ${index % 2 === 0 ? "text-gray-500" : "text-gray-300"} mb-4`}
              >
                {program.helper}
              </p>
              <button
                className={`w-full py-3 rounded-full transition-all duration-300 font-bold ${
                  program.featured
                    ? "bg-[#c9a961] text-white hover:bg-[#b89851] hover:shadow-lg"
                    : "bg-[#1a3a52] text-white hover:bg-[#2a4a62] hover:shadow-md"
                }`}
              >
                Start free trial
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
