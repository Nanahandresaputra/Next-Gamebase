"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
import CategoryList from "./category-list";

// Icons from lucide-react, commonly used with shadcn/ui

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { href: "/homepage", label: "Home" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About" },
  ];

  const router = useRouter()

  return (
    <header className="bg-[#070F2B] backdrop-blur-sm sticky top-0 z-[999999] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <img src="/assets/g-logo.png" alt="logo" className="h-8 w-8" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <p
                key={link.label}
                // href={link.href}
                onClick={() => router.push(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 hover:cursor-pointer"
              >
                {link.label}
              </p>
            ))}
          </nav>

          {/* CTA Button, Theme Toggle and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="
                    bg-[#1B1A55] border border-gray-700 rounded-xl 
                    pl-10 pr-4 py-2 w-40 md:w-64 text-white placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-gray-600
                    transition-all duration-300
                  "
              />
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400 transition-colors duration-300"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <IoClose className="text-white" />
                ) : (
                  <MdOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Sheet) */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-700" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <CategoryList />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
