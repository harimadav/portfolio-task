import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(portfolioData.personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: portfolioData.personal.web3formsKey || '4990d92c-c26f-47f4-a452-49173150c026',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: 'Hari Shankar Portfolio',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setStatusMessage(`Thank you, ${formData.name}! Your message was successfully delivered directly to Hari Shankar's inbox.`);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Unable to transmit message. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setStatusMessage('Network connection error. Please try again or reach out directly.');
    }
  };

  const { personal, education, experience, projects, certifications, achievements, skills } = portfolioData;

  return (
    <div className="bg-background font-sans text-on-surface min-h-screen relative selection:bg-primary selection:text-white antialiased transition-colors duration-200">
      {/* Subtle Ambient Background Grid & Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(var(--color-grid)_1px,transparent_1px)] [background-size:28px_28px]"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-outline-variant transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between gap-4">
          <a className="flex items-center gap-2 group" href="#">
            <span className="font-mono text-xs font-semibold text-primary px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              SHS
            </span>
            <span className="font-display font-medium text-sm tracking-tight text-on-surface group-hover:text-primary transition-colors">
              {personal.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#about">About</a>
            <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
            <a className="hover:text-primary transition-colors" href="#experience">Experience</a>
            <a className="hover:text-primary transition-colors" href="#education">Education</a>
            <a className="hover:text-primary transition-colors" href="#certifications">Honors</a>
            <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              aria-label="Toggle theme"
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container border border-outline-variant text-on-surface-variant hover:text-on-surface transition-all cursor-pointer shadow-sm"
              id="theme-toggle"
              type="button"
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              <span className="material-symbols-outlined text-[17px]">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <a
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant text-xs font-mono text-on-surface hover:border-primary/60 hover:text-primary transition-all shadow-sm"
              href="#contact"
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              <span>Contact</span>
            </a>

            <a
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-white text-xs font-mono font-medium hover:bg-primary-container transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              href="#contact"
            >
              <span className="material-symbols-outlined text-[15px]">arrow_downward</span>
              <span>Connect</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN WRAPPER */}
      <main className="w-full pt-16 relative z-10 flex flex-col">
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant w-fit shadow-sm">
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container border border-outline-variant text-on-surface font-mono text-xs hover:border-outline transition-colors shadow-sm"
                  href="#experience"
                >
                  <span className="material-symbols-outlined text-[16px]">work</span>
                  <span>View Experience</span>
                </a>

                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-on-surface-variant hover:text-primary font-mono text-xs transition-colors"
                  href="#contact"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>Get in Touch</span>
                </a>

                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container border border-outline-variant text-on-surface hover:text-primary hover:border-primary/60 font-mono text-xs transition-colors shadow-sm"
                  href={personal.resumeUrl}
                  download="S_HARI_SHANKAR_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Photo Framing (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
              {/* Geometric Architectural Back-frame */}
              <div className="absolute -top-4 -right-4 w-full max-w-[340px] sm:max-w-[370px] h-full border border-primary/20 rounded-2xl pointer-events-none -z-10 translate-x-2 translate-y-2"></div>
              <div className="absolute -bottom-3 -left-3 w-4/5 h-4/5 border border-outline-variant rounded-2xl pointer-events-none -z-10"></div>

              {/* Main Portrait Container */}
              <div className="relative w-full max-w-[340px] sm:max-w-[370px] rounded-2xl bg-surface-container-low border border-outline-variant p-2.5 shadow-2xl group">
                {/* Elegant Photo Wrapper with Corner Accents */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant">
                  <img
                    alt="S. Hari Shankar"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    src={personal.profileImage}
                  />

                  {/* Editorial Corner Hairlines */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono text-white/40 tracking-widest pointer-events-none">+</span>
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-white/40 tracking-widest pointer-events-none">+</span>
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white/40 tracking-widest pointer-events-none">+</span>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono text-white/40 tracking-widest pointer-events-none">+</span>
                </div>

                {/* Bottom Frame Label */}
                <div className="mt-2.5 px-2 py-1.5 flex items-center justify-between text-xs font-mono">
                  <span className="text-on-surface-variant font-medium">S HARI SHANKAR</span>
                  <span className="text-primary font-semibold">B.E. CSE • 8.49 CGPA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL DOMAINS & SKILLS SECTION */}
        <section className="w-full bg-surface-container-low py-16 transition-colors duration-200" id="skills">
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
              <div className="p-6 rounded-xl bg-surface-container border border-outline-variant flex flex-col gap-4 shadow-sm transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-primary uppercase">
                    Core Domains
                  </span>
                  <span className="material-symbols-outlined text-outline text-[20px]">
                    account_tree
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Foundational knowledge applied across computer systems, algorithm analysis, and fault management.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface">
                    Data Structures & Algorithms (NPTEL)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface">
                    Fault Tolerance Systems
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface">
                    System Architecture
                  </span>
                </div>
              </div>

              {/* Systems & Development */}
              <div className="p-6 rounded-xl bg-surface-container border border-outline-variant flex flex-col gap-4 shadow-sm transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-secondary uppercase">
                    Systems & Data Architecture
                  </span>
                  <span className="material-symbols-outlined text-outline text-[20px]">
                    dns
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Architecting dependable web applications, sensor pipelines, and structured persistence layers.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface">
                    Web Architectures
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface">
                    Sensor Systems & Telemetry
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface">
                    MongoDB (Certified)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface">
                    Automation Development (UiPath)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface">
                    Geospatial Image Analysis (ISRO)
                  </span>
                </div>
              </div>

              {/* Professional Foundations */}
              <div className="p-6 rounded-xl bg-surface-container border border-outline-variant flex flex-col gap-4 shadow-sm transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-tertiary uppercase">
                    Professional Attributes
                  </span>
                  <span className="material-symbols-outlined text-outline text-[20px]">
                    psychology
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Empirical work ethic driving constructive teamwork, rapid prototyping, and methodical communication.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skills.softSkills.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-on-surface"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SHOWCASE SECTION (REAL PROJECTS ONLY) */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20" id="projects">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-2">
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
              {/* PROJECT 01: Water Level Predicting System */}
              <div className="bg-surface-container border border-outline-variant rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-primary/50 transition-all duration-300 group shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-primary tracking-wider uppercase font-semibold">
                      PROJECT // 01
                    </span>
                    <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[10px]">
                      HYDROLOGY & SENSORS
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                    Water Level Predicting System
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    Smart groundwater prediction platform utilizing DWLR (Digital Water Level Recorder) sensor telemetry with real-time visualization and predictive analytics based on historical hydrological datasets.
                  </p>
                </div>
                <div className="flex flex-col gap-4 pt-3 border-t border-outline-variant">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      DWLR Sensors
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Predictive Analytics
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Real-Time Visualization
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Historical Datasets
                    </span>
                  </div>
                  <div className="pt-1 text-xs font-mono text-outline">
                    [Add GitHub URL]
                  </div>
                </div>
              </div>

              {/* PROJECT 02: Learning Management System (LMS) */}
              <div className="bg-surface-container border border-outline-variant rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-primary/50 transition-all duration-300 group shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-primary tracking-wider uppercase font-semibold">
                      PROJECT // 02
                    </span>
                    <span className="px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[10px]">
                      PEDAGOGICAL PLATFORM
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                    Learning Management System (LMS)
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    Role-based pedagogical platform for students and educators featuring course module distribution, assignment submissions, automated progress tracking, and grading workflows.
                  </p>
                </div>
                <div className="flex flex-col gap-4 pt-3 border-t border-outline-variant">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Role-Based Access (RBAC)
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Course Management
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Assignment Submissions
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Progress Tracking & Grading
                    </span>
                  </div>
                  <div className="pt-1 text-xs font-mono text-outline">
                    [Add GitHub URL]
                  </div>
                </div>
              </div>

              {/* PROJECT 03: E-Voting System */}
              <div className="bg-surface-container border border-outline-variant rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-primary/50 transition-all duration-300 group shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-primary tracking-wider uppercase font-semibold">
                      PROJECT // 03
                    </span>
                    <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[10px]">
                      INTEGRITY & SECURITY
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                    E-Voting System
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    Secure, role-based digital voting architecture with distinct Voter, Candidate, and Administrator modules, enabling authenticated voter casting and admin-controlled election completion and result publication.
                  </p>
                </div>
                <div className="flex flex-col gap-4 pt-3 border-t border-outline-variant">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Voter Authentication
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Admin Controls
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Candidate Modules
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Result Publication
                    </span>
                  </div>
                  <div className="pt-1 text-xs font-mono text-outline">
                    [Add GitHub URL]
                  </div>
                </div>
              </div>

              {/* PROJECT 04: Library Management System */}
              <div className="bg-surface-container border border-outline-variant rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-primary/50 transition-all duration-300 group shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-primary tracking-wider uppercase font-semibold">
                      PROJECT // 04
                    </span>
                    <span className="px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-secondary font-mono text-[10px]">
                      RECORD INVENTORY
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                    Library Management System
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    Desktop / web application developed for managing book records, borrowing cycles, returning workflows, and real-time availability status tracking.
                  </p>
                </div>
                <div className="flex flex-col gap-4 pt-3 border-t border-outline-variant">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Book Records
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Borrowing & Returning
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Availability Status
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-mono text-on-surface">
                      Inventory Flow
                    </span>
                  </div>
                  <div className="pt-1 text-xs font-mono text-outline">
                    [Add GitHub URL]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section className="w-full bg-surface-container-low py-20 transition-colors duration-200" id="experience">
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
                <div className="bg-surface-container border border-outline-variant rounded-xl p-6 flex flex-col gap-3 shadow-sm transition-colors duration-200">
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
                    Focus: Software Development Concepts • Workflows • Development Methodologies
                  </div>
                </div>

                {/* Inplant Training 2 */}
                <div className="bg-surface-container border border-outline-variant rounded-xl p-6 flex flex-col gap-3 shadow-sm transition-colors duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-on-surface">
                      {experience[1].role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-[11px]">
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
                <div className="bg-surface-container border border-outline-variant rounded-xl p-6 flex flex-col gap-3 shadow-sm transition-colors duration-200">
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
                      Algorithm Design
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-mono text-on-surface">
                      Fault Tolerance
                    </span>
                  </div>
                </div>

                {/* Schooling */}
                <div className="bg-surface-container border border-outline-variant rounded-xl p-6 flex flex-col gap-3 shadow-sm transition-colors duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-on-surface">
                      Secondary & Higher Secondary Education
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-[11px]">
                      CBSE Curriculum
                    </span>
                  </div>
                  <div className="font-mono text-xs text-secondary">
                    Sudharsanam Vidyaashram (CBSE)
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-2.5 rounded-lg bg-surface-container-high">
                      <div className="text-[11px] font-mono text-on-surface-variant">Class XII (2024)</div>
                      <div className="font-display text-base font-semibold text-primary">{education[1].score}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container-high">
                      <div className="text-[11px] font-mono text-on-surface-variant">Class X (2022)</div>
                      <div className="font-display text-base font-semibold text-secondary">{education[2].score}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS & HONORS SECTION */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20" id="certifications">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-2">
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
                      className="p-4 rounded-lg bg-surface-container border border-outline-variant flex items-start justify-between gap-4 shadow-sm transition-colors duration-200"
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
                  {/* Honor 1 */}
                  <div className="p-4 rounded-lg bg-surface-container border border-outline-variant flex items-start justify-between gap-4 shadow-sm transition-colors duration-200">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary font-mono text-[10px] font-semibold">
                          1ST PLACE
                        </span>
                        <span className="font-display text-sm font-semibold text-on-surface">
                          {achievements[0].event}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-on-surface-variant mt-1">
                        {achievements[0].organization}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                      emoji_events
                    </span>
                  </div>

                  {/* Honor 2 */}
                  <div className="p-4 rounded-lg bg-surface-container border border-outline-variant flex items-start justify-between gap-4 shadow-sm transition-colors duration-200">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary font-mono text-[10px] font-semibold">
                          1ST PLACE
                        </span>
                        <span className="font-display text-sm font-semibold text-on-surface">
                          {achievements[1].event}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-on-surface-variant mt-1">
                        {achievements[1].organization} • {achievements[1].highlight}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                      trophy
                    </span>
                  </div>

                  {/* Honor 3 */}
                  <div className="p-4 rounded-lg bg-surface-container border border-outline-variant flex items-start justify-between gap-4 shadow-sm transition-colors duration-200">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-secondary/20 text-secondary font-mono text-[10px] font-semibold">
                          BEST PAPER
                        </span>
                        <span className="font-display text-sm font-semibold text-on-surface">
                          {achievements[2].event}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-on-surface-variant mt-1">
                        {achievements[2].organization}
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

        {/* CONTACT SECTION */}
        <section className="w-full bg-surface-container-low py-20 transition-colors duration-200" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-surface-container border border-outline-variant rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-sm transition-colors duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Info (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant w-fit font-mono text-xs text-primary uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span>Get In Touch</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-on-surface tracking-tight">
                    Let's Build Something Meaningful
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-lg leading-relaxed">
                    Always eager to collaborate on real-world projects, discuss software engineering roles, or explore innovative development ideas.
                  </p>

                  <div className="flex flex-col gap-3 pt-2 font-mono text-xs">
                    <button
                      type="button"
                      className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors text-left cursor-pointer group w-fit"
                      onClick={copyEmail}
                      title="Click to copy email address"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shadow-sm group-hover:border-primary/50 transition-colors">
                        <span className="material-symbols-outlined text-[17px]">
                          {copiedEmail ? 'done' : 'mail'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{personal.email}</span>
                        {copiedEmail && (
                          <span className="text-[10px] text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
                            Copied!
                          </span>
                        )}
                      </div>
                    </button>

                    <a
                      className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors"
                      href={`tel:+91${personal.phone}`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shadow-sm">
                        <span className="material-symbols-outlined text-[17px]">phone</span>
                      </div>
                      <span>+91 {personal.phone}</span>
                    </a>

                    <a
                      className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors"
                      href={personal.linkedin}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shadow-sm">
                        <span className="material-symbols-outlined text-[17px]">link</span>
                      </div>
                      <span>{personal.linkedinDisplay}</span>
                    </a>

                    <a
                      className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors"
                      href={personal.github}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shadow-sm">
                        <span className="material-symbols-outlined text-[17px]">code</span>
                      </div>
                      <span>{personal.githubDisplay}</span>
                    </a>
                  </div>
                </div>

                {/* Right Message Card (5 cols) */}
                <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant p-6 sm:p-8 rounded-xl flex flex-col gap-4 shadow-sm transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                      Direct Message
                    </span>
                    <span className="font-mono text-[10px] text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Auto-sent to Inbox
                    </span>
                  </div>

                  {submitStatus === 'success' ? (
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold">
                        <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
                        <span>Transmission Successful</span>
                      </div>
                      <p className="font-sans text-xs text-on-surface leading-relaxed">
                        {statusMessage}
                      </p>
                      <button
                        type="button"
                        className="mt-2 text-[11px] font-mono text-primary underline text-left cursor-pointer"
                        onClick={() => setSubmitStatus('idle')}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form
                      className="flex flex-col gap-3.5"
                      onSubmit={handleFormSubmit}
                    >
                      {submitStatus === 'error' && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px]">error</span>
                          <span>{statusMessage}</span>
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        <label className="font-mono text-[11px] text-on-surface-variant" htmlFor="sender-name">
                          YOUR NAME
                        </label>
                        <input
                          className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-outline-variant text-on-surface text-xs focus:outline-none focus:border-primary font-sans transition-colors"
                          id="sender-name"
                          name="name"
                          placeholder="e.g. Recruiter / Colleague"
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-mono text-[11px] text-on-surface-variant" htmlFor="sender-email">
                          EMAIL ADDRESS
                        </label>
                        <input
                          className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-outline-variant text-on-surface text-xs focus:outline-none focus:border-primary font-sans transition-colors"
                          id="sender-email"
                          name="email"
                          placeholder="name@domain.com"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-mono text-[11px] text-on-surface-variant" htmlFor="sender-msg">
                          MESSAGE
                        </label>
                        <textarea
                          className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-outline-variant text-on-surface text-xs focus:outline-none focus:border-primary font-sans resize-none transition-colors"
                          id="sender-msg"
                          name="message"
                          placeholder="Let's connect regarding a project or opportunity..."
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>

                      <button
                        className="w-full mt-1 py-2.5 rounded-lg bg-primary text-white font-mono text-xs font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(16,185,129,0.25)] disabled:opacity-60 cursor-pointer"
                        type="submit"
                        disabled={submitStatus === 'submitting'}
                      >
                        {submitStatus === 'submitting' ? (
                          <>
                            <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-[16px]">send</span>
                            <span>Transmit Message</span>
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-between pt-1">
                        <span className="font-mono text-[10px] text-on-surface-variant flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                          <span>Delivers directly to {personal.email}</span>
                        </span>
                        <span className="font-mono text-[10px] text-primary flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">bolt</span>
                          <span>Instant direct delivery</span>
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-background py-8 relative z-10 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
          <div>
            © 2025 {personal.name} • Computer Science & Engineering
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-primary transition-colors" href={personal.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a className="hover:text-primary transition-colors" href={personal.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a className="hover:text-primary transition-colors" href="#contact">
              Email
            </a>
            <a className="hover:text-primary transition-colors" href={personal.resumeUrl} target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
