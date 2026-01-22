"use client";

import { ArrowRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

export function Hero() {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Fitness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r  from-[#1a3a52]/90 to-[#1a3a52]/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
          Transform Your Life
        </h1>
        <p className="text-xl sm:text-2xl text-[#c9a961] mb-8 max-w-3xl mx-auto">
          Premium fitness training and nutrition guidance to help you achieve
          your goals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/programs")}
            className="px-8 py-4 bg-[#c9a961] text-white rounded-full hover:bg-[#b89851] transition-colors flex items-center gap-2 justify-center"
          >
            Start Your Journey <ArrowRight size={20} />
          </button>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#1a3a52] transition-colors">
                Learn More
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full">
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                  <Dialog.Title className="text-lg font-semibold leading-none tracking-tight text-[#1a3a52]">
                    About En Forme
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-500">
                    Discover our fitness philosophy and business model.
                  </Dialog.Description>
                </div>
                <div className="text-gray-600 leading-relaxed">
                  En Forme is a multi-outlet gym and fitness business designed
                  around flexible membership plans (monthly/annual), trials,
                  one-time purchases (merchandise, personal training sessions),
                  and B2B/corporate memberships. The business runs on a
                  subscription model where members can sign up digitally, manage
                  their plans (upgrade/downgrade/pause), and pay through
                  bank-based payments that are more reliable than card renewals.
                </div>
                <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#1a3a52] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </section>
  );
}
