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
        <div className="px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Left: Hamburger Menu */}
            <button
              className={`p-2 ${textColor} ${hoverColor} transition-colors`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-sm font-medium hidden sm:inline">Menu</span>
              </div>
            </button>

            {/* Center: Logo/Brand */}
            <Link href="/" className="flex items-center">
              <div className={`text-2xl md:text-3xl font-bold ${textColor} tracking-wider`}>
                ROKVILLA
              </div>
            </Link>

            {/* Right: Empty space for balance */}
            <div className="w-[52px]"></div>
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

        {/* Menu Panel */}
        <div className="relative w-80 h-full bg-white shadow-2xl">
          <div className="p-8">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
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
            <div className="mb-12 mt-2">
              <h2 className="text-2xl font-bold text-gray-900">
                ROKVILLA
              </h2>
              <p className="text-sm text-gray-600 mt-1">Design & Build Co.</p>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-4 text-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-4 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Get in touch</p>
              <a
                href="mailto:home@rokvilla.com"
                className="block text-gray-900 hover:text-gray-600 transition-colors mb-3"
              >
                home@rokvilla.com
              </a>
              <div className="text-sm text-gray-600">
                <p className="font-medium mb-1">Our Locations:</p>
                <p>Hubli-Dharwad</p>
                <p>Bengaluru</p>
                <p>Ballari</p>
                <p>Vijayapura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

