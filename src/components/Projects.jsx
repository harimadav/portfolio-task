import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  const projectMeta = [
    {
      category: 'HYDROLOGY & SENSORS',
      tags: ['IoT / Sensors', 'Data Analytics', 'Time-Series', 'Predictive Modeling']
    },
    {
      category: 'PEDAGOGICAL PLATFORM',
      tags: ['Role-Based Access (RBAC)', 'Course Workflows', 'Student & Teacher Portals', 'Progress Tracking']
    },
    {
      category: 'RECORD INVENTORY',
      tags: ['Database Architecture', 'Borrowing Lifecycle', 'State & Availability Tracking', 'CRUD Operations']
    },
    {
      category: 'INTEGRITY & SECURITY',
      tags: ['Authentication & Security', 'Voter/Candidate/Admin Modules', 'Result Tabulation', 'Election Lifecycle']
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20" id="projects">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-2 border-b border-outline-variant/60">
          <div>
            <span className="font-mono text-xs text-primary font-medium tracking-wider uppercase">
              // 02. PORTFOLIO IMPLEMENTATIONS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-on-surface tracking-tight mt-1">
              Real-World Projects
            </h2>
          </div>
          <span className="font-mono text-xs text-on-surface-variant">
            APPLIED ENGINEERING SYSTEMS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const meta = projectMeta[index] || { category: 'ENGINEERING SYSTEM', tags: project.tags };
            const projNum = String(index + 1).padStart(2, '0');
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="bg-surface-container border border-outline-variant/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-primary tracking-wider uppercase font-semibold">
                      PROJECT // {projNum}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                        isEven
                          ? 'bg-secondary/10 border border-secondary/20 text-secondary'
                          : 'bg-primary/10 border border-primary/20 text-primary'
                      }`}
                    >
                      {meta.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-3 border-t border-outline-variant/40">
                  <div className="flex flex-wrap gap-1.5">
                    {meta.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs font-mono">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[15px]">code</span>
                        <span>View Repository</span>
                      </a>
                    ) : (
                      <span className="text-outline flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">code</span>
                        <span>[Add GitHub URL]</span>
                      </span>
                    )}

                    <span className="text-[11px] text-on-surface-variant">Verified Resume Project</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
