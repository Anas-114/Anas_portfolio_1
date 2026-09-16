"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Send, Sparkles, MapPin, Clock, Code, Smartphone } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>("");
  const [activePose, setActivePose] = useState<"arms" | "thinking" | "standing">("arms");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0D5C63", "#78CAD2", "#E07A5F", "#1A2126"],
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-teal-glow pointer-events-none rounded-full blur-3xl opacity-60 dark:opacity-40"></div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm mb-6 hover:border-[#0D5C63]/40 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-[var(--text-primary)]">
                Available for opportunities
              </span>
              <span className="text-xs text-[var(--text-muted)]">•</span>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                <MapPin size={12} className="text-[#0D5C63] dark:text-[#78CAD2]" />
                Calicut, Kerala
              </span>
              {localTime && (
                <>
                  <span className="text-xs text-[var(--text-muted)] hidden sm:inline">•</span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[var(--text-secondary)] font-mono">
                    <Clock size={12} className="text-[#0D5C63] dark:text-[#78CAD2]" />
                    {localTime} IST
                  </span>
                </>
              )}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-4">
              Hi, I&apos;m{" "}
              <span className="text-[#0D5C63] dark:text-[#78CAD2] relative inline-block">
                Anas
                <span className="inline-block animate-bounce text-3xl sm:text-5xl ml-1">.</span>
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-secondary)] mb-4">
              Flutter Developer
            </h2>

            {/* Tagline / Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-[#0D5C63] dark:text-[#78CAD2] mb-4 flex items-center gap-2">
              <span>Building things. Exploring tech.</span>
              <Sparkles size={18} className="animate-pulse" />
            </p>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed mb-8">
              Self-taught developer crafting fluid, high-performance cross-platform mobile apps with clean architecture, modern state management, and delightful 60fps animations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#work"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold bg-[#0D5C63] hover:bg-[#084247] text-white shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>View my work</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#contact"
                onClick={handleConfetti}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold bg-[var(--bg-card)] hover:bg-[var(--bg-card-subtle)] text-[var(--text-primary)] border border-[var(--border-color)] shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
              >
                <span>Let&apos;s talk</span>
                <Send size={15} className="text-[#0D5C63] dark:text-[#78CAD2]" />
              </a>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[var(--border-subtle)] w-full max-w-xl">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-[#0D5C63] dark:text-[#78CAD2]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-[var(--text-secondary)] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Anas Avatar with Interactive Floating Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] aspect-[4/5] flex items-center justify-center">
              {/* Circular Backdrop Card */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-b from-[#0D5C63]/10 via-[#78CAD2]/10 to-transparent dark:from-[#0D5C63]/30 dark:via-[#16808C]/15 border border-[var(--border-color)] shadow-xl overflow-hidden backdrop-blur-sm -z-10">
                {/* Decorative subtle grid */}
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] [background-image:radial-gradient(#0D5C63_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>

              {/* The 3D Anas Avatar */}
              <div className="relative w-[92%] h-[95%] flex items-end justify-center group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={
                    activePose === "thinking"
                      ? "/images/anas_thinking_teal.png"
                      : activePose === "standing"
                      ? "/images/anas_standing_full.png"
                      : "/images/anas_teal.png"
                  }
                  alt="Anas - 3D Avatar in Deep Teal shirt"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl transition-all duration-300"
                  sizes="(max-width: 768px) 340px, 420px"
                />

                {/* Floating Badge 1: Flutter */}
                <div className="absolute top-8 -left-4 sm:-left-6 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] shadow-lg animate-[bounce_4s_ease-in-out_infinite]">
                  <div className="w-6 h-6 rounded-lg bg-[#0D5C63] text-white flex items-center justify-center">
                    <Smartphone size={13} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-muted)] font-medium">Core Stack</div>
                    <div className="font-bold text-[#0D5C63] dark:text-[#78CAD2]">Flutter & Dart</div>
                  </div>
                </div>

                {/* Floating Badge 2: Performance */}
                <div className="absolute bottom-16 -right-3 sm:-right-6 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] shadow-lg animate-[bounce_5s_ease-in-out_infinite_1s]">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <Code size={13} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-muted)] font-medium">Fluid UX</div>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400">60 FPS Native</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Pose Switcher */}
            <div className="mt-4 flex items-center gap-1.5 p-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xs">
              <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider pl-2.5 pr-1">
                Pose:
              </span>
              <button
                onClick={() => setActivePose("arms")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activePose === "arms"
                    ? "bg-[#0D5C63] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Arms Crossed
              </button>
              <button
                onClick={() => setActivePose("thinking")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activePose === "thinking"
                    ? "bg-[#0D5C63] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Thinking
              </button>
              <button
                onClick={() => setActivePose("standing")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activePose === "standing"
                    ? "bg-[#0D5C63] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Full Stand
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
