"use client";

import { User, Mail, Phone, MapPin, QrCode } from "lucide-react";

export default function MembershipPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-bold text-[#1a3a52]">My Membership</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Digital Access Card */}
        <div className="md:col-span-1">
          <div className="bg-[#1a3a52] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl flex flex-col items-center text-center h-full justify-center">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#c9a961]"></div>
            <div className="absolute bottom-4 opacity-50 text-[10px] tracking-widest uppercase">
              Member Access Pass
            </div>

            <div className="bg-white p-4 rounded-2xl mb-6 shadow-inner">
              <QrCode size={180} className="text-[#1a3a52]" />
            </div>

            <h2 className="text-2xl font-bold tracking-tight">Alex Johnson</h2>
            <p className="text-[#c9a961] font-bold mt-1 uppercase tracking-wide">
              Premium Member
            </p>
            <p className="text-gray-400 text-sm mt-4">ID: 88291039</p>
          </div>
        </div>

        {/* Member Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1a3a52]">
                Personal Details
              </h2>
              <button className="text-sm text-[#c9a961] font-bold hover:underline">
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Full Name
                </label>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <User size={18} className="text-[#c9a961]" />
                  Alex Johnson
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Email Address
                </label>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <Mail size={18} className="text-[#c9a961]" />
                  alex.j@example.com
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Phone Number
                </label>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <Phone size={18} className="text-[#c9a961]" />
                  +234 801 234 5678
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Home Branch
                </label>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <MapPin size={18} className="text-[#c9a961]" />
                  Lekki Phase 1
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1a3a52] mb-4">
              Membership Features
            </h2>
            <ul className="space-y-3">
              {[
                "All Branches Access",
                "Unlimited Gym Access",
                "Access to Group Classes",
                "2 Guest Passes / Month",
                "Free WiFi & Parking",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <div className="p-1 rounded-full bg-green-100 text-green-600">
                    <User size={12} fill="currentColor" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
