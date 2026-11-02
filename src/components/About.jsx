import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  Cpu,
  Compass,
  CheckCircle2,
  Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, education } = portfolioData;
  const currentEdu = education[0];

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Discipline',
      text: `${currentEdu.score} in ${currentEdu.degree} at ${currentEdu.institution} (${currentEdu.university}).`
    },
    {
      icon: ShieldCheck,
      title: 'Research in Fault Tolerance',
      text: 'Authored and presented research on "Fault Tolerance", recognized with the Best Paper Award at RIT.'
    },
    {
      icon: Cpu,
      title: 'Practical System Development',
      text: 'Engineered predictive analytics pipelines (DWLR sensors), role-based LMS systems, and voting platforms.'
    },
    {
      icon: Compass,
      title: 'Industry & Manufacturing Exposure',
      text: 'Completed software development internship at CODTECH and inplant industrial training at Heavy Vehicles Factory (HVF).'
    }
  ];

  return (
    <section id="about" className="section about-section" aria-label="About S Hari Shankar">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Profile Overview</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A motivated Computer Science undergraduate dedicated to building reliable, data-driven, and user-centric software solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="glass-card about-narrative-card">
            <h3 className="about-card-title">Background & Academic Foundation</h3>
            <p className="about-text">
              I am a <strong>Computer Science Engineering student</strong> at <strong>{currentEdu.institution}</strong> (affiliated with <strong>{currentEdu.university}</strong>), pursuing my B.E. with an ongoing academic standing of <strong>{currentEdu.score}</strong>.
            </p>
            <p className="about-text">
              {personal.summary}
            </p>
            <p className="about-text">
              My technical journey bridges core theoretical computer science—including algorithmic design and analysis certified through NPTEL—with practical applications such as smart groundwater prediction using DWLR sensor datasets, role-based web platforms, and automated workflow solutions.
            </p>

            <div className="about-key-points">
              <div className="key-point-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Undergraduate tenure: <strong>2024–2028</strong></span>
              </div>
              <div className="key-point-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Dual industry training (Software Development & Industrial Operations)</span>
              </div>
              <div className="key-point-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Recognized hackathon winner and published paper presenter</span>
              </div>
            </div>
          </div>

          {/* Core Strengths & Highlights Grid */}
          <div className="about-highlights-column">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card highlight-card">
                  <div className="highlight-icon-wrapper">
                    <Icon size={22} />
                  </div>
                  <div className="highlight-content">
                    <h4 className="highlight-title">{item.title}</h4>
                    <p className="highlight-text">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

