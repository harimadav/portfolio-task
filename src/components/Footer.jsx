import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-outline-variant/50 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
        <div>
          © Built by S HARI SHANKAR • Computer Science & Engineering
        </div>
        <div className="flex items-center gap-6">
          <a
            className="hover:text-primary transition-colors"
            href={personal.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-primary transition-colors"
            href={personal.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="#contact"
          >
            Email
          </a>
          <a
            className="hover:text-primary transition-colors"
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
