import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = 1
        el.style.transform = 'translateY(0)'
        obs.unobserve(el)
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(28px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const features = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Industry-leading turnaround times with real-time status tracking and proactive communication at every step.' },
  { icon: '🔒', title: 'HIPAA Compliant', desc: 'Every retrieval follows strict HIPAA guidelines with encrypted transmission and secure storage protocols.' },
  { icon: '📊', title: 'High Accuracy', desc: '99.9% accuracy rate on all retrieved records with multi-level quality checks before delivery.' },
  { icon: '🌐', title: 'Multi-Source Retrieval', desc: 'We retrieve from hospitals, clinics, physicians, government agencies, and any medical provider nationwide.' },
  { icon: '💻', title: 'Digital Delivery', desc: 'Secure online portal access to all retrieved records with easy download, organization, and sharing tools.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'Assigned account managers who know your case requirements and ensure personalized service every time.' },
]

const process = [
  { step: '01', title: 'Request Submission', desc: 'Submit your record retrieval request through our secure portal or directly via email with patient authorization.' },
  { step: '02', title: 'Authorization Handling', desc: 'Our team handles all authorization paperwork, follow-ups, and communications with healthcare providers.' },
  { step: '03', title: 'Record Collection', desc: 'We contact providers, follow up persistently, and collect complete records within the agreed timeframe.' },
  { step: '04', title: 'Quality Review', desc: 'All records are reviewed for completeness and accuracy before delivery to ensure nothing is missing.' },
  { step: '05', title: 'Secure Delivery', desc: 'Records are delivered via our secure encrypted portal with notification and organized file structure.' },
]

const whoWeServe = [
  { icon: '⚖️', title: 'Law Firms', desc: 'Personal injury, workers\' comp, malpractice — we retrieve for all case types with litigation-ready organization.' },
  { icon: '🛡️', title: 'Insurance Companies', desc: 'Claims processing, underwriting, and SIU investigations with fast, verified record delivery.' },
  { icon: '🏥', title: 'Healthcare Providers', desc: 'Continuity of care requests, referrals, and patient record management across multi-facility systems.' },
]

const stats = [
  { icon: '📋', num: '50K+', label: 'Records Retrieved' },
  { icon: '⚡', num: '48hr', label: 'Avg Turnaround' },
  { icon: '✅', num: '99.9%', label: 'Accuracy Rate' },
  { icon: '🏢', num: '200+', label: 'Provider Network' },
]

export default function RecordRetrieval() {
  return (
    <div>
      <style>{`
        /* ── Record Retrieval Page ── */
        .rr-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .rr-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .rr-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .rr-process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 24px;
        }
        .rr-serve-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        @media (max-width: 768px) {
          .rr-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .rr-hero-img { order: -1; }
          .rr-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .rr-process-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .rr-process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--gradient-primary)', paddingTop: 140, paddingBottom: 96 }}>
        <div className="container">
          <div className="rr-hero-grid">

            {/* Text */}
            <div>
              <span className="section-tag-amber">Record Retrieval Services</span>
              <h1 className="section-title-white" style={{ marginTop: 8 }}>
                Fast, Accurate Medical Record Retrieval
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
                U-CGS provides comprehensive record retrieval services for legal firms, insurance companies, and healthcare organizations — with unmatched speed, accuracy, and security.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Request Records</Link>
                <Link to="/contact" className="btn-outline-white">Schedule a Call</Link>
              </div>
            </div>

            {/* Stats cards */}
            <FadeIn delay={0.2}>
              <div className="rr-hero-img rr-stats-grid">
                {stats.map(({ icon, num, label }, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 16,
                    padding: 24,
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.15)'
                  }}>
                    <div style={{ fontSize: 28 }}>{icon}</div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: 'white', margin: '8px 0 4px' }}>{num}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">What We Offer</span>
              <h2 className="section-title">Why Our Record Retrieval Stands Out</h2>
            </FadeIn>
          </div>
          <div className="rr-features-grid">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: 'rgba(var(--primary-rgb, 37,99,235),0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, marginBottom: 18,
                    border: '1px solid rgba(var(--primary-rgb, 37,99,235),0.12)'
                  }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10, fontSize: 16 }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Our Process</span>
              <h2 className="section-title">How It Works</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                A streamlined 5-step process designed for maximum efficiency and transparency.
              </p>
            </FadeIn>
          </div>
          <div className="rr-process-grid">
            {process.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  textAlign: 'center', padding: '32px 24px',
                  background: 'white', borderRadius: 16,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'var(--gradient-button)',
                    color: 'white', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 16,
                    margin: '0 auto 20px',
                    boxShadow: '0 4px 16px rgba(var(--primary-rgb,37,99,235),0.3)'
                  }}>{p.step}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10, fontSize: 15 }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <FadeIn>
              <span className="section-tag">Industries Served</span>
              <h2 className="section-title">Who We Serve</h2>
            </FadeIn>
          </div>
          <div className="rr-serve-grid">
            {whoWeServe.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ background: 'white', paddingTop: 48, paddingBottom: 48 }}>
        <div className="container">
          <FadeIn>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 20
            }}>
              {[
                { icon: '🏅', text: 'ISO 27001:2013 Certified' },
                { icon: '🔒', text: 'HIPAA Compliant' },
                { icon: '🇺🇸', text: 'US-Based & Offshore Teams' },
                { icon: '⚡', text: '48hr Average Turnaround' },
              ].map((b, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: 'var(--light-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 12, padding: '14px 20px'
                }}>
                  <span style={{ fontSize: 22 }}>{b.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary-dark)' }}>{b.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gradient-primary)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title-white">Ready to Streamline Your Record Retrieval?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36, fontSize: 17, maxWidth: 500, margin: '0 auto 36px' }}>
              Contact us today for a free consultation and discover how U-CGS can reduce your retrieval time by up to 60%.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>Get Started Today</Link>
              <Link to="/contact" className="btn-outline-white">Talk to an Expert</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}