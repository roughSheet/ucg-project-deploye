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

const rcmServices = [
  { icon: '✅', title: 'Eligibility Verification', desc: 'Real-time insurance eligibility checks before every patient encounter to eliminate surprise denials.' },
  { icon: '📋', title: 'Claims Submission', desc: 'Clean claim submission with scrubbing technology to achieve maximum first-pass acceptance rates.' },
  { icon: '🔄', title: 'Denial Management', desc: 'Systematic denial tracking, root cause analysis, and appeals process to recover every possible dollar.' },
  { icon: '💳', title: 'Payment Posting', desc: 'Accurate and timely ERA/EOB posting with variance analysis and payer reconciliation.' },
  { icon: '📞', title: 'AR Follow-Up', desc: 'Aggressive yet professional AR follow-up on all outstanding claims, prioritized by age and value.' },
  { icon: '📊', title: 'Reporting & Analytics', desc: 'Customizable dashboards showing KPIs, payer performance, denial trends, and collection metrics.' },
]

export default function RevenueCycle() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#064e3b,#059669,#34d399)', paddingTop: 140, paddingBottom: 96 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="section-tag-light">Revenue Cycle Management</span>
              <h1 className="section-title-white">Maximize Collections. Minimize Denials.</h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
                U-CGS delivers end-to-end RCM solutions that streamline your billing operations, reduce denial rates, and accelerate cash flow for healthcare practices of all sizes.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Optimize My Revenue</Link>
                <Link to="/contact" className="btn-outline-white">Free RCM Assessment</Link>
              </div>
            </div>
            <FadeIn delay={0.2}>
              <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', borderRadius: 24, padding: 36, border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 24 }}>💡 Average Client Results</div>
                {[
                  ['Collection Rate Improvement', '+18%'],
                  ['Denial Rate Reduction', '-35%'],
                  ['Days in AR Reduction', '-12 days'],
                  ['Clean Claim Rate', '97%+'],
                ].map(([label, val], i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>{label}</span>
                    <span style={{ color: '#f59e0b', fontWeight: 800, fontSize: 20 }}>{val}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">RCM Services</span>
              <h2 className="section-title">Full-Cycle Revenue Management</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>From eligibility to collections, we handle every step of the revenue cycle.</p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {rcmServices.map((s, i) => (
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

      <section style={{ background: 'linear-gradient(135deg,#064e3b,#059669)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title-white">Stop Leaving Money on the Table</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>Get a free RCM assessment and find out how much revenue your practice could be recovering.</p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>Get Free Assessment</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}