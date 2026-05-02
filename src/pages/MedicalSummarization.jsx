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
        @keyframes msHeroIn { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes msImgIn  { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:0.45} }

        .ms-hero-wrap {
          background: var(--gradient-primary);
          padding-top: 90px;
          overflow: hidden;
          position: relative;
        }
        .ms-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          padding: 44px 24px 0;
          position: relative; z-index: 1;
        }
        .ms-hero-text { order: 1; animation: msHeroIn 0.8s ease forwards; }
        .ms-hero-img  { order: 2; position: relative; height: 420px; animation: msImgIn 1s ease 0.3s both; }

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
          .ms-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 28px 16px 0 !important;
          }
          .ms-hero-text { order: 2 !important; }
          .ms-hero-img  { order: 1 !important; height: 220px !important; }
          .ms-hero-float { display: none !important; }
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

      {/* ── HERO with image ── */}
      <section className="ms-hero-wrap">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container ms-hero-grid">

          {/* Image col */}
          <div className="ms-hero-img">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 36, bottom: 36, borderRadius: 22, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,0.4)' }}>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Medical records summarization"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,28,44,0.6) 0%, transparent 60%)' }} />
            </div>
            {/* Float time savings card */}
            <div className="ms-hero-float" style={{ position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: 14, padding: '16px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.22)', minWidth: 170 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--primary)' }}>20+ hrs</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Saved Per Case</div>
              <div style={{ marginTop: 8, display: 'flex', gap: 3 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 11 }}>★</span>)}
              </div>
            </div>
          </div>

          {/* Text col */}
          <div className="ms-hero-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 24, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--primary-light)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Medical Records Summarization</span>
            </div>
            <h1 style={{ fontSize: 'clamp(26px,4vw,50px)', fontWeight: 800, color: 'white', lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.5px' }}>
              Thousands of Pages Into<br />
              <span style={{ color: 'var(--primary-light)' }}>Clear, Actionable</span><br />
              Summaries
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
              Save 20+ hours per case. Our medical summarization experts convert complex records into concise, organized summaries for legal and insurance professionals.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link to="/contact" className="btn-primary">Request a Summary</Link>
              <Link to="/contact" style={{ border: '2px solid rgba(255,255,255,0.55)', color: 'white', padding: '11px 26px', borderRadius: 8, fontWeight: 600, fontSize: 15, display: 'inline-block', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                Get Free Sample
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {['👩‍⚕️ RN Reviewed', '🔒 HIPAA Compliant', '🏅 ISO 27001:2013'].map((b, i) => (
                <span key={i} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: 60 }} />
      </section>

      {/* TIME SAVINGS STATS */}
      <section className="section-with-lifted-card" style={{ background: 'white' }}>
        <div className="container">
          <div className="lifted-stats-card" style={{
            background: 'white', borderRadius: 20,
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            padding: '28px 36px',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: 20, textAlign: 'center', border: '1px solid var(--border)'
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