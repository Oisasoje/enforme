"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  User,
  LogOut,
  Dumbbell,
  Calendar,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Membership", href: "/dashboard/membership", icon: Dumbbell },
    { name: "Classes", href: "/dashboard/classes", icon: Calendar },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#1a3a52] text-white fixed h-full z-10 transition-all duration-300">
        <div className="p-6 border-b border-[#2a4a62]">
          <h1 className="text-2xl font-bold tracking-tight">EN FORME</h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
            Member Portal
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-2 px-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-[#c9a961] text-[#1a3a52] font-semibold shadow-lg"
                        : "text-gray-300 hover:bg-[#2a4a62] hover:text-white"
                    }`}
                  >
                    <item.icon
                      size={20}
                      className={
                        isActive
                          ? "text-[#1a3a52]"
                          : "text-gray-400 group-hover:text-white"
                      }
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-[#2a4a62]">
          <button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-full px-4 py-2 rounded-lg hover:bg-[#2a4a62]">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-[#1a3a52] text-white z-20 flex items-center justify-between p-4 shadow-md">
        <span className="font-bold text-lg">EN FORME</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-[#2a4a62]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-10 bg-[#1a3a52] pt-20 px-4">
          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-4 rounded-lg text-lg ${
                  pathname === item.href
                    ? "bg-[#c9a961] text-[#1a3a52] font-bold"
                    : "text-white hover:bg-[#2a4a62]"
                }`}
              >
                <item.icon size={24} />
                {item.name}
              </Link>
            ))}
            <button className="flex items-center gap-3 px-4 py-4 w-full text-left text-gray-300 mt-8 border-t border-[#2a4a62]">
              <LogOut size={24} />
              Sign Out
            </button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${isMobileMenuOpen ? "overflow-hidden" : ""} md:ml-64 pt-16 md:pt-0`}
      >
        <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">{children}</div>
      </main>
      <Toaster />
    </div>
  );
}
