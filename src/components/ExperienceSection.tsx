"use client";

import React from "react";
import { EXPERIENCES, Experience } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[var(--bg-card-subtle)]/40 border-y border-[var(--border-subtle)]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0D5C63]/15">
            <Briefcase size={13} />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-2">
            Timeline of my professional engineering work and hands-on apprenticeship.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#0D5C63]/25 dark:border-[#78CAD2]/20 space-y-12">
          {EXPERIENCES.map((exp: Experience, idx: number) => (
            <div key={exp.company} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-card)] border-4 border-[#0D5C63] dark:border-[#78CAD2] group-hover:scale-125 transition-transform"></div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-[#0D5C63]/40 transition-all">
                {/* Header: Company, Role & Duration */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D5C63] dark:text-[#78CAD2]">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <h4 className="text-base sm:text-lg font-semibold text-[var(--text-secondary)]">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-medium text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-main)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-mono">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[var(--text-muted)]">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[#0D5C63] dark:text-[#78CAD2] shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Pill Row */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5">
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] border border-[#0D5C63]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
