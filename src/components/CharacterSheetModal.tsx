"use client";

import React from "react";
import Image from "next/image";
import { X, Sparkles, Download } from "lucide-react";

interface CharacterSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CharacterSheetModal: React.FC<CharacterSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--bg-card)] rounded-2xl sm:rounded-3xl border border-[var(--border-color)] shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-card-subtle)]">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#0D5C63] dark:text-[#78CAD2]" />
            <span className="font-bold text-base text-[var(--text-primary)]">
              Anas • Official 3D Character Sheet
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col items-center">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-md border border-[var(--border-subtle)]">
            <Image
              src="/images/anas_character_sheet.jpg"
              alt="Anas 3D Character Sheet Specification"
              fill
              className="object-contain bg-[#EAE8E3]"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 w-full text-xs text-[var(--text-secondary)]">
            <p className="italic">
              &ldquo;Curious mind. Better tomorrow. Just exploring the internet & tech.&rdquo;
            </p>
            <a
              href="/images/anas_character_sheet.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#0D5C63] dark:text-[#78CAD2] hover:underline"
            >
              <Download size={13} />
              <span>Open full resolution</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
