import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#1a3a52] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl text-[#c9a961] max-w-2xl">
            Questions about memberships, programs, or locations? We’re here to
            help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#1a3a52] mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="text-[#c9a961]" size={20} />
                <span>+234 801 234 5678</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#c9a961]" size={20} />
                <span>hello@enforme.fit</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-[#c9a961]" size={20} />
                <span>Mon–Sat, 6am – 10pm</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#c9a961]" size={20} />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/locations"
                className="px-6 py-3 border border-[#1a3a52] text-[#1a3a52] rounded-xl text-center hover:bg-[#1a3a52] hover:text-white transition"
              >
                View Locations
              </Link>
              <a
                href="https://wa.me/2348012345678"
                className="px-6 py-3 text-white bg-[#c9a961] rounded-xl text-center hover:bg-[#b89851] transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#1a3a52] mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a3a52] text-white py-3 rounded-xl hover:bg-[#142c3d] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
