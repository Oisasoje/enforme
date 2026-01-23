import { Check } from "lucide-react";

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
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-[#1a3a52] mb-4">
            Membership Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to match your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                program.featured
                  ? "bg-[#1a3a52] text-white scale-105 shadow-2xl"
                  : "bg-gray-50 text-[#1a3a52]"
              }`}
            >
              {program.featured && (
                <div className="text-[#c9a961] mb-4 text-sm uppercase tracking-wide">
                  Most Popular
                </div>
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
                    <Check
                      className={`shrink-0 ${
                        program.featured ? "text-[#c9a961]" : "text-[#c9a961]"
                      }`}
                      size={20}
                    />
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
              <button
                className={`w-full py-3 rounded-full transition-colors ${
                  program.featured
                    ? "bg-[#c9a961] text-white hover:bg-[#b89851]"
                    : "bg-[#1a3a52] text-white hover:bg-[#2a4a62]"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
