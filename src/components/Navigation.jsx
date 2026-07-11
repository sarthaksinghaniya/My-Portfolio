"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Kingdom", href: "#kingdom" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(navItems[0].name);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-900/80 backdrop-blur-md border-b border-stone/30 py-4 shadow-lg shadow-black/50" : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo/Shield placeholder */}
        <Link href="/" className="group relative flex items-center justify-center w-12 h-12">
          <div className="absolute inset-0 bg-primary/20 rotate-45 rounded-sm transition-transform group-hover:rotate-90 group-hover:bg-primary/40" />
          <div className="absolute inset-2 border-2 border-primary rotate-45 rounded-sm" />
          <span className="relative font-display font-bold text-xl text-primary z-10">S</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`relative px-4 py-2 font-display text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                  activeTab === item.name ? "text-primary text-glow" : "text-stone"
                }`}
              >
                {activeTab === item.name && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary"
                    style={{ boxShadow: "0 0 10px rgba(247, 201, 72, 0.8)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-primary p-2 hover:bg-primary/10 rounded transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-dark-900/95 backdrop-blur-xl z-50 flex flex-col pt-20 px-6 md:hidden"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-primary p-2 hover:bg-primary/10 rounded transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <ul className="flex flex-col space-y-6 mt-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-center py-4 font-display text-2xl tracking-widest uppercase transition-colors border-b border-stone/20 ${
                      activeTab === item.name ? "text-primary text-glow border-primary/50" : "text-stone hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
