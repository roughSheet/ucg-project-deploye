import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = 1; el.style.transform = 'translateY(0)'; obs.unobserve(el) }
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

const services = [
  { icon: '🏥', title: 'Inpatient & Outpatient Coding', desc: 'Accurate ICD-10-CM, CPT, and HCPCS coding for all inpatient admissions and outpatient encounters.' },
  { icon: '⚕️', title: 'Physician & Pro-Fee Coding', desc: 'Specialty-specific professional fee coding for E&M, procedures, and diagnostic services.' },
  { icon: '🔄', title: 'HCC & Risk Adjustment', desc: 'Hierarchical Condition Category coding to ensure accurate risk scores and appropriate reimbursement.' },
  { icon: '📋', title: 'Coding Audits', desc: 'Prospective and retrospective coding audits identifying revenue leakage and compliance risks.' },
  { icon: '🎓', title: 'Coder Education', desc: 'Targeted training and feedback loops to elevate your in-house coding team\'s accuracy.' },
  { icon: '⚡', title: 'Denial Management', desc: 'Coding-related denial analysis and correction to recover refused claims quickly.' },
]

const metrics = [
  { num: '95%+', label: 'First-Pass Rate' },
  { num: '40+', label: 'Specialties Covered' },
  { num: '48hr', label: 'Avg Turnaround' },
  { num: '0%', label: 'Compliance Violations' },
]

const checkpoints = [
  '95%+ first-pass claim acceptance rate',
  'Specialty coding for 40+ medical disciplines',
  'HIPAA-compliant workflows and data handling',
  '24–48 hour average chart turnaround time',
  'Ongoing education on coding guideline updates',
]

