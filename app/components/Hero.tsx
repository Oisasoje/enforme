"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Variants } from "framer-motion";

export function Hero() {
  const router = useRouter();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const bgTextVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 0.05,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/hero-bold.png"
          alt="Intensity"
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black/80"></div>
      </div>

      {/* Decorative Background Text */}
      <motion.div
        variants={bgTextVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-[-5%] z-0 select-none hidden lg:block"
      >
        <span
          className="text-[20rem] font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap opacity-10 blur-[2px]"
          style={{
            WebkitTextStroke: "2px rgba(255,255,255,0.3)",
            color: "transparent",
          }}
        >
          FORGE
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-4 inline-block px-4 py-1 border border-[#FF7A00]/50 bg-[#FF7A00]/10 rounded-full"
        >
          <span className="text-[#FF7A00] text-sm font-bold tracking-widest uppercase italic">
            Elite Status Awaits
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-6 uppercase tracking-tighter italic"
        >
          FORGE YOUR <span className="text-[#FF7A00]">LEGACY</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-tight"
        >
          The standard has been set. No more excuses. Just pure, unadulterated
          results.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={() => router.push("/signup")}
            className="group relative px-10 py-5 bg-[#FF7A00] text-xl font-black uppercase text-black cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start 7-Day Trial{" "}
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </button>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="px-10 py-5 border-4 border-white text-white text-xl font-black uppercase hover:bg-white hover:text-black transition-all cursor-pointer">
                The Philosophy
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-opacity" />
              <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-6 border-b-8 border-r-8 border-[#FF7A00] bg-black p-10 text-white shadow-2xl duration-200 sm:rounded-none">
                <div className="flex flex-col space-y-4">
                  <Dialog.Title className="text-4xl font-black tracking-tighter uppercase italic text-[#FF7A00]">
                    Beyond Fitness
                  </Dialog.Title>
                  <Dialog.Description className="text-xl text-gray-400 font-medium">
                    This isn't a leisure center. It's a forge.
                  </Dialog.Description>
                </div>
                <div className="text-lg text-gray-200 leading-relaxed font-light space-y-4">
                  <p>
                    En Forme was built for those who find comfort in the
                    struggle. Our multi-outlet ecosystem provides the tools, but
                    you provide the fire.
                  </p>
                  <p>
                    Flexible memberships, premium equipment, and a
                    results-driven ecosystem. We don't just sell access; we
                    provide the environment for total transformation.
                  </p>
                </div>
                <Dialog.Close className="absolute right-6 top-6 rounded-none opacity-100 ring-offset-black transition-transform hover:scale-125 focus:outline-none">
                  <X className="h-8 w-8 text-[#FF7A00]" />
                  <span className="sr-only">Close</span>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </motion.div>
      </motion.div>

      {/* Subtle Bottom vignette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}
