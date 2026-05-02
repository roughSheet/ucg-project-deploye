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

const rcmServices = [
  { icon: '✅', title: 'Eligibility Verification', desc: 'Real-time insurance eligibility checks before every patient encounter to eliminate surprise denials.' },
  { icon: '📋', title: 'Claims Submission', desc: 'Clean claim submission with scrubbing technology to achieve maximum first-pass acceptance rates.' },
  { icon: '🔄', title: 'Denial Management', desc: 'Systematic denial tracking, root cause analysis, and appeals process to recover every possible dollar.' },
  { icon: '💳', title: 'Payment Posting', desc: 'Accurate and timely ERA/EOB posting with variance analysis and payer reconciliation.' },
  { icon: '📞', title: 'AR Follow-Up', desc: 'Aggressive yet professional AR follow-up on all outstanding claims, prioritized by age and value.' },
  { icon: '📊', title: 'Reporting & Analytics', desc: 'Customizable dashboards showing KPIs, payer performance, denial trends, and collection metrics.' },
]

const results = [
  { label: 'Collection Rate Improvement', val: '+18%' },
  { label: 'Denial Rate Reduction', val: '-35%' },
  { label: 'Days in AR Reduction', val: '-12 days' },
  { label: 'Clean Claim Rate', val: '97%+' },
]

const whyItems = [
  { icon: '🎯', title: 'Root Cause Analysis', desc: 'We don\'t just fix denials — we eliminate the root cause so they don\'t recur.' },
  { icon: '📈', title: 'Performance Reporting', desc: 'Monthly reports with KPIs, payer trends, and collection benchmarks tailored to your practice.' },
  { icon: '⚡', title: 'Fast Onboarding', desc: 'Risk-free transition with a dedicated onboarding team. Be live in 2–3 weeks.' },
  { icon: '🔒', title: 'Full Compliance', desc: 'ISO 27001:2013 certified and HIPAA compliant across every workflow and data touchpoint.' },
]

export default function RevenueCycle() {
  return (
    <div>
      <style>{`
        /* ── Revenue Cycle Page ── */
        .rcm-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .rcm-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .rcm-why-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .rcm-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .rcm-hero-results { order: -1; }

          .rcm-why-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .rcm-why-img { order: -1; }

          .rcm-why-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--gradient-primary)', paddingTop: 140, paddingBottom: 96 }}>
        <div className="container">
          <div className="rcm-hero-grid">

            {/* Text */}
            <div>
              <span className="section-tag-light">Revenue Cycle Management</span>
              <h1 className="section-title-white" style={{ marginTop: 8 }}>
                Maximize Collections. Minimize Denials.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
                U-CGS delivers end-to-end RCM solutions that streamline your billing operations, reduce denial rates, and accelerate cash flow for healthcare practices of all sizes.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Optimize My Revenue</Link>
                <Link to="/contact" className="btn-outline-white">Free RCM Assessment</Link>
              </div>
            </div>

            {/* Results card — appears above text on mobile */}
            <FadeIn delay={0.2}>
              <div className="rcm-hero-results" style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 24,
                padding: 36,
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 24 }}>
                  💡 Average Client Results
                </div>
                {results.map(({ label, val }, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '14px 0',
                    borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none'
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>{label}</span>
                    <span style={{ color: 'var(--warning)', fontWeight: 800, fontSize: 20 }}>{val}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">RCM Services</span>
              <h2 className="section-title">Full-Cycle Revenue Management</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                From eligibility to collections, we handle every step of the revenue cycle.
              </p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {rcmServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'var(--light-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, marginBottom: 16,
                    border: '1px solid var(--border)'
                  }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10, fontSize: 16 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — image above on mobile */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="rcm-why-grid">

            {/* Text + cards */}
            <FadeIn>
              <div>
                <span className="section-tag">Why U-CGS RCM</span>
                <h2 className="section-title">Built to Recover Every Dollar</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 28 }}>
                  Our RCM specialists become an extension of your team — proactive, transparent, and relentless in recovering what you're owed.
                </p>
                <div className="rcm-why-cards">
                  {whyItems.map((w, i) => (
                    <div key={i} style={{
                      padding: '18px',
                      background: 'var(--light-2)',
                      borderRadius: 12,
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{ fontSize: 22, marginBottom: 8 }}>{w.icon}</div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 14, marginBottom: 6 }}>{w.title}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.55 }}>{w.desc}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary" style={{ marginTop: 28, display: 'inline-block' }}>
                  Get Free Assessment
                </Link>
              </div>
            </FadeIn>

            {/* Visual — appears above text on mobile */}
            <FadeIn delay={0.2}>
              <div className="rcm-why-img">
                {/* Revenue cycle visual card */}
                <div style={{
                  background: 'var(--gradient-primary)',
                  borderRadius: 20,
                  padding: '32px',
                  color: 'white',
                  marginBottom: 20
                }}>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 20, opacity: 0.9 }}>RCM Cycle Coverage</div>
                  {[
                    { step: '01', label: 'Patient Registration & Eligibility' },
                    { step: '02', label: 'Charge Capture & Coding' },
                    { step: '03', label: 'Claims Submission' },
                    { step: '04', label: 'Payment Posting' },
                    { step: '05', label: 'Denial Management & AR Follow-Up' },
                    { step: '06', label: 'Reporting & Analytics' },
                  ].map(({ step, label }, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '10px 0',
                      borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.12)' : 'none'
                    }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, fontWeight: 700, flexShrink: 0
                      }}>{step}</div>
                      <span style={{ fontSize: 14, opacity: 0.9 }}>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Trust badge */}
                <div style={{
                  background: 'var(--light-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '18px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14
                }}>
                  <span style={{ fontSize: 32 }}>🏅</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 14 }}>ISO 27001:2013 Certified</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 2 }}>HIPAA-compliant RCM across all workflows</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--light-2)', paddingTop: 56, paddingBottom: 56 }}>
        <div className="container">
          <FadeIn>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 20,
              textAlign: 'center'
            }}>
              {[
                { num: '97%+', label: 'Clean Claim Rate', icon: '✅' },
                { num: '-35%', label: 'Denial Reduction', icon: '📉' },
                { num: '+18%', label: 'Collections Lift', icon: '📈' },
                { num: '500+', label: 'Clients Served', icon: '🤝' },
              ].map(({ num, label, icon }, i) => (
                <div key={i} style={{
                  background: 'white',
                  borderRadius: 14,
                  padding: '24px 16px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-soft)'
                }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--primary)' }}>{num}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{label}</div>
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
            <h2 className="section-title-white">Stop Leaving Money on the Table</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>
              Get a free RCM assessment and find out how much revenue your practice could be recovering.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>Get Free Assessment</Link>
              <Link to="/contact" className="btn-outline-white">Talk to an Expert</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}