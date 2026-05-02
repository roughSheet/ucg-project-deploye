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
          .mc-why-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .mc-why-img { order: -1; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--gradient-primary)', paddingTop: 140, paddingBottom: 80, textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag-light">Medical Coding Services</span>
          <h1 className="section-title-white" style={{ maxWidth: 680, margin: '16px auto 20px' }}>
            Precise Coding. Maximum Reimbursement.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18, maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.75 }}>
            Our certified medical coders bring accuracy, compliance, and speed to every chart — reducing denials and improving your bottom line.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get a Coding Quote</Link>
            <Link to="/contact" className="btn-outline-white">Book Free Audit</Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS — lifted card, NO overlap using section-with-lifted-card */}
      <section className="section-with-lifted-card" style={{ background: 'white' }}>
        <div className="container">
          <div className="lifted-stats-card" style={{
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            padding: '28px 36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 20,
            textAlign: 'center',
            border: '1px solid var(--border)'
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
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'var(--light-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, marginBottom: 16, border: '1px solid var(--border)'
                  }}>{s.icon}</div>
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
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: 'var(--primary)', color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, flexShrink: 0, marginTop: 1
                    }}>✓</div>
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
                {/* Cert badge */}
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
                <span key={i} style={{
                  background: 'white', border: '1px solid var(--border)',
                  color: 'var(--primary-dark)', padding: '7px 16px',
                  borderRadius: 24, fontSize: 13, fontWeight: 500
                }}>{s}</span>
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