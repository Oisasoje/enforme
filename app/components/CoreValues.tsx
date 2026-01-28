"use client";

import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Why Choose En Forme
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 text-[#c9a961]"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
