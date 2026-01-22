"use client";

import { useState } from "react";
//import { useNavigate } from 'react-router';
import {
  ArrowRight,
  CheckCircle2,
  User,
  Users,
  Building2,
  ArrowLeft,
  Upload,
  FileText,
} from "lucide-react";
//import { toast } from 'sonner';

export default function ProgramsPage() {
  //const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<
    "singles" | "couple" | "corporate" | null
  >(null);

  const categories = [
    {
      id: "singles",
      title: "Singles Membership",
      description:
        "Individual plans focused on personal goals and self-improvement.",
      icon: User,
      image:
        "https://images.unsplash.com/photo-1717500250863-12e2acae9ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xvJTIwZml0bmVzc3UyMHdvcmtvdXQlMjBtYW4lMjB3b21hbnxlbnwxfHx8fDE3NjkwMTMwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "couple",
      title: "Couple Membership",
      description:
        "Train together with a partner. Shared goals, shared success, better value.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1609377375735-19f08578e372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3b3Jrb3V0JTIwZml0bmVzc3UyMGd5bXxlbnwxfHx8fDE3NjkwMTMwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "corporate",
      title: "Corporate Membership",
      description:
        "Comprehensive wellness solutions for your team and organization.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1529420681125-2878126af4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwZml0bmVzc3UyMG9mZmljZSUyMGd5bXxlbnwxfHx8fDE3NjkwMTMwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const basePrograms = [
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
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxneW0lMjBjYXJkaW98ZW58MXx8fHwxNzY4ODM1OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8d2VpZ2h0JTIwbGlmdGluZ3xlbnwxfHx8fDE3Njg4MzU5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxydW5uaW5nJTIwdHJlYWRtaWxsfGVufDF8fHx8MTc2ODgzNTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  // Helper to calculate price based on category
  const getPrice = (basePrice: number) => {
    if (selectedCategory === "couple") {
      return basePrice * 1.8; // 80% increment for couple (total for 2 people)
    }
    return basePrice;
  };

  //   const handleCorporateSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     toast.success("Application submitted! We'll verify your ID and contact you.");
  //     navigate('/');
  //   };

  const renderContent = () => {
    if (!selectedCategory) {
      return (
        <>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3a52] mb-6">
              Choose Your Membership
            </h1>
            <p className="text-xl text-gray-600">
              Select the plan type that best fits your lifestyle. Whether you're
              training solo, with a partner, or optimizing your team's health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-left h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1a3a52]/60 group-hover:bg-[#1a3a52]/40 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                    <category.icon size={24} className="text-[#c9a961]" />
                    <span className="font-semibold text-lg">
                      {category.title}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="mt-auto flex items-center text-[#1a3a52] font-semibold group-hover:text-[#c9a961] transition-colors">
                    View Plans <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      );
    }

    if (selectedCategory === "corporate") {
      return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-[#1a3a52] p-8 text-white text-center relative">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute left-6 top-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <Building2 size={48} className="mx-auto mb-4 text-[#c9a961]" />
            <h2 className="text-3xl font-bold mb-2">Corporate Verification</h2>
            <p className="text-gray-200">
              Please submit your details and work ID for verification. We will
              contact you with corporate pricing tiers.
            </p>
          </div>

          <div className="p-8">
            <form
              onSubmit={/*handleCorporateSubmit*/ () => {}}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#c9a961] focus:border-[#c9a961]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employee Count
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#c9a961] focus:border-[#c9a961]">
                    <option>10-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#c9a961] focus:border-[#c9a961]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Work ID / Badge
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#c9a961] transition-colors cursor-pointer bg-gray-50">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#1a3a52] hover:text-[#c9a961] focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          required
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1a3a52] text-white rounded-xl hover:bg-[#2a4a62] transition-colors font-medium flex items-center justify-center gap-2"
                >
                  Submit Application <CheckCircle2 size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }

    // Plans for Singles/Couple
    return (
      <>
        <div className="mb-12 flex items-center gap-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} className="text-[#1a3a52]" />
          </button>
          <div>
            <h2 className="text-3xl font-bold text-[#1a3a52]">
              {selectedCategory === "singles" ? "Singles" : "Couple"} Plans
            </h2>
            <p className="text-gray-600">
              {selectedCategory === "singles"
                ? "Choose your path to personal transformation."
                : "Select a plan for two and start your journey together."}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {basePrograms.map((program) => {
            const price = getPrice(program.basePrice);
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {selectedCategory === "couple" && (
                    <div className="absolute top-4 right-4 bg-[#c9a961] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Users size={12} /> Couple Plan
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1a3a52] mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2 mb-8">
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#c9a961] mt-0.5 shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-500 text-sm">Monthly</span>
                      <span className="text-2xl font-bold text-[#1a3a52]">
                        ₦{price.toLocaleString()}
                      </span>
                    </div>
                    <button
                      // onClick={() => navigate("/signup")}
                      className="w-full py-3 bg-[#1a3a52] text-white rounded-xl hover:bg-[#2a4a62] transition-colors flex items-center justify-center gap-2"
                    >
                      Join Program <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </div>
    </div>
  );
}
