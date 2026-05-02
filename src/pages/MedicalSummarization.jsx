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

const summaryTypes = [
  { icon: '⚖️', title: 'Legal Case Summaries', desc: 'Comprehensive medical chronologies for personal injury, workers\' comp, and malpractice cases — organized for attorney review.' },
  { icon: '🛡️', title: 'Insurance Summaries', desc: 'Clear, concise summaries for claims adjusters highlighting diagnoses, treatments, and causation factors.' },
  { icon: '🔍', title: 'Medical Chronologies', desc: 'Detailed timeline of all medical events, treatments, and outcomes organized chronologically for easy review.' },
  { icon: '📊', title: 'Narrative Summaries', desc: 'Expert narrative summaries explaining complex medical conditions in clear, accessible language.' },
  { icon: '💊', title: 'Medication Reviews', desc: 'Complete medication history analysis identifying treatment patterns, interactions, and compliance issues.' },
  { icon: '🎯', title: 'Demand Package Support', desc: 'Tailored medical summaries designed to support settlement demands with organized, compelling documentation.' },
]

const included = [
  'Complete medical history overview',
  'Diagnosis timeline & progression',
  'Treatment & procedure details',
  'Provider & facility listing',
  'Medication history & dosages',
  'Future medical needs assessment',
]

const checkpoints = [
  'Registered Nurse (RN) reviewed summaries',
  'Formatted to your firm\'s specifications',
  'Chronological and body-system organization options',
  'Highlighted causation and pre-existing conditions',
  'Secure portal delivery with revision rounds included',
]

export default function MedicalSummarization() {
  return (
    <div>
      <style>{`
        .ms-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .ms-who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .ms-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .ms-included { order: -1; }
          .ms-who-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .ms-who-img { order: -1; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--gradient-primary)', paddingTop: 140, paddingBottom: 80, textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag-light">Medical Records Summarization</span>
          <h1 className="section-title-white" style={{ maxWidth: 700, margin: '16px auto 20px' }}>
            Transform Thousands of Pages Into Clear, Actionable Summaries
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.75 }}>
            Save 20+ hours per case. Our medical summarization experts convert complex medical records into concise, organized summaries for legal and insurance professionals.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Request a Summary</Link>
            <Link to="/contact" className="btn-outline-white">Get Free Sample</Link>
          </div>
        </div>
      </section>

      {/* TIME SAVINGS STATS — overlap-safe */}
      <section className="section-with-lifted-card" style={{ background: 'white' }}>
        <div className="container">
          <div className="lifted-stats-card" style={{
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            padding: '28px 36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: 20,
            textAlign: 'center',
            border: '1px solid var(--border)'
          }}>
            {[
              { num: '20+hrs', label: 'Saved Per Case', color: 'var(--primary)' },
              { num: '48hr', label: 'Turnaround', color: 'var(--primary-dark)' },
              { num: '99%', label: 'Accuracy Rate', color: '#15803d' },
              { num: 'HIPAA', label: 'Compliant', color: 'var(--accent-dark)' },
            ].map(({ num, label, color }, i) => (
              <div key={i}>
                <div style={{ fontSize: 26, fontWeight: 800, color }}>{num}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY TYPES */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Summary Types</span>
              <h2 className="section-title">What We Summarize</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Every summary type is purpose-built for the audience who'll use it — attorneys, adjusters, or clinicians.
              </p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {summaryTypes.map((s, i) => (
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

      {/* WHY CHOOSE + INCLUDED */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="ms-detail-grid">
            <FadeIn>
              <div>
                <span className="section-tag">Why Choose Us</span>
                <h2 className="section-title">Built for Legal & Insurance Professionals</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 28 }}>
                  Our summarization team combines medical expertise with legal knowledge to produce summaries that are not just accurate — but strategically useful for your cases.
                </p>
                {checkpoints.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</div>
                    <span style={{ color: 'var(--text-main)', fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
                <Link to="/contact" className="btn-secondary" style={{ marginTop: 20, display: 'inline-block' }}>
                  Get a Free Sample Summary
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="ms-included" style={{ background: 'var(--gradient-primary)', borderRadius: 24, padding: '36px 32px', color: 'white' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>📝</div>
                <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 24 }}>What's Included in Every Summary</h3>
                {included.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: i < included.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                    <span style={{ color: 'var(--warning)', fontSize: 16, flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: 14, opacity: 0.92 }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div className="ms-who-grid">
            <FadeIn>
              <div className="ms-who-img">
                <div style={{ background: 'white', borderRadius: 20, padding: '32px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-soft)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 16, marginBottom: 20 }}>⏱️ Time Saved Per Case Type</div>
                  {[
                    { type: 'Personal Injury', hours: '22 hrs', pct: 88 },
                    { type: 'Workers\' Comp', hours: '18 hrs', pct: 72 },
                    { type: 'Malpractice', hours: '30 hrs', pct: 100 },
                    { type: 'Insurance Claims', hours: '12 hrs', pct: 48 },
                  ].map(({ type, hours, pct }, i) => (
                    <div key={i} style={{ marginBottom: 18 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span style={{ fontSize: 14, color: 'var(--text-main)', fontWeight: 500 }}>{type}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary)' }}>{hours} saved</span>
                      </div>
                      <div style={{ height: 8, background: 'var(--light-2)', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: 'var(--gradient-button)', borderRadius: 4 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <span className="section-tag">Who We Serve</span>
                <h2 className="section-title">Trusted by Legal & Insurance Teams</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 28 }}>
                  From solo practitioners to large insurance carriers, our summarization services scale to meet your volume and turnaround needs.
                </p>
                {[
                  { icon: '⚖️', title: 'Personal Injury Attorneys', desc: 'Organize years of medical records into clean chronologies for faster settlements.' },
                  { icon: '🏛️', title: 'Workers\' Comp Firms', desc: 'Identify causation links and treatment timelines that support your client\'s claim.' },
                  { icon: '🛡️', title: 'Insurance Carriers & TPAs', desc: 'Review claim validity faster with focused summaries from our RN-reviewed team.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 22, alignItems: 'flex-start' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--light-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0, border: '1px solid var(--border)' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 4, fontSize: 15 }}>{item.title}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
                <Link to="/contact" className="btn-primary" style={{ display: 'inline-block' }}>Talk to an Expert</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <section style={{ background: 'white', paddingTop: 48, paddingBottom: 64 }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {[
                { icon: '👩‍⚕️', text: 'RN-Reviewed Summaries' },
                { icon: '🔒', text: 'HIPAA Compliant' },
                { icon: '🏅', text: 'ISO 27001:2013' },
                { icon: '🔄', text: 'Revision Rounds Included' },
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--light-2)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 20px' }}>
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
            <h2 className="section-title-white">Ready to Save 20+ Hours Per Case?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>
              Request a free sample summary and see the U-CGS quality difference for yourself.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Request Free Sample</Link>
              <Link to="/contact" className="btn-outline-white">Talk to an Expert</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}