export default function MedicalCoding() {
  return (
    <div>
      <style>{`
        @keyframes mcHeroIn  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mcImgIn   { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse     { 0%,100%{opacity:1} 50%{opacity:0.45} }

        .mc-hero-wrap {
          background: var(--gradient-primary);
          padding-top: 90px;
          overflow: hidden;
          position: relative;
        }
        .mc-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          padding: 44px 24px 0;
          position: relative; z-index: 1;
        }
        .mc-hero-text { order: 1; animation: mcHeroIn 0.8s ease forwards; }
        .mc-hero-img  { order: 2; position: relative; height: 420px; animation: mcImgIn 1s ease 0.3s both; }

        .mc-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .mc-metrics-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .mc-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 28px 16px 0 !important;
          }
          .mc-hero-text { order: 2 !important; }
          .mc-hero-img  { order: 1 !important; height: 220px !important; }
          .mc-hero-float { display: none !important; }
          .mc-why-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .mc-why-img { order: -1; }
        }
      `}</style>

      {/* ── HERO with image ── */}
      <section className="mc-hero-wrap">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container mc-hero-grid">

          {/* Image col */}
          <div className="mc-hero-img">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 36, bottom: 36, borderRadius: 22, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,0.4)' }}>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Medical coding professionals"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,28,44,0.6) 0%, transparent 60%)' }} />
            </div>
            {/* Float stat card */}
            <div className="mc-hero-float" style={{ position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: 14, padding: '16px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.22)', minWidth: 160 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--primary)' }}>95%+</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>First-Pass Rate</div>
              <div style={{ marginTop: 6, height: 4, background: 'var(--light-2)', borderRadius: 2 }}>
                <div style={{ height: '100%', width: '95%', background: 'var(--gradient-button)', borderRadius: 2 }} />
              </div>
            </div>
            {/* Float ISO card */}
          </div>

          {/* Text col */}
          <div className="mc-hero-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 24, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Medical Coding Services</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px,4.5vw,52px)', fontWeight: 800, color: 'white', lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.5px' }}>
              Precise Coding.<br />Maximum<br />
              <span style={{ color: 'var(--primary-light)' }}>Reimbursement.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
              Our certified medical coders bring accuracy, compliance, and speed to every chart — reducing denials and improving your bottom line.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link to="/contact" className="btn-primary">Get a Coding Quote</Link>
              <Link to="/contact" style={{ border: '2px solid rgba(255,255,255,0.55)', color: 'white', padding: '11px 26px', borderRadius: 8, fontWeight: 600, fontSize: 15, display: 'inline-block', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                Book Free Audit
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {['🏅 ISO 27001:2013', '🔒 HIPAA Compliant', '⚕️ CPC · CCS Certified'].map((b, i) => (
                <span key={i} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: 60 }} />
      </section>

      {/* QUICK STATS */}
      <section className="section-with-lifted-card" style={{ background: 'white' }}>
        <div className="container">
          <div className="lifted-stats-card" style={{
            background: 'white', borderRadius: 20,
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            padding: '28px 36px',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 20, textAlign: 'center', border: '1px solid var(--border)'
          }}>
            {metrics.map(({ num, label }, i) => (
              <div key={i}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--primary)' }}>{num}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Our Coding Services</span>
              <h2 className="section-title">End-to-End Medical Coding Solutions</h2>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--light-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 16, border: '1px solid var(--border)' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10, fontSize: 16 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY U-CGS */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="mc-why-grid">
            <FadeIn>
              <div>
                <span className="section-tag">Why U-CGS Coding</span>
                <h2 className="section-title">Certified Coders Who Deliver Results</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 28 }}>
                  Our team of CPC, CCS, and CRC certified coders brings specialty expertise across 40+ medical specialties, ensuring every claim is coded with precision.
                </p>
                {checkpoints.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</div>
                    <span style={{ color: 'var(--text-main)', fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
                <Link to="/contact" className="btn-secondary" style={{ marginTop: 20, display: 'inline-block' }}>
                  Start Coding Partnership
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mc-why-img">
                <div className="mc-metrics-inner">
                  {[
                    { num: '95%+', label: 'First-Pass Rate', bg: 'var(--light-2)', border: 'var(--border)', color: 'var(--primary)' },
                    { num: '40+', label: 'Specialties', bg: 'var(--light-2)', border: 'var(--border)', color: 'var(--primary-dark)' },
                    { num: '48hr', label: 'Turnaround', bg: '#fffbeb', border: '#fde68a', color: '#b45309' },
                    { num: '0%', label: 'Compliance Gaps', bg: '#f0fdf4', border: '#bbf7d0', color: '#15803d' },
                  ].map(({ num, label, bg, border, color }, i) => (
                    <div key={i} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
                      <div style={{ fontWeight: 800, color, fontSize: 30 }}>{num}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'var(--gradient-primary)', borderRadius: 16, padding: '24px 28px', color: 'white', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ fontSize: 40 }}>🏅</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>ISO 27001:2013 Certified</div>
                    <div style={{ fontSize: 13, opacity: 0.8 }}>HIPAA-compliant coding workflows with zero tolerance for data breaches.</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section style={{ background: 'var(--light-2)', paddingTop: 48, paddingBottom: 48 }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <span className="section-tag">40+ Specialties</span>
              <h3 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 20 }}>We Code Across All Disciplines</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {['Cardiology', 'Orthopedics', 'Neurology', 'Oncology', 'Radiology', 'Emergency Medicine',
                'Internal Medicine', 'Pediatrics', 'OB/GYN', 'Psychiatry', 'Pulmonology', 'Gastroenterology',
                'Dermatology', 'Ophthalmology', 'Urology', 'Endocrinology'].map((s, i) => (
                <span key={i} style={{ background: 'white', border: '1px solid var(--border)', color: 'var(--primary-dark)', padding: '7px 16px', borderRadius: 24, fontSize: 13, fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gradient-primary)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title-white">Reduce Denials. Increase Revenue.</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
              Partner with U-CGS and experience the difference expert coding makes on your practice's financial health.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Book Free Coding Audit</Link>
              <Link to="/contact" className="btn-outline-white">Talk to a Coder</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}