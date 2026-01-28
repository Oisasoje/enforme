"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function CTASection() {
  const router = useRouter();

  return (
    <section
      id="contact"
      className="relative min-h-[400px] py-20 overflow-hidden"
    >
      <Image
        src="/footer.jpg"
        alt="Man lifting weight"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#1a3a52]/60" />

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/footer.jpg"
          alt="Man lifting weight"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a3a52]/60" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl text-white mb-6"
        >
          Ready to Start Your Transformation?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-[#c9a961] mb-8"
        >
          Join En Forme today and get your first week free. No commitment
          required.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => router.push("/payment")}
            className="px-8 py-4 bg-[#c9a961] text-white rounded-full hover:bg-[#b89851] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
          >
            Claim Free Week <ArrowRight size={20} />
          </button>
          <button
            onClick={() => router.push("/locations")}
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1a3a52] transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Tour
          </button>
        </motion.div>
      </div>
    </section>
  );
}
