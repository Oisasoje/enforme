"use client";

import { Calendar, Clock, MapPin, Search, Filter, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ClassesPage() {
  const [filter, setFilter] = useState("All");

  const classes = [
    {
      id: 1,
      name: "Morning HIIT",
      time: "07:00 AM",
      duration: "45 min",
      instructor: "Sarah K.",
      spots: 5,
      category: "Cardio",
    },
    {
      id: 2,
      name: "Power Yoga",
      time: "09:00 AM",
      duration: "60 min",
      instructor: "Davido M.",
      spots: 12,
      category: "Flexibility",
    },
    {
      id: 3,
      name: "CrossFit Intro",
      time: "05:00 PM",
      duration: "60 min",
      instructor: "Mike T.",
      spots: 2,
      category: "Strength",
    },
    {
      id: 4,
      name: "Spin Class",
      time: "06:30 PM",
      duration: "45 min",
      instructor: "Jenny L.",
      spots: 0,
      category: "Cardio",
    },
  ];

  const handleBook = (className: string) => {
    toast.success(`Successfully booked ${className}!`);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1a3a52]">Class Schedule</h1>
          <p className="text-gray-600 mt-1">
            Book your spot in our upcoming sessions.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search classes..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a961]"
            />
          </div>
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Date Selector */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
          const date = new Date();
          date.setDate(date.getDate() + offset);
          const isActive = offset === 0;

          return (
            <button
              key={offset}
              className={`min-w-[80px] p-4 rounded-xl flex flex-col items-center justify-center border transition-all ${
                isActive
                  ? "bg-[#1a3a52] text-white border-[#1a3a52] shadow-lg shadow-[#1a3a52]/20"
                  : "bg-white text-gray-500 border-gray-100 hover:border-[#c9a961] hover:text-[#1a3a52]"
              }`}
            >
              <span className="text-xs font-medium uppercase">
                {date.toLocaleDateString("en-US", { weekday: "short" })}
              </span>
              <span className="text-2xl font-bold">{date.getDate()}</span>
            </button>
          );
        })}
      </div>

      {/* Classes List */}
      <div className="space-y-4">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#c9a961]/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex flex-col items-center justify-center text-[#1a3a52] font-bold border border-gray-100 group-hover:bg-[#1a3a52] group-hover:text-white transition-colors">
                <span className="text-sm">{cls.time.split(" ")[0]}</span>
                <span className="text-xs">{cls.time.split(" ")[1]}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a3a52]">{cls.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {cls.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} /> {cls.instructor}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      cls.category === "Cardio"
                        ? "bg-orange-100 text-orange-700"
                        : cls.category === "Strength"
                          ? "bg-red-100 text-red-700"
                          : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {cls.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
              <div className="text-right">
                <p
                  className={`text-sm font-medium ${cls.spots > 0 ? "text-green-600" : "text-red-500"}`}
                >
                  {cls.spots > 0 ? `${cls.spots} spots left` : "Full"}
                </p>
              </div>

              <button
                onClick={() => cls.spots > 0 && handleBook(cls.name)}
                disabled={cls.spots === 0}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${
                  cls.spots > 0
                    ? "bg-[#c9a961] text-[#1a3a52] hover:bg-[#b89a50] shadow-lg shadow-[#c9a961]/20"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                {cls.spots > 0 ? "Book Now" : "Waitlist"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
