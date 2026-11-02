import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, education } = portfolioData;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Narrative (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/60 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase">
              {personal.statusBadge}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary font-medium tracking-widest uppercase">
              // PORTFOLIO OF
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-on-surface leading-[1.08]">
              {personal.name}
            </h1>
            <p className="font-display text-lg sm:text-xl text-secondary font-medium tracking-tight mt-1">
              Computer Science & Engineering Student & Aspiring Software Developer
            </p>
          </div>

          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {personal.summary}
          </p>

          {/* Quick Metrics from Resume */}
          <div className="flex flex-wrap items-center gap-4 py-1 text-xs font-mono text-on-surface-variant">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/60">
              <span className="material-symbols-outlined text-primary text-[16px]">school</span>
              <span>8.49 CGPA • Anna University (RIT)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/60">
              <span className="material-symbols-outlined text-secondary text-[16px]">work</span>
              <span>2 Industry Internships</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/60">
              <span className="material-symbols-outlined text-tertiary text-[16px]">verified</span>
              <span>4 Certifications</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-mono text-xs font-semibold hover:bg-primary-container transition-all shadow-[0_0_24px_rgba(16,185,129,0.25)]"
              href="#projects"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container border border-outline-variant/80 text-on-surface font-mono text-xs hover:border-outline transition-colors"
              href="#experience"
            >
              <span className="material-symbols-outlined text-[16px]">work</span>
              <span>View Experience</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container border border-outline-variant/80 text-on-surface font-mono text-xs hover:border-primary/60 hover:text-primary transition-colors"
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">description</span>
              <span>Resume PDF</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-on-surface-variant hover:text-primary font-mono text-xs transition-colors"
              href="#contact"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Right Architectural Photo Framing (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
          {/* Geometric Architectural Back-frame */}
          <div className="absolute -top-4 -right-4 w-full max-w-[340px] sm:max-w-[370px] h-full border border-primary/25 rounded-2xl pointer-events-none -z-10 translate-x-2 translate-y-2"></div>
          <div className="absolute -bottom-3 -left-3 w-4/5 h-4/5 border border-outline-variant/60 rounded-2xl pointer-events-none -z-10"></div>

          {/* Main Portrait Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[370px] rounded-2xl bg-surface-container-low border border-outline-variant/80 p-2.5 shadow-2xl shadow-black/60 group">
            {/* Elegant Photo Wrapper with Corner Accents */}
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant/40">
              <img
                alt="S. Hari Shankar"
                className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                src={personal.profileImage}
              />
              {/* Editorial Corner Hairlines */}
              <span className="absolute top-3 left-3 text-[10px] font-mono text-white/50 tracking-widest pointer-events-none">+</span>
              <span className="absolute top-3 right-3 text-[10px] font-mono text-white/50 tracking-widest pointer-events-none">+</span>
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/50 tracking-widest pointer-events-none">+</span>
              <span className="absolute bottom-3 right-3 text-[10px] font-mono text-white/50 tracking-widest pointer-events-none">+</span>

              {/* Subtle Gradient Shade at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none"></div>

              {/* Bottom Floating Editorial Quote Badge */}
              <div className="absolute bottom-3.5 inset-x-3.5 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-white/10 text-on-surface shadow-md">
                  <p className="font-display italic text-xs tracking-wide">“Empirical craft. Resilient code.”</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                </div>
              </div>
            </div>

            {/* Bottom Frame Label */}
            <div className="mt-2.5 px-2 py-1.5 flex items-center justify-between text-xs font-mono">
              <span className="text-on-surface-variant">S HARI SHANKAR</span>
              <span className="text-primary">B.E. CSE (2024–2028)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
