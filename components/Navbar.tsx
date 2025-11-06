"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // White text on home page, dark text on all other pages
  const isHomePage = pathname === "/";
  const textColor = isHomePage ? "text-white" : "text-gray-900";
  const hoverColor = isHomePage ? "hover:text-gray-200" : "hover:text-gray-600";
  const navBg = isHomePage ? "bg-transparent" : "bg-white shadow-sm";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 w-full ${navBg} z-50`}>
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Left: Hamburger Menu */}
            <button
              className={`p-3 -ml-2 ${textColor} ${hoverColor} transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center no-touch-size`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-sm font-medium hidden md:inline">Menu</span>
              </div>
            </button>

            {/* Center: Logo/Brand */}
            <Link href="/" className="flex items-center min-h-[44px]">
              <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor} tracking-wider`}>
                ROKVILLA
              </div>
            </Link>

            {/* Right: Empty space for balance */}
            <div className="w-[44px] sm:w-[52px]"></div>
          </div>
        </div>
      </nav>

      {/* Slide-out Menu from Left */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel - Responsive width for different devices */}
        <div className="relative w-[85vw] max-w-sm sm:w-96 md:w-[420px] h-full bg-transparent overflow-y-auto">
          <div className="p-6 sm:p-8">
            {/* Close Button - Larger touch target */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 text-white hover:text-gray-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center no-touch-size"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo in Menu */}
            <div className="mb-10 sm:mb-12 mt-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                ROKVILLA
              </h2>
              <p className="text-sm sm:text-base text-white/80 mt-1">Design & Build Co.</p>
            </div>

            {/* Navigation Links - Better touch targets */}
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-4 px-4 text-lg sm:text-xl font-medium text-white hover:text-gray-200 transition-colors min-h-[56px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info - Better spacing */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
              <p className="text-sm sm:text-base text-white/80 mb-4">Get in touch</p>
              <a
                href="mailto:home@rokvilla.com"
                className="block text-base sm:text-lg text-white hover:text-white/80 transition-colors mb-4 min-h-[44px] flex items-center"
              >
                home@rokvilla.com
              </a>
              <div className="text-sm sm:text-base text-white/80 space-y-1">
                <p className="font-medium mb-2">Our Locations:</p>
                <p className="leading-relaxed">Hubli-Dharwad</p>
                <p className="leading-relaxed">Bengaluru</p>
                <p className="leading-relaxed">Ballari</p>
                <p className="leading-relaxed">Vijayapura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

