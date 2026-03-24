"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? "shadow-md py-2" : "border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-3 md:px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-1.5 md:gap-2">
          <img
            src="/images/logo.jpeg"
            alt="VelSiksha Logo"
            className="h-8 w-auto md:h-10 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold font-heading text-primary-blue">
            VelSiksha
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-soft-gray hover:text-primary-blue transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom--5 left-0 w-0 h-0.5 bg-primary-green transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Call Button */}
        <Link
          href="tel:+916369259646"
          className="hidden lg:inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-green transition-colors"
        >
          <Phone size={18} />
          <span className="hidden xl:inline">Call Us</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary-blue p-2"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-3 animate-fadeIn border-t border-gray-100">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-soft-gray hover:text-primary-blue py-3 px-2 rounded-lg hover:bg-light-blue/50 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:+916369259646"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-green bg-light-blue py-3 px-4 rounded-lg mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={18} />
              Call Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
