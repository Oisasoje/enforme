"use client";

import { useState } from "react";
import { CheckCircle2, Users, User, ArrowRight, Star, Zap } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "singles",
    title: "Singles Membership",
    description:
      "Individual plans focused on personal goals and self-improvement.",
    icon: User,
    color: "from-blue-500 to-indigo-600",
    programs: [
      {
        id: "weight-loss",
        title: "Weight Loss",
        description:
          "A comprehensive program designed to help you shed pounds effectively.",
        features: [
          "Personalized meal plans",
          "HIIT & Cardio sessions",
          "Weekly progress tracking",
          "Nutritionist consultation",
        ],
        basePrice: 25000,
        image: "/weight.jpg",
        tag: "Most Popular",
      },
      {
        id: "muscle-building",
        title: "Muscle Building",
        description:
          "Focus on hypertrophy and strength gains with expert-led training.",
        features: [
          "Customized lifting splits",
          "Strength assessment",
          "Supplementation guide",
          "Form correction workshops",
        ],
        basePrice: 30000,
        image: "/strength.jpg",
        tag: "Premium",
      },
      {
        id: "endurance",
        title: "Endurance & Stamina",
        description:
          "Boost cardiovascular health and stamina for sports or general fitness.",
        features: [
          "Run & Swim coaching",
          "Circuit training",
          "Heart rate monitoring",
          "Recovery strategies",
        ],
        basePrice: 20000,
        image: "/endurance.jpg",
      },
    ],
  },
  {
    id: "couple",
    title: "Couple Membership",
    description:
      "Train together with a partner. Shared goals, shared success, better value.",
    icon: Users,
    color: "from-rose-500 to-orange-500",
    programs: [
      {
        id: "couple-weight-loss",
        title: "Couple Weight Loss",
        description:
          "A comprehensive program designed for two people to shed pounds effectively.",
        features: [
          "Shared meal plans",
          "Partner HIIT & Cardio sessions",
          "Weekly progress tracking",
          "Nutritionist consultation",
        ],
        basePrice: 45000,
        image: "/couple-weight.jpg",
        tag: "Best Value",
      },
      {
        id: "couple-strength",
        title: "Couple Strength",
        description:
          "Building strength and fitness together is more rewarding and effective.",
        features: [
          "Partner lifting splits",
          "Joint goal setting",
          "Couple motivation sessions",
          "Progress reviews together",
        ],
        basePrice: 55000,
        image: "/couple-strength.jpg",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate Membership",
    description:
      "Tailored wellness programs and membership plans for teams and organizations.",
    icon: Zap,
    color: "from-amber-400 to-amber-600",
    programs: [
      {
        id: "corporate-wellness",
        title: "Team Excellence",
        description:
          "Elevate your team's performance with our custom corporate membership plans.",
        features: [
          "Dedicated support",
          "Measurable results",
          "Bulk employee discounts",
          "Executive wellness reports",
        ],
        basePrice: 150000,
        image: "/workplace.jpg",
        tag: "Enterprise",
      },
    ],
  },
];

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState("singles");

  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-[#1a3a52] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#c9a961]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-[#1a3a52]/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-gray-200 to-gray-500">
              Transform Your Life
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover our elite training programs designed to push your limits
              and achieve the results you've always dreamed of.
            </p>
          </motion.div>

          {/* Custom Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-white/5 backdrop-blur-md rounded-2xl w-fit mx-auto border border-white/10 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center cursor-pointer gap-2 px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-[#c9a961] text-black  font-bold shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <cat.icon size={18} />
                <span className="whitespace-nowrap">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activeCategory?.programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-[#c9a961]/30   border border-white/5 rounded-2xl overflow-hidden hover:border-[#c9a961]/30 transition-all duration-500"
                >
                  {/* Image Holder */}
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-[#121212]/20 to-transparent" />

                    {program.tag && (
                      <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                        <Star
                          size={12}
                          className="text-[#c9a961] fill-[#c9a961]"
                        />
                        {program.tag}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 relative">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#c9a961] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                      {program.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {program.features.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm text-gray-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#c9a961] shrink-0"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-gray-500 text-xs block mb-1">
                          {activeTab === "corporate"
                            ? "Starting at"
                            : "Monthly"}
                        </span>
                        <span className="text-2xl font-bold">
                          ₦{program.basePrice.toLocaleString()}
                        </span>
                      </div>
                      <button className="bg-white text-black p-3 rounded-full hover:bg-[#c9a961] transition-colors group/btn">
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
