"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSparkle = () => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.1, x: 0.15 },
      colors: ["#0D5C63", "#78CAD2", "#E07A5F", "#FFFFFF"],
    });
  };

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-sm border-b border-[var(--border-subtle)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={handleSparkle}
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-xl bg-[#0D5C63] text-white flex items-center justify-center font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="flex items-center gap-2">
            Anas
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] border border-[#0D5C63]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Flutter Dev
            </span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[var(--text-secondary)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#0D5C63] dark:hover:text-[#78CAD2] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0D5C63] dark:after:bg-[#78CAD2] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[#0D5C63] dark:hover:text-[#78CAD2] hover:bg-[var(--bg-card-subtle)] transition-colors border border-[var(--border-subtle)]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Let's talk CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-[#0D5C63] hover:bg-[#084247] text-white shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Actions & Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-card-subtle)] transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-card-subtle)] transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[var(--border-subtle)] px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 font-medium text-base text-[var(--text-primary)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[var(--bg-card-subtle)] hover:text-[#0D5C63] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[var(--border-subtle)]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[#0D5C63] text-white"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
