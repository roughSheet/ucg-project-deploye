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
  return <div ref={ref} style={{ opacity: 0, transform: 'translateY(28px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>{children}</div>
}

const services = [
  { icon: '🏥', title: 'Inpatient & Outpatient Coding', desc: 'Accurate ICD-10-CM, CPT, and HCPCS coding for all inpatient admissions and outpatient encounters.' },
  { icon: '⚕️', title: 'Physician & Pro-Fee Coding', desc: 'Specialty-specific professional fee coding for E&M, procedures, and diagnostic services.' },
  { icon: '🔄', title: 'HCC & Risk Adjustment', desc: 'Hierarchical Condition Category coding to ensure accurate risk scores and appropriate reimbursement.' },
  { icon: '📋', title: 'Coding Audits', desc: 'Prospective and retrospective coding audits identifying revenue leakage and compliance risks.' },
  { icon: '🎓', title: 'Coder Education', desc: 'Targeted training and feedback loops to elevate your in-house coding team\'s accuracy.' },
  { icon: '⚡', title: 'Denial Management', desc: 'Coding-related denial analysis and correction to recover refused claims quickly.' },
]

export default function MedicalCoding() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#4c1d95,#7c3aed,#8b5cf6)', paddingTop: 140, paddingBottom: 96, textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag-light">Medical Coding Services</span>
          <h1 className="section-title-white" style={{ maxWidth: 680, margin: '0 auto 20px' }}>Precise Coding. Maximum Reimbursement.</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18, maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.75 }}>
            Our certified medical coders bring accuracy, compliance, and speed to every chart — reducing denials and improving your bottom line.
          </p>
          <Link to="/contact" className="btn-primary">Get a Coding Quote</Link>
        </div>
      </section>

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
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', marginBottom: 10, fontSize: 16 }}>{s.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeIn>
              <span className="section-tag">Why U-CGS Coding</span>
              <h2 className="section-title">Certified Coders Who Deliver Results</h2>
              <div className="gradient-line" />
              <p className="section-sub" style={{ marginBottom: 28 }}>Our team of CPC, CCS, and CRC certified coders brings specialty expertise across 40+ medical specialties, ensuring every claim is coded with precision.</p>
              {[
                '95%+ first-pass claim acceptance rate',
                'Specialty coding for 40+ medical disciplines',
                'HIPAA-compliant workflows and data handling',
                '24–48 hour average chart turnaround time',
                'Ongoing education on coding guideline updates',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#7c3aed', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>✓</div>
                  <span style={{ color: '#374151', fontSize: 15 }}>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn-secondary" style={{ marginTop: 12 }}>Start Coding Partnership</Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ display: 'grid', gap: 20 }}>
                {[['95%+', 'First-Pass Rate', '#7c3aed'], ['40+', 'Specialties Covered', '#1a56db'], ['48hr', 'Avg Turnaround', '#f59e0b'], ['0%', 'Compliance Violations', '#10b981']].map(([num, label, color], i) => (
                  <div key={i} style={{ background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 14, padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#0f172a', fontSize: 16 }}>{label}</span>
                    <span style={{ fontWeight: 800, color, fontSize: 28 }}>{num}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg,#4c1d95,#7c3aed)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title-white">Reduce Denials. Increase Revenue.</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>Partner with U-CGS and experience the difference expert coding makes on your practice's financial health.</p>
            <Link to="/contact" className="btn-primary">Book Free Coding Audit</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}