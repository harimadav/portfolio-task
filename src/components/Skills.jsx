import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="w-full bg-surface-container-low border-y border-outline-variant/60 py-16" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="font-mono text-xs text-primary font-medium tracking-wider uppercase">
              // 01. CAPABILITIES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-on-surface tracking-tight mt-1">
              Core Foundations & Technical Skills
            </h2>
          </div>
          <span className="font-mono text-xs text-on-surface-variant">
            DISCIPLINED PRACTICES & PARADIGMS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Core Domains */}
          <div className="p-6 rounded-xl bg-surface-container border border-outline-variant/60 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-primary uppercase">
                Core Domains
              </span>
              <span className="material-symbols-outlined text-outline text-[20px]">
                account_tree
              </span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Foundational knowledge applied across computer systems, algorithm analysis, and fault-tolerant system design.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface">
                Data Structures & Algorithms (NPTEL)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface">
                Fault Tolerance Systems
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface">
                System Architecture & RBAC
              </span>
            </div>
          </div>

          {/* Systems & Web Stack */}
          <div className="p-6 rounded-xl bg-surface-container border border-outline-variant/60 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-secondary uppercase">
                Systems & Data Architecture
              </span>
              <span className="material-symbols-outlined text-outline text-[20px]">
                dns
              </span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Architecting dependable applications, telemetry pipelines, and document-oriented database systems.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface">
                MongoDB (Certified by MongoDB)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface">
                DWLR Sensor Telemetry
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface">
                Predictive Analytics & Visualization
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface">
                Automation Development (UiPath)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface">
                Geospatial Image Analysis (ISRO)
              </span>
            </div>
          </div>

          {/* Professional Foundations / Soft Skills */}
          <div className="p-6 rounded-xl bg-surface-container border border-outline-variant/60 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-tertiary uppercase">
                Professional Attributes
              </span>
              <span className="material-symbols-outlined text-outline text-[20px]">
                psychology
              </span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Disciplined work ethic driving constructive teamwork, methodical problem-solving, and continuous learning.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/60 text-xs font-mono text-on-surface flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
