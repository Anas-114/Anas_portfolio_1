"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import {
  Smartphone,
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Tv,
  PhoneCall,
  Briefcase,
  ShoppingBag,
  Activity,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "ametzo-academy":
        return <Tv size={22} className="text-[#0D5C63] dark:text-[#78CAD2]" />;
      case "boliyo":
        return <PhoneCall size={22} className="text-[#16808C] dark:text-[#78CAD2]" />;
      case "kodlar-crm":
        return <Briefcase size={22} className="text-emerald-600 dark:text-emerald-400" />;
      case "surprez":
        return <ShoppingBag size={22} className="text-[#D95D39] dark:text-amber-400" />;
      case "de-addiction":
        return <Activity size={22} className="text-teal-600 dark:text-teal-400" />;
      default:
        return <Smartphone size={22} className="text-[#0D5C63]" />;
    }
  };

  return (
    <section id="work" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0D5C63]/15">
            <Sparkles size={13} />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Things I&apos;ve built
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-2 max-w-xl">
            Selected mobile applications, real-time communication suites, and enterprise CRM systems built with Flutter.
          </p>
        </div>

        {/* Projects Grid: 2 columns for top 4, and centered/featured for 5th */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project: Project, index: number) => {
            const isLast = index === PROJECTS.length - 1;
            return (
              <div
                key={project.id}
                className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#0D5C63]/40 transition-all duration-300 group hover:-translate-y-1 ${
                  isLast ? "md:col-span-2 max-w-2xl md:mx-auto w-full" : ""
                }`}
              >
                <div>
                  {/* Top Bar with App Mockup Preview Graphic */}
                  <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[var(--bg-main)] via-[var(--bg-card-subtle)] to-[var(--bg-main)] border border-[var(--border-subtle)] mb-6 overflow-hidden flex flex-col justify-between p-5 group-hover:border-[#0D5C63]/25 transition-colors">
                    {/* Corner Accent Dots */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center shadow-sm">
                          {getProjectIcon(project.id)}
                        </div>
                        <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                          Mobile App
                        </span>
                      </div>

                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-card)] text-[#0D5C63] dark:text-[#78CAD2] border border-[var(--border-color)] shadow-xs">
                        {project.category}
                      </span>
                    </div>

                    {/* Simulated Mobile Device Preview UI */}
                    <div className="flex items-end justify-between pt-4">
                      <div className="space-y-1.5 max-w-[80%]">
                        <div className="text-xs font-bold text-[var(--text-primary)]">
                          {project.title}
                        </div>
                        <div className="text-[11px] text-[var(--text-secondary)] line-clamp-1">
                          {project.tagline}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#0D5C63] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110 shadow-md">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[#0D5C63] dark:group-hover:text-[#78CAD2] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[var(--bg-card-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-semibold text-[var(--text-muted)] px-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D5C63] dark:text-[#78CAD2] hover:underline"
                    >
                      <span>View details & architecture</span>
                      <ArrowUpRight size={15} />
                    </button>

                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      0{index + 1} / 05
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
