import { useState, useEffect, useRef } from 'react'
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

const blogs = [
  {
    category: 'Record Retrieval', color: '#1a56db', bg: '#eff6ff',
    title: 'How Efficient Record Retrieval Transforms Legal Case Outcomes',
    excerpt: 'Discover how modern record retrieval services reduce turnaround times by 60% and improve case preparation accuracy for legal firms handling high-volume caseloads.',
    date: 'March 15, 2025', readTime: '5 min read', icon: '📋'
  },
  {
    category: 'Medical Coding', color: '#7c3aed', bg: '#f5f3ff',
    title: 'ICD-10 vs ICD-11: What Healthcare Providers Need to Know',
    excerpt: 'The transition to ICD-11 is coming. Learn how U-CGS helps healthcare providers navigate coding changes without disrupting revenue cycles or claim processing.',
    date: 'February 28, 2025', readTime: '7 min read', icon: '🏥'
  },
  {
    category: 'Revenue Cycle', color: '#059669', bg: '#ecfdf5',
    title: '5 Revenue Cycle Leaks Costing Your Practice Thousands',
    excerpt: 'From denied claims to delayed follow-ups, we identify the top RCM bottlenecks and show how systematic outsourcing can recover lost revenue.',
    date: 'February 10, 2025', readTime: '6 min read', icon: '💰'
  },
  {
    category: 'Compliance', color: '#dc2626', bg: '#fef2f2',
    title: 'HIPAA 2025: Updated Requirements Every Healthcare BPO Must Follow',
    excerpt: 'Stay compliant with the latest HIPAA updates. Our ISO 27001:2013 certified team breaks down what changed and what your outsourcing partner must do differently.',
    date: 'January 22, 2025', readTime: '8 min read', icon: '🔐'
  },
  {
    category: 'Summarization', color: '#d97706', bg: '#fffbeb',
    title: 'Medical Record Summarization: Why Attorneys Are Making the Switch',
    excerpt: 'Legal teams handling personal injury and workers\' comp cases are increasingly relying on professional medical record summarization to save 20+ hours per case.',
    date: 'January 8, 2025', readTime: '4 min read', icon: '📝'
  },
  {
    category: 'Industry Insights', color: '#0f172a', bg: '#f8fafc',
    title: 'The Future of Healthcare BPO: Trends to Watch in 2025',
    excerpt: 'AI-assisted coding, real-time eligibility checks, and offshore-onshore hybrid models — we explore the trends reshaping healthcare outsourcing this year.',
    date: 'December 18, 2024', readTime: '9 min read', icon: '🔭'
  },
]

const categories = ['All', 'Record Retrieval', 'Medical Coding', 'Revenue Cycle', 'Compliance', 'Summarization', 'Industry Insights']

export default function Blogs() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active)

  return (
    <div>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)', paddingTop: 140, paddingBottom: 80, textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag-amber">Insights & Resources</span>
          <h1 className="section-title-white" style={{ maxWidth: 600, margin: '0 auto 16px' }}>Knowledge Hub</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, maxWidth: 540, margin: '0 auto' }}>
            Expert insights on healthcare outsourcing, medical coding, revenue cycle management, and industry best practices.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section style={{ paddingTop: 48, paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: '8px 20px', borderRadius: 24, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                background: active === cat ? '#1a56db' : 'white',
                color: active === cat ? 'white' : '#374151',
                border: active === cat ? '2px solid #1a56db' : '2px solid #e5e7eb',
                transition: 'all 0.2s'
              }}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28 }}>
            {filtered.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.07}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Card top color bar */}
                  <div style={{ background: b.bg, borderRadius: 12, padding: '28px 24px', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 40 }}>{b.icon}</span>
                    <span style={{ background: b.color, color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20, letterSpacing: 0.5 }}>{b.category}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 17, lineHeight: 1.45, marginBottom: 12, flex: 1 }}>{b.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{b.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: 16 }}>
                    <div style={{ fontSize: 12, color: '#9ca3af' }}>{b.date} · {b.readTime}</div>
                    <span style={{ color: b.color, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Read More →</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: 'linear-gradient(135deg,#1a56db,#3b82f6)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <span className="section-tag-light">Newsletter</span>
            <h2 className="section-title-white" style={{ marginBottom: 12 }}>Stay Ahead in Healthcare BPO</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
              Get monthly insights on medical coding updates, RCM best practices, and compliance changes delivered to your inbox.
            </p>
            <div style={{ display: 'flex', gap: 12, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="Enter your email..."
                style={{ flex: 1, minWidth: 220, padding: '13px 18px', borderRadius: 8, border: 'none', fontSize: 15, outline: 'none' }}
              />
              <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}