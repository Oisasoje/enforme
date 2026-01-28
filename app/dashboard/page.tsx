"use client";

import {
  Activity,
  CreditCard,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  Dumbbell,
} from "lucide-react";

export default function DashboardPage() {
  // Mock Data
  const user = {
    name: "Alex Johnson",
    plan: "Premium Member",
    status: "Active", // Active, Trial, Overdue
    trialEnds: "2024-02-01",
    nextBilling: "2024-02-15",
    visitsThisMonth: 12,
  };

  const recentActivity = [
    {
      id: 1,
      type: "Check-in",
      location: "Downtown Branch",
      date: "Today, 09:30 AM",
    },
    {
      id: 2,
      type: "Payment",
      amount: "₦25,000",
      date: "Jan 15, 2024",
      status: "Success",
    },
    { id: 3, type: "Class Booked", name: "HIIT Session", date: "Jan 12, 2024" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1a3a52]">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-600 mt-1">
            Here's what's happening with your membership.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium">
            Book Class
          </button>
          <button className="px-4 py-2 bg-[#1a3a52] text-white rounded-lg hover:bg-[#2a4a62] transition-colors shadow-lg shadow-[#1a3a52]/20 font-medium">
            My QR Code
          </button>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Membership Status */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a961]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-50 rounded-xl text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide">
                {user.status}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Current Plan</p>
              <h3 className="text-xl font-bold text-[#1a3a52] mt-1">
                {user.plan}
              </h3>
            </div>
          </div>
        </div>

        {/* Visits */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-xl text-[#1a3a52]">
                <Activity size={24} />
              </div>
              <span className="text-green-600 text-sm font-bold flex items-center gap-1">
                <ArrowUpRight size={16} /> +2
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Visits this Month
              </p>
              <h3 className="text-2xl font-bold text-[#1a3a52] mt-1">
                {user.visitsThisMonth}
              </h3>
            </div>
          </div>
        </div>

        {/* Next Billing */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                <Calendar size={24} />
              </div>
              <span className="text-xs font-medium text-gray-400">Monthly</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Next Billing</p>
              <h3 className="text-xl font-bold text-[#1a3a52] mt-1">
                {user.nextBilling}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#1a3a52]">
              Recent Activity
            </h2>
            <button className="text-sm text-[#c9a961] font-medium hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      activity.type === "Payment"
                        ? "bg-green-50 text-green-600"
                        : activity.type === "Check-in"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {activity.type === "Payment" ? (
                      <CreditCard size={20} />
                    ) : activity.type === "Check-in" ? (
                      <Dumbbell size={20} />
                    ) : (
                      <Calendar size={20} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {activity.type}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {activity.location || activity.name || activity.status}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#1a3a52]">
                    {activity.amount || ""}
                  </p>
                  <p className="text-xs text-gray-400">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Promo */}
        <div className="space-y-6">
          <div className="bg-[#1a3a52] rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a961] opacity-20 rounded-bl-full -mr-8 -mt-8"></div>
            <h3 className="text-lg font-bold mb-2 relative z-10">
              Refer a Friend
            </h3>
            <p className="text-gray-300 text-sm mb-4 relative z-10">
              Get 1 month free when you bring a workout buddy.
            </p>
            <button className="w-full py-2 bg-[#c9a961] text-[#1a3a52] font-bold rounded-lg hover:bg-[#b89a50] transition-colors relative z-10">
              Invite Friends
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-[#1a3a52] mb-4">
              Upcoming Classes
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <div className="text-center bg-white p-2 rounded shadow-sm min-w-[50px]">
                  <span className="block text-xs font-bold text-gray-400">
                    JAN
                  </span>
                  <span className="block text-lg font-bold text-[#1a3a52]">
                    30
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3a52] text-sm">
                    Yoga Flow
                  </h4>
                  <p className="text-xs text-gray-500">10:00 AM • Studio A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
