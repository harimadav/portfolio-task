import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { experience, education } = portfolioData;

  return (
    <section className="w-full bg-surface-container-low border-y border-outline-variant/60 py-20" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="font-mono text-xs text-primary font-medium tracking-wider uppercase">
              // 03. CHRONICLE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-on-surface tracking-tight mt-1">
              Experience & Education
            </h2>
          </div>
          <span className="font-mono text-xs text-on-surface-variant">
            VERIFIED FORMATION & PRACTICUM
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Experience Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
              <span className="material-symbols-outlined text-[18px]">work_history</span>
              <span>Internships & Traineeships</span>
            </div>

            {/* Internship 1 */}
            <div className="bg-surface-container border border-outline-variant/60 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-on-surface">
                  {experience[0].role}
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[11px]">
                  {experience[0].period}
                </span>
              </div>
              <div className="font-mono text-xs text-secondary">
                {experience[0].organization}
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {experience[0].details[0]}
              </p>
              <div className="pt-2 text-[11px] font-mono text-outline">
                Focus: Software Engineering Concepts • Workflows • Development Methodologies
              </div>
            </div>

            {/* Inplant Training 2 */}
            <div className="bg-surface-container border border-outline-variant/60 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-on-surface">
                  {experience[1].role}
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-surface-container-high border border-outline-variant text-on-surface-variant font-mono text-[11px]">
                  {experience[1].period}
                </span>
              </div>
              <div className="font-mono text-xs text-secondary">
                {experience[1].organization}
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {experience[1].details[0]}
              </p>
              <div className="pt-2 text-[11px] font-mono text-outline">
                Focus: Industrial Operations • Manufacturing Processes • Organizational Workflows
              </div>
            </div>
          </div>

          {/* Education Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6" id="education">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-secondary uppercase">
              <span className="material-symbols-outlined text-[18px]">school</span>
              <span>Academic Background</span>
            </div>

            {/* College Education */}
            <div className="bg-surface-container border border-outline-variant/60 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-on-surface">
                  {education[0].degree}
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[11px] font-semibold">
                  {education[0].score}
                </span>
              </div>
              <div className="font-mono text-xs text-secondary">
                {education[0].institution} • {education[0].university} ({education[0].period})
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {education[0].description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-mono text-on-surface">
                  Computer Science Core
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-mono text-on-surface">
                  Algorithm Analysis
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-mono text-on-surface">
                  Fault Tolerant Systems
                </span>
              </div>
            </div>

            {/* Schooling */}
            <div className="bg-surface-container border border-outline-variant/60 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-on-surface">
                  Senior Secondary & Secondary Schooling
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-surface-container-high border border-outline-variant text-on-surface-variant font-mono text-[11px]">
                  CBSE Curriculum
                </span>
              </div>
              <div className="font-mono text-xs text-secondary">
                Sudharsanam Vidyaashram (CBSE)
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-surface-container-high border border-outline-variant/40">
                  <div className="text-[11px] font-mono text-on-surface-variant">Class XII (2024)</div>
                  <div className="font-display text-base font-semibold text-primary">{education[1].score}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container-high border border-outline-variant/40">
                  <div className="text-[11px] font-mono text-on-surface-variant">Class X (2022)</div>
                  <div className="font-display text-base font-semibold text-secondary">{education[2].score}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

