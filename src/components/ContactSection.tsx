"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#0D5C63", "#78CAD2", "#E07A5F", "#2A9D8F"],
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0D5C63]/15">
              <MessageSquare size={13} />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-secondary)] mb-1">
              Have something interesting?
            </h2>

            <h3 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6">
              Let&apos;s talk
              <span className="text-[#0D5C63] dark:text-[#78CAD2]">.</span>
            </h3>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg mb-8">
              Whether you have a mobile app to build from scratch, need an experienced Flutter developer on your team, or want to talk about cross-platform architecture and AI — my inbox is always open.
            </p>

            {/* Quick Email Copy Banner */}
            <div className="w-full max-w-md p-4 rounded-2xl glass-card flex items-center justify-between gap-3 mb-8">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-[var(--text-muted)] font-medium">Direct Email</div>
                  <div className="text-sm font-bold text-[var(--text-primary)] font-mono truncate">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--bg-main)] hover:bg-[#0D5C63] hover:text-white text-[var(--text-secondary)] border border-[var(--border-color)] transition-all shrink-0"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold glass-card hover:border-[#0D5C63]/50 text-[var(--text-primary)] hover:text-[#0D5C63] dark:hover:text-[#78CAD2] transition-colors"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold glass-card hover:border-[#0D5C63]/50 text-[var(--text-primary)] hover:text-[#0D5C63] dark:hover:text-[#78CAD2] transition-colors"
              >
                <GitHubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
              </a>

              <a
                href={PERSONAL_INFO.socials.email}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold glass-card hover:border-[#0D5C63]/50 text-[var(--text-primary)] hover:text-[#0D5C63] dark:hover:text-[#78CAD2] transition-colors"
              >
                <Mail size={16} />
                <span>Send Email</span>
                <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form with Waving Avatar Badge */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              {/* Subtle top avatar header */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[var(--border-subtle)]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0D5C63] shrink-0 bg-[#E6EFF1]">
                  <Image
                    src="/images/anas_teal.png"
                    alt="Anas Avatar"
                    fill
                    sizes="48px"
                    className="object-contain object-top"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    Send Anas a quick note
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[var(--teal-light)] text-[#0D5C63] dark:text-[#78CAD2] flex items-center justify-center">
                    <Sparkles size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--text-primary)]">
                    Message Sent!
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] max-w-xs">
                    Thanks for reaching out! I&apos;ve received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0D5C63] text-white hover:bg-[#084247] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[var(--text-primary)]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Turner"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#0D5C63] dark:focus:border-[#78CAD2] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[var(--text-primary)]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#0D5C63] dark:focus:border-[#78CAD2] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--text-primary)]">
                      Project or Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Flutter mobile app MVP / Freelance role"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#0D5C63] dark:focus:border-[#78CAD2] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--text-primary)]">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me a bit about what you're working on, timeline, and goals..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#0D5C63] dark:focus:border-[#78CAD2] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold bg-[#0D5C63] hover:bg-[#084247] text-white shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
