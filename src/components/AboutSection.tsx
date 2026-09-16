"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Eye, Compass, Heart, Terminal, Lightbulb, ShieldCheck, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CharacterSheetModal } from "./CharacterSheetModal";

export const AboutSection: React.FC = () => {
  const [sheetModalOpen, setSheetModalOpen] = useState(false);

  const valueIcons: Record<string, React.ReactNode> = {
    "Clean Code": <Terminal size={18} className="text-[#0D5C63] dark:text-[#78CAD2]" />,
    "New Ideas": <Lightbulb size={18} className="text-[#E07A5F]" />,
    "Better Products": <ShieldCheck size={18} className="text-emerald-600 dark:text-emerald-400" />,
    "Meaningful Impact": <Rocket size={18} className="text-indigo-600 dark:text-indigo-400" />,
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0D5C63]/15">
            <Compass size={13} />
            <span>Origin & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            A little about me
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-2 font-medium">
            {PERSONAL_INFO.motto}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Thinking Avatar & Character Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] flex items-center justify-center">
              {/* Soft warm card backdrop */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-b from-amber-500/5 via-[#0D5C63]/10 to-transparent dark:from-[#0D5C63]/25 dark:via-teal-900/20 border border-[var(--border-color)] shadow-xl overflow-hidden backdrop-blur-sm -z-10"></div>

              {/* Thinking Avatar Image */}
              <div className="relative w-[90%] h-[95%] flex items-end justify-center group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/anas_thinking_teal.png"
                  alt="Anas - Thinking & Exploring Pose in Deep Teal"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                  sizes="(max-width: 768px) 300px, 380px"
                />

                {/* Speech Bubble / Quote */}
                <div className="absolute top-6 right-0 glass-card px-4 py-2.5 rounded-2xl max-w-[200px] text-xs font-semibold text-[var(--text-primary)] shadow-md border border-[var(--border-color)]">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#0D5C63] dark:text-[#78CAD2] font-bold uppercase tracking-wider mb-1">
                    <Sparkles size={11} />
                    <span>Bio-Science to Code</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-tight italic">
                    &ldquo;{PERSONAL_INFO.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Character Sheet Button */}
            <button
              onClick={() => setSheetModalOpen(true)}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-card)] hover:bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] shadow-sm transition-all hover:scale-105"
            >
              <Eye size={14} className="text-[#0D5C63] dark:text-[#78CAD2]" />
              <span>Inspect 3D Character Model Sheet</span>
            </button>
          </div>

          {/* Right Column: Narrative Story & Personal Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col gap-5">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
                From biological systems to digital architectures.
              </h3>

              <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I didn&apos;t follow the standard computer science template. My journey started in
                  <strong className="text-[var(--text-primary)] font-semibold"> bio-science</strong>, where I developed a keen fascination for complex, living systems. Out of raw curiosity, I began experimenting with code—and when I touched
                  <strong className="text-[#0D5C63] dark:text-[#78CAD2] font-semibold"> Flutter & Dart</strong>, everything clicked.
                </p>
                <p>
                  The ability to translate pure thought into 60fps native mobile experiences on real devices felt like magic. As a 20-year-old self-taught developer from
                  <span className="text-[var(--text-primary)] font-medium"> Calicut, Kerala</span>, I poured countless hours into understanding reactive state trees, Flutter engine internals, and real-time networking.
                </p>
                <p>
                  After taking a deliberate break to recalibrate and sharpen my focus, I am back with intense momentum—shipping production-grade mobile apps, exploring AI agent integration in mobile ecosystems, and continuously pushing my craftsmanship forward.
                </p>
              </div>

              {/* Personal Traits Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[var(--border-subtle)]">
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mr-1">
                  Traits:
                </span>
                {PERSONAL_INFO.traits.map((trait) => (
                  <span
                    key={trait}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[var(--bg-card-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PERSONAL_INFO.coreValues.map((val) => (
                <div
                  key={val.label}
                  className="glass-card p-5 rounded-2xl hover:border-[#0D5C63]/30 transition-all flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[var(--teal-light)]">
                      {valueIcons[val.label] || <Heart size={16} />}
                    </div>
                    <h4 className="font-bold text-sm text-[var(--text-primary)]">
                      {val.label}
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Character Sheet Modal */}
      <CharacterSheetModal
        isOpen={sheetModalOpen}
        onClose={() => setSheetModalOpen(false)}
      />
    </section>
  );
};
