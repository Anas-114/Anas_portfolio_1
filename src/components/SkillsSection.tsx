"use client";

import React, { useState } from "react";
import { SKILLS, Skill } from "@/data/portfolioData";
import {
  Smartphone,
  Code2,
  Flame,
  Database,
  Globe,
  Layers,
  Cpu,
  Zap,
  Radio,
  GitBranch,
  Palette,
  Settings,
  Layers3,
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "core", label: "Mobile Core" },
    { id: "state", label: "State Architecture" },
    { id: "backend", label: "Backend & APIs" },
    { id: "realtime", label: "Realtime RTC" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone size={20} className="text-[#0D5C63] dark:text-[#78CAD2]" />;
      case "Code2":
        return <Code2 size={20} className="text-[#0D5C63] dark:text-[#78CAD2]" />;
      case "Flame":
        return <Flame size={20} className="text-amber-500" />;
      case "Database":
        return <Database size={20} className="text-emerald-500" />;
      case "Globe":
        return <Globe size={20} className="text-sky-500" />;
      case "Layers":
        return <Layers size={20} className="text-indigo-500" />;
      case "Cpu":
        return <Cpu size={20} className="text-cyan-500" />;
      case "Zap":
        return <Zap size={20} className="text-yellow-500" />;
      case "Radio":
        return <Radio size={20} className="text-rose-500" />;
      case "GitBranch":
        return <GitBranch size={20} className="text-orange-500" />;
      case "Palette":
        return <Palette size={20} className="text-purple-500" />;
      case "Settings":
        return <Settings size={20} className="text-teal-500" />;
      default:
        return <Smartphone size={20} className="text-[#0D5C63]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[var(--bg-card-subtle)]/40 border-y border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0D5C63]/15">
            <Layers3 size={13} />
            <span>Toolkit & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            What I use
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-2 max-w-xl">
            A battle-tested stack of modern frameworks, state management patterns, and real-time communication protocols.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#0D5C63] text-white shadow-sm"
                  : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[#0D5C63]/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-[#0D5C63]/40 hover:-translate-y-1 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] border border-[#0D5C63]/10">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Title & Desc */}
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 group-hover:text-[#0D5C63] dark:group-hover:text-[#78CAD2] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Used In Tag */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
                  Used in:
                </span>
                {skill.usedIn.map((app) => (
                  <span
                    key={app}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[var(--bg-main)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
