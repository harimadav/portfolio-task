import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Honors', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <a className="flex items-center gap-2 group" href="#">
          <span className="font-mono text-xs font-semibold text-primary px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
            SHS
          </span>
          <span className="font-display font-medium text-sm tracking-tight text-on-surface group-hover:text-primary transition-colors">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-on-surface-variant">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container border border-outline-variant/60 text-on-surface-variant hover:text-on-surface hover:border-outline transition-all"
            type="button"
            onClick={toggleTheme}
          >
            <span className="material-symbols-outlined text-[17px]">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Resume Link */}
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/80 text-xs font-mono text-on-surface hover:border-primary/60 hover:text-primary transition-all"
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[15px]">description</span>
            <span>Resume</span>
          </a>

          {/* Connect CTA */}
          <a
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-white text-xs font-mono font-medium hover:bg-primary-container transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            href="#contact"
          >
            <span className="material-symbols-outlined text-[15px]">arrow_downward</span>
            <span>Connect</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container border border-outline-variant/60 text-on-surface-variant"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[18px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-outline-variant/60 bg-surface-container-low px-6 py-4">
          <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-on-surface-variant">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-1 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 text-primary flex items-center gap-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-[15px]">description</span>
              <span>Download Resume (PDF)</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
