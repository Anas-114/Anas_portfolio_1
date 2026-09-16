"use client";

import React from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-main)] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col gap-8">
        {/* Core Principles Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-semibold">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C63] dark:bg-[#78CAD2]"></span>
              Clean Code
            </span>
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]"></span>
              New Ideas
            </span>
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Better Products
            </span>
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              Meaningful Impact
            </span>
          </div>

          <div className="text-[11px] font-mono text-[var(--text-muted)]">
            ANAS | 18/01/2006 | CALICUT, KERALA
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <span>Designed & crafted by</span>
            <strong className="text-[var(--text-primary)] font-bold">{PERSONAL_INFO.name}</strong>
            <span>• Flutter Developer</span>
          </div>

          <p className="italic text-[var(--text-muted)] text-[11px]">
            &ldquo;{PERSONAL_INFO.quote}&rdquo;
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl glass-card text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#0D5C63]/50 transition-all hover:-translate-y-0.5 shadow-sm flex items-center gap-1.5 font-medium text-xs"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
