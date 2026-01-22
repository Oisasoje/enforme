"use client";

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl text-white mb-6">
          Ready to Start Your Transformation?
        </h2>
        <p className="text-xl text-[#c9a961] mb-8">
          Join En Forme today and get your first week free. No commitment
          required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/payment")}
            className="px-8 py-4 bg-[#c9a961] text-white rounded-full hover:bg-[#b89851] transition-colors flex items-center gap-2 justify-center"
          >
            Claim Free Week <ArrowRight size={20} />
          </button>
          <button
            onClick={() => router.push("/locations")}
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1a3a52] transition-colors"
          >
            Schedule a Tour
          </button>
        </div>
      </div>
    </section>
  );
}
