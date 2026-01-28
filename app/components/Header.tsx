"use client";

import { Menu, X, ShoppingCart, User as UserIcon, LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={"/logo.png"} alt="En Forme" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#1a3a52] hover:text-[#c9a961] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {session ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[#1a3a52]">
                  <UserIcon size={18} />
                  <span className="font-medium">{session.user?.name}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors"
                >
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-[#1a3a52] hover:text-[#c9a961] font-medium transition-colors"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  className="px-6 py-2 bg-[#c9a961] text-white rounded-full
                    hover:bg-[#b89851] transition-colors"
                >
                  Join Now
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="relative text-[#1a3a52]">
              <ShoppingCart size={24} />
            </Link>
            <button
              className="text-[#1a3a52]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#1a3a52] hover:text-[#c9a961] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {session ? (
                <>
                  <div className="flex items-center gap-2 text-[#1a3a52] px-2 py-2">
                    <UserIcon size={18} />
                    <span className="font-medium">{session.user?.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-red-600 px-2 py-2"
                  >
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-[#1a3a52] hover:text-[#c9a961] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-2 bg-[#c9a961] text-white rounded-full hover:bg-[#b89851] transition-colors w-full text-center"
                  >
                    Join Now
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
