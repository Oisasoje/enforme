import { Users, Dumbbell, Clock, Heart } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      icon: <Dumbbell size={32} />,
      title: "Experienced Trainers",
      description:
        "Certified trainers guiding every workout for maximum results.",
    },
    {
      icon: <Users size={32} />,
      title: "Personalized Programs",
      description: "Custom programs tailored to your goals and fitness level.",
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Memberships",
      description:
        "Monthly, quarterly, or annual plans that fit your schedule.",
    },
    {
      icon: <Heart size={32} />,
      title: "Community Support",
      description: "Train with a supportive community keeping you motivated.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Why Choose En Forme
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 text-[#c9a961]">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
