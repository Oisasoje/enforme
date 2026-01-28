"use client";

import { useState } from "react";

// import { toast } from "sonner";
import { Mail, Lock, User, Loader2 } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating signup
    setTimeout(() => {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1a3a52]">Create Account</h1>
          <p className="text-gray-600 mt-2">Join En Forme today</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#c9a961] focus:border-[#c9a961]"
                placeholder="John Doe"
                {...register("name", { required: true })}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input
                type="email"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#c9a961] focus:border-[#c9a961]"
                placeholder="you@example.com"
                {...register("email", { required: true })}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                type="password"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#c9a961] focus:border-[#c9a961]"
                placeholder="••••••••"
                {...register("password", { required: true, minLength: 6 })}
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a3a52] text-white py-2 rounded-lg hover:bg-[#2a4a62] transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#c9a961] font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
