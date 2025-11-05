"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const navItems = [
  { name: "Nature", href: "/" },
  { name: "Why", href: "/why" },
  { name: "How", href: "/how" },
  { name: "Where", href: "/where" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const isActive = (href: string) => {
    // For home page
    if (href === "/") {
      return pathname === "/";
    }
    // For other pages
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 right-0 md:bg-[#012224] text-white z-50">
      <nav className="flex items-center h-full">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`flex pt-8 pb-4 items-center px-4 hover:text-gray-300 cursor-pointer transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-[#C67F54] font-semibold " // Active style
                    : "text-white"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div
          className={`flex md:hidden flex-col items-start space-y-1.5 cursor-pointer p-6 ${
            isOpen ? "bg-[#012224]" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-white rounded-full"></div>
          <div className="w-8 h-0.5 bg-white rounded-full"></div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#012224] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isOpen ? "md:w-[80vw]" : ""} ${isOpen ? "w-[100vw]" : ""}`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 py-4 mt-[100px]">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`hover:text-gray-300 text-2xl cursor-pointer transition-colors duration-200 ${
                  isActive(item.href) ? "text-[#C67F54] font-semibold" : "text-white"
                }`}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;