import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setFeedbackMsg('');

    try {
      // Automatic transmission to Hari's inbox via Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: personal.web3formsKey || '4990d92c-c26f-47f4-a452-49173150c026',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Inquiry from ${formData.name}`,
          from_name: 'Hari Shankar Portfolio',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFeedbackMsg("✓ Message transmitted! Your message has been sent directly to Hari Shankar's inbox.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Transmission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setFeedbackMsg(`Unable to deliver message right now. Please try again or reach out directly to ${personal.email}.`);
    }
  };

  return (
    <section className="w-full bg-surface-container-low border-t border-outline-variant/60 py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-surface-container border border-outline-variant/80 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant w-fit font-mono text-xs text-primary uppercase">
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
                {/* Email */}
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
                  href={`mailto:${personal.email}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:border-primary/60 transition-colors">
                    <span className="material-symbols-outlined text-[17px]">mail</span>
                  </div>
                  <span>{personal.email}</span>
                </a>

                {/* Phone */}
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
                  href={`tel:+91${personal.phone}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:border-primary/60 transition-colors">
                    <span className="material-symbols-outlined text-[17px]">phone</span>
                  </div>
                  <span>+91 {personal.phone}</span>
                </a>

                {/* LinkedIn */}
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:border-primary/60 transition-colors">
                    <span className="material-symbols-outlined text-[17px]">link</span>
                  </div>
                  <span>{personal.linkedinDisplay}</span>
                </a>

                {/* GitHub */}
                <a
                  className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group"
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:border-primary/60 transition-colors">
                    <span className="material-symbols-outlined text-[17px]">code</span>
                  </div>
                  <span>{personal.githubDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Message Card (5 cols) */}
            <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/60 p-6 sm:p-8 rounded-xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                  Direct Message
                </span>
                <span className="font-mono text-[10px] text-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Auto-routed to Inbox
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 flex flex-col gap-2 animate-fadeIn">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold">
                    <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
                    <span>Transmission Successful</span>
                  </div>
                  <p className="font-sans text-xs text-on-surface leading-relaxed">
                    {feedbackMsg}
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-[11px] font-mono text-primary underline text-left"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[11px] text-on-surface-variant" htmlFor="sender-name">
                      YOUR NAME
                    </label>
                    <input
                      className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-outline-variant/60 text-on-surface text-xs focus:outline-none focus:border-primary font-sans"
                      id="sender-name"
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
                      className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-outline-variant/60 text-on-surface text-xs focus:outline-none focus:border-primary font-sans"
                      id="sender-email"
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
                      className="w-full px-3.5 py-2 rounded-lg bg-surface-container border border-outline-variant/60 text-on-surface text-xs focus:outline-none focus:border-primary font-sans resize-none"
                      id="sender-msg"
                      placeholder="Let's connect regarding a project or opportunity..."
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    className="w-full mt-1 py-2.5 rounded-lg bg-primary text-white font-mono text-xs font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(16,185,129,0.25)] disabled:opacity-60"
                    type="submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                        <span>Transmitting to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[16px]">send</span>
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
