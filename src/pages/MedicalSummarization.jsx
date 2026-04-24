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

const summaryTypes = [
  { icon: '⚖️', title: 'Legal Case Summaries', desc: 'Comprehensive medical chronologies for personal injury, workers\' comp, and malpractice cases — organized for attorney review.' },
  { icon: '🛡️', title: 'Insurance Summaries', desc: 'Clear, concise summaries for claims adjusters highlighting diagnoses, treatments, and causation factors.' },
  { icon: '🔍', title: 'Medical Chronologies', desc: 'Detailed timeline of all medical events, treatments, and outcomes organized chronologically for easy review.' },
  { icon: '📊', title: 'Narrative Summaries', desc: 'Expert narrative summaries explaining complex medical conditions in clear, accessible language.' },
  { icon: '💊', title: 'Medication Reviews', desc: 'Complete medication history analysis identifying treatment patterns, interactions, and compliance issues.' },
  { icon: '🎯', title: 'Demand Package Support', desc: 'Tailored medical summaries designed to support settlement demands with organized, compelling documentation.' },
]

export default function MedicalSummarization() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg,#7c2d12,#ea580c,#fb923c)', paddingTop: 140, paddingBottom: 96, textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag-light">Medical Records Summarization</span>
          <h1 className="section-title-white" style={{ maxWidth: 700, margin: '0 auto 20px' }}>Transform Thousands of Pages Into Clear, Actionable Summaries</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.75 }}>
            Save 20+ hours per case. Our medical summarization experts convert complex medical records into concise, organized summaries for legal and insurance professionals.
          </p>
          <Link to="/contact" className="btn-primary">Request a Summary</Link>
        </div>
      </section>

      {/* Time savings highlight */}
      <section style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 20px 60px rgba(0,0,0,0.1)', padding: '40px 48px', marginTop: -48, position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
            {[['20+hrs', 'Saved Per Case', '#ea580c'], ['48hr', 'Turnaround', '#1a56db'], ['99%', 'Accuracy Rate', '#059669'], ['HIPAA', 'Compliant', '#7c3aed']].map(([num, label, color], i) => (
              <div key={i}>
                <div style={{ fontSize: 32, fontWeight: 800, color }}>{num}</div>
                <div style={{ fontSize: 14, color: '#6b7280', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Summary Types</span>
              <h2 className="section-title">What We Summarize</h2>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {summaryTypes.map((s, i) => (
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
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title">Built for Legal & Insurance Professionals</h2>
              <div className="gradient-line" />
              <p className="section-sub" style={{ marginBottom: 28 }}>Our summarization team combines medical expertise with legal knowledge to produce summaries that are not just accurate — but strategically useful for your cases.</p>
              {[
                'Registered Nurse (RN) reviewed summaries',
                'Formatted to your firm\'s specifications',
                'Chronological and body-system organization options',
                'Highlighted causation and pre-existing conditions',
                'Secure portal delivery with revision rounds included',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#ea580c', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>✓</div>
                  <span style={{ color: '#374151', fontSize: 15 }}>{item}</span>
                </div>
              ))}
              <Link to="/contact" className="btn-secondary" style={{ marginTop: 16 }}>Get a Free Sample Summary</Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ background: 'linear-gradient(135deg,#7c2d12,#ea580c)', borderRadius: 24, padding: 40, color: 'white' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>📝</div>
                <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 20 }}>What's Included in Every Summary</h3>
                {['Complete medical history overview', 'Diagnosis timeline & progression', 'Treatment & procedure details', 'Provider & facility listing', 'Medication history & dosages', 'Future medical needs assessment'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                    <span style={{ color: '#fbbf24', fontSize: 16 }}>✦</span>
                    <span style={{ fontSize: 14, opacity: 0.92 }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg,#7c2d12,#ea580c)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title-white">Ready to Save 20+ Hours Per Case?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>Request a free sample summary and see the U-CGS quality difference for yourself.</p>
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