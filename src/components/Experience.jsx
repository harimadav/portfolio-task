import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle, Factory } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section" aria-label="Internship and Industry Experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Hands-on Experience</span>
          <h2 className="section-title">Internships & Training</h2>
          <p className="section-subtitle">
            Practical industry exposure in software development methodologies and industrial engineering processes.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => {
            const isSoftware = item.role.toLowerCase().includes('software');
            return (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot">
                    {isSoftware ? <Briefcase size={18} /> : <Factory size={18} />}
                  </div>
                  {index < experience.length - 1 && <div className="timeline-line"></div>}
                </div>

                <div className="glass-card timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <div className="timeline-meta-top">
                        <span className="badge badge-cyan">{item.type}</span>
                        <span className="timeline-date">
                          <Calendar size={14} />
                          {item.period}
                        </span>
                      </div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <h4 className="timeline-company">
                        <Building size={15} />
                        <span>{item.organization}</span>
                      </h4>
                    </div>
                  </div>

                  <div className="timeline-body">
                    <ul className="timeline-bullets">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="timeline-bullet-item">
                          <CheckCircle size={16} className="bullet-icon text-cyan" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {item.skillsMentioned && (
                      <div className="timeline-tags">
                        {item.skillsMentioned.map((tag, tIdx) => (
                          <span key={tIdx} className="badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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

