import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  const getIssuerBadgeClass = (issuer) => {
    switch (issuer.toLowerCase()) {
      case 'isro':
        return 'badge-cyan';
      case 'nptel':
        return 'badge-indigo';
      case 'mongodb':
        return 'badge-green';
      case 'uipath academy':
        return 'badge-cyan';
      default:
        return '';
    }
  };

  return (
    <section id="certifications" className="section certifications-section" aria-label="Certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Continuous Learning</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Industry and academic certifications validating specialization in data engineering, algorithms, geospatial analysis, and automation.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card certification-card">
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  <ShieldCheck size={22} className="text-cyan" />
                </div>
                <span className={`badge ${getIssuerBadgeClass(cert.organization)}`}>
                  {cert.organization}
                </span>
              </div>

              <div className="cert-body">
                <span className="cert-category">{cert.category}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-description">{cert.description}</p>
              </div>

              <div className="cert-footer">
                <div className="cert-verification-status">
                  <CheckCircle size={15} className="text-cyan" />
                  <span>Verified Resume Credential</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

