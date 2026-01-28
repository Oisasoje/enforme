"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Lost 30 lbs",
      content:
        "En Forme completely changed my life. The trainers are incredibly supportive and the community is amazing. I've never felt stronger!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marathon Runner",
      content:
        "The personalized training program helped me achieve my goal of running a marathon. The nutrition guidance was game-changing.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Busy Professional",
      content:
        "As someone with a hectic schedule, the flexible class times and online support make it easy to stay consistent with my fitness goals.",
      rating: 5,
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-[#1a3a52] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-[#c9a961] max-w-2xl mx-auto">
            Real results from real people
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="text-[#c9a961] fill-[#c9a961]"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="text-[#1a3a52] font-bold">
                  {testimonial.name}
                </div>
                <div className="text-[#c9a961] text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
