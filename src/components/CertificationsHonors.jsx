import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function CertificationsHonors() {
  const { certifications, achievements } = portfolioData;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20" id="certifications">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-2 border-b border-outline-variant/60">
          <div>
            <span className="font-mono text-xs text-primary font-medium tracking-wider uppercase">
              // 04. RECOGNITION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-on-surface tracking-tight mt-1">
              Certifications & Honors
            </h2>
          </div>
          <span className="font-mono text-xs text-on-surface-variant">
            VERIFIED CREDENTIALS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="font-mono text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Professional Certifications</span>
            </h3>

            <div className="flex flex-col gap-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-surface-container border border-outline-variant/60 flex items-start justify-between gap-4"
                >
                  <div className="flex flex-col">
                    <span className="font-display text-sm font-semibold text-on-surface">
                      {cert.title}
                    </span>
                    <span className="font-mono text-xs text-on-surface-variant mt-0.5">
                      {cert.organization === 'ISRO'
                        ? 'Indian Space Research Organisation (ISRO)'
                        : cert.organization}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                    check_circle
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Honors (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="font-mono text-xs font-semibold text-secondary uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">military_tech</span>
              <span>Achievements & Competitions</span>
            </h3>

            <div className="flex flex-col gap-3">
              {/* Freshothon */}
              <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/60 flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary font-mono text-[10px] font-semibold">
                      1ST PLACE
                    </span>
                    <span className="font-display text-sm font-semibold text-on-surface">
                      Freshothon
                    </span>
                  </div>
                  <span className="font-mono text-xs text-on-surface-variant mt-1">
                    Rajalakshmi Institute of Technology
                  </span>
                </div>
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  emoji_events
                </span>
              </div>

              {/* Inter-College Hackathon */}
              <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/60 flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary font-mono text-[10px] font-semibold">
                      1ST PLACE
                    </span>
                    <span className="font-display text-sm font-semibold text-on-surface">
                      Inter-College Hackathon
                    </span>
                  </div>
                  <span className="font-mono text-xs text-on-surface-variant mt-1">
                    Madha Engineering College • ₹2,000 Cash Prize
                  </span>
                </div>
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  trophy
                </span>
              </div>

              {/* Best Paper Award */}
              <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/60 flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-secondary/20 text-secondary font-mono text-[10px] font-semibold">
                      BEST PAPER
                    </span>
                    <span className="font-display text-sm font-semibold text-on-surface">
                      Research Presentation on "Fault Tolerance"
                    </span>
                  </div>
                  <span className="font-mono text-xs text-on-surface-variant mt-1">
                    Rajalakshmi Institute of Technology
                  </span>
                </div>
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                  article
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

