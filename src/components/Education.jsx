import React from 'react';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section" aria-label="Educational Background">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Journey</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Consistent academic excellence spanning undergraduate engineering and senior secondary schooling.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <div key={index} className="glass-card education-card">
              <div className="education-card-top">
                <div className="education-icon-box">
                  <GraduationCap size={24} className="text-cyan" />
                </div>
                <div className="education-score-pill">
                  <Award size={15} />
                  <span>{item.score}</span>
                </div>
              </div>

              <div className="education-card-content">
                <span className="education-type-tag">{item.type}</span>
                <h3 className="education-degree">{item.degree}</h3>
                
                <div className="education-institution">
                  <Building2 size={16} />
                  <span>{item.institution}</span>
                </div>

                <div className="education-meta-row">
                  <span className="education-board">Board / Univ: <strong>{item.university}</strong></span>
                  <span className="education-period">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="education-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

