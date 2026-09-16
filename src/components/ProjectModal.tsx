"use client";

import React from "react";
import { Project } from "@/data/portfolioData";
import { X, CheckCircle2, Cpu, BarChart3, Layers, ExternalLink, Smartphone } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--bg-card)] rounded-2xl sm:rounded-3xl border border-[var(--border-color)] shadow-2xl overflow-hidden flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-subtle)] bg-[var(--bg-card-subtle)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D5C63] text-white flex items-center justify-center font-bold">
              <Smartphone size={20} />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D5C63] dark:text-[#78CAD2]">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Tagline & Impact Banner */}
          <div className="p-5 rounded-2xl bg-[var(--teal-light)] border border-[#0D5C63]/15 flex flex-col gap-2">
            <h4 className="text-sm font-bold text-[#0D5C63] dark:text-[#78CAD2]">
              {project.tagline}
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
              <strong>Impact: </strong>
              {project.impact}
            </p>
          </div>

          {/* Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex flex-col items-center text-center"
                >
                  <span className="text-lg font-extrabold text-[#0D5C63] dark:text-[#78CAD2]">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Layers size={16} className="text-[#0D5C63] dark:text-[#78CAD2]" />
              <span>Project Overview</span>
            </h4>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span>Core Features</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)] bg-[var(--bg-main)] p-3 rounded-xl border border-[var(--border-subtle)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C63] dark:bg-[#78CAD2] mt-1.5 shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Cpu size={16} className="text-[#0D5C63] dark:text-[#78CAD2]" />
              <span>Engineering & Architecture</span>
            </h4>
            <div className="space-y-2">
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="text-xs sm:text-sm text-[var(--text-secondary)] bg-[var(--bg-main)] p-3 rounded-xl border border-[var(--border-subtle)] flex items-start gap-2"
                >
                  <span className="font-mono text-xs text-[#0D5C63] dark:text-[#78CAD2] font-bold">
                    0{idx + 1}.
                  </span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] border border-[#0D5C63]/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-card-subtle)] flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)]">
            Built by Anas • Flutter Mobile Engineering
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-[#0D5C63] text-white hover:bg-[#084247] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
