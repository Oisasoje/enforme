"use client";

import { User, Mail, Phone, Lock, Save, Bell, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate save
    setTimeout(() => {
      setLoading(false);
      toast.success("Profile updated successfully");
    }, 1000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-bold text-[#1a3a52]">Profile Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Navigation/Avatar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden group">
              <User size={64} className="text-gray-400" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-white text-xs font-bold">
                  Change Photo
                </span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-[#1a3a52]">Alex Johnson</h2>
            <p className="text-gray-500 text-sm">Member since 2023</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <nav className="flex flex-col">
              <button className="text-left px-6 py-4 text-[#1a3a52] font-medium hover:bg-gray-50 border-l-4 border-[#c9a961] bg-gray-50">
                Personal Details
              </button>
              <button className="text-left px-6 py-4 text-gray-500 font-medium hover:bg-gray-50 hover:text-[#1a3a52] border-l-4 border-transparent transition-colors">
                Security & Password
              </button>
              <button className="text-left px-6 py-4 text-gray-500 font-medium hover:bg-gray-50 hover:text-[#1a3a52] border-l-4 border-transparent transition-colors">
                Notification Preferences
              </button>
            </nav>
          </div>
        </div>

        {/* Right Column - Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <User size={24} className="text-[#c9a961]" />
              <h2 className="text-xl font-bold text-[#1a3a52]">
                Personal Information
              </h2>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Alex"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#c9a961]/20 focus:border-[#c9a961] transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Johnson"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#c9a961]/20 focus:border-[#c9a961] transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    defaultValue="alex.j@example.com"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#c9a961]/20 focus:border-[#c9a961] transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    defaultValue="+234 801 234 5678"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#c9a961]/20 focus:border-[#c9a961] transition-all outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-[#1a3a52] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2a4a62] transition-colors disabled:opacity-70"
                >
                  <Save size={18} />
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>

          {/* Security Preview (Just a teaser for completeness) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 opacity-60 pointer-events-none grayscale">
            <div className="flex items-center gap-3 mb-6">
              <Shield size={24} className="text-[#c9a961]" />
              <h2 className="text-xl font-bold text-[#1a3a52]">Security</h2>
            </div>
            <p className="text-gray-500">
              Enable Two-Factor Authentication (Coming Soon)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
