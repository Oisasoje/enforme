"use client";

import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
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

            {/* Cart */}

            <Link
              href="/login"
              className="text-[#1a3a52] hover:text-[#c9a961] font-medium transition-colors"
            >
              Sign In
            </Link>

            <button
              className="px-6 py-2 bg-[#c9a961] text-white rounded-full
                hover:bg-[#b89851] transition-colors"
            >
              <Link href="/signup">Join Now</Link>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="relative text-[#1a3a52]">
              <ShoppingCart size={24} />
              {
                <span className="absolute -top-2 -right-2 bg-[#c9a961] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {/* {cartCount} */}
                </span>
              }
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
              <Link
                href="/login"
                className="text-[#1a3a52] hover:text-[#c9a961] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2 bg-[#c9a961] text-white rounded-full hover:bg-[#b89851] transition-colors w-full"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
