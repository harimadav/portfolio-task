import React from 'react';
import { Trophy, Award, FileText, CheckCircle2, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  const getAwardIcon = (index) => {
    switch (index) {
      case 0:
        return <Trophy size={28} className="text-amber" />;
      case 1:
        return <Award size={28} className="text-cyan" />;
      case 2:
        return <FileText size={28} className="text-indigo" />;
      default:
        return <Award size={28} className="text-cyan" />;
    }
  };

  return (
    <section id="achievements" className="section achievements-section" aria-label="Achievements and Research Awards">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Recognition & Research</span>
          <h2 className="section-title">Honors & Achievements</h2>
          <p className="section-subtitle">
            Competitive hackathon victories and peer-reviewed research distinctions.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="glass-card achievement-card">
              <div className="achievement-top">
                <div className="achievement-icon-wrapper">
                  {getAwardIcon(index)}
                </div>
                <span className="badge badge-cyan">{item.highlight}</span>
              </div>

              <div className="achievement-body">
                <h3 className="achievement-title">{item.title}</h3>
                
                <div className="achievement-meta">
                  <Building size={15} />
                  <span>{item.organization}</span>
                </div>

                <p className="achievement-description">{item.description}</p>
              </div>

              <div className="achievement-footer">
                <div className="achievement-status">
                  <CheckCircle2 size={15} className="text-cyan" />
                  <span>Verified Distinction</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

