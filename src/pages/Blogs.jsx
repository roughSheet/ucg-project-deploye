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
    category: 'Record Retrieval',
    title: 'How Efficient Record Retrieval Transforms Legal Case Outcomes',
    excerpt: 'Discover how modern record retrieval services reduce turnaround times by 60% and improve case preparation accuracy for legal firms handling high-volume caseloads.',
    date: 'March 15, 2025', readTime: '5 min read', icon: '📋'
  },
  {
    category: 'Medical Coding',
    title: 'ICD-10 vs ICD-11: What Healthcare Providers Need to Know',
    excerpt: 'The transition to ICD-11 is coming. Learn how U-CGS helps healthcare providers navigate coding changes without disrupting revenue cycles or claim processing.',
    date: 'February 28, 2025', readTime: '7 min read', icon: '🏥'
  },
  {
    category: 'Revenue Cycle',
    title: '5 Revenue Cycle Leaks Costing Your Practice Thousands',
    excerpt: 'From denied claims to delayed follow-ups, we identify the top RCM bottlenecks and show how systematic outsourcing can recover lost revenue.',
    date: 'February 10, 2025', readTime: '6 min read', icon: '💰'
  },
  {
    category: 'Compliance',
    title: 'HIPAA 2025: Updated Requirements Every Healthcare BPO Must Follow',
    excerpt: 'Stay compliant with the latest HIPAA updates. Our ISO 27001:2013 certified team breaks down what changed and what your outsourcing partner must do differently.',
    date: 'January 22, 2025', readTime: '8 min read', icon: '🔐'
  },
  {
    category: 'Summarization',
    title: 'Medical Record Summarization: Why Attorneys Are Making the Switch',
    excerpt: 'Legal teams handling personal injury and workers\' comp cases are increasingly relying on professional medical record summarization to save 20+ hours per case.',
    date: 'January 8, 2025', readTime: '4 min read', icon: '📝'
  },
  {
    category: 'Industry Insights',
    title: 'The Future of Healthcare BPO: Trends to Watch in 2025',
    excerpt: 'AI-assisted coding, real-time eligibility checks, and offshore-onshore hybrid models — we explore the trends reshaping healthcare outsourcing this year.',
    date: 'December 18, 2024', readTime: '9 min read', icon: '🔭'
  },
]

const categories = ['All', 'Record Retrieval', 'Medical Coding', 'Revenue Cycle', 'Compliance', 'Summarization', 'Industry Insights']

export default function Blogs() {
  const [active, setActive] = useState('All')
  const [email, setEmail] = useState('')
  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active)

  return (
    <div>
      <style>{`
        @keyframes blogHeroIn { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blogImgIn  { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse      { 0%,100%{opacity:1} 50%{opacity:0.45} }

        .blog-hero-wrap {
          background: var(--gradient-primary);
          padding-top: 90px;
          overflow: hidden;
          position: relative;
        }
        .blog-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          padding: 44px 24px 0;
          position: relative; z-index: 1;
        }
        .blog-hero-text { order: 1; animation: blogHeroIn 0.8s ease forwards; }
        .blog-hero-img  { order: 2; position: relative; height: 400px; animation: blogImgIn 1s ease 0.3s both; }

        .blog-card {
          background: white;
          border-radius: 16px;
          border: 1px solid var(--border);
          box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .blog-cat-pill {
          display: inline-block;
          background: color-mix(in srgb, var(--primary) 12%, transparent);
          color: var(--primary);
          font-size: 11px; font-weight: 700;
          padding: 4px 12px; border-radius: 20px;
          letter-spacing: 0.5px; text-transform: uppercase;
        }

        .blog-filter-btn {
          padding: 8px 20px; border-radius: 24px; font-size: 14px;
          font-weight: 600; cursor: pointer; transition: all 0.2s;
          border: 2px solid var(--border);
          background: white; color: var(--text-main);
        }
        .blog-filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        .blog-filter-btn:hover:not(.active) {
          border-color: var(--primary);
          color: var(--primary);
        }

        .blog-newsletter-wrap {
          background: var(--gradient-primary);
          text-align: center;
        }

        .newsletter-input {
          flex: 1; min-width: 220px;
          padding: 13px 18px; border-radius: 8px;
          border: none; font-size: 15px; outline: none;
          font-family: inherit;
        }
        .newsletter-input:focus {
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 30%, transparent);
        }

        @media (max-width: 768px) {
          .blog-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 28px 16px 0 !important;
          }
          .blog-hero-text { order: 2 !important; }
          .blog-hero-img  { order: 1 !important; height: 220px !important; }
          .blog-hero-float { display: none !important; }
        }
      `}</style>

      {/* ── HERO with image ── */}
      <section className="blog-hero-wrap">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container blog-hero-grid">

          {/* Image col */}
          <div className="blog-hero-img">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 36, bottom: 36, borderRadius: 22, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,0.4)' }}>
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
                alt="Healthcare insights and knowledge"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,28,44,0.6) 0%, transparent 60%)' }} />
            </div>
            {/* Float articles badge */}
            <div className="blog-hero-float" style={{ position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: 14, padding: '16px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.22)', minWidth: 160 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--primary)' }}>6+</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Expert Articles</div>
              <div style={{ marginTop: 6, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['📋', '🏥', '💰'].map((ic, i) => (
                  <span key={i} style={{ fontSize: 14 }}>{ic}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Text col */}
          <div className="blog-hero-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fbbf24', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#fbbf24', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Insights & Resources</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px,4.5vw,52px)', fontWeight: 800, color: 'white', lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.5px' }}>
              Knowledge Hub<br />for Healthcare<br />
              <span style={{ color: 'var(--primary-light)' }}>Outsourcing</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
              Expert insights on healthcare outsourcing, medical coding, revenue cycle management, and industry best practices — curated for your growth.
            </p>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {['📋 Record Retrieval', '⚕️ Medical Coding', '💰 Revenue Cycle'].map((b, i) => (
                <span key={i} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: 60 }} />
      </section>

      {/* FILTER */}
      <section style={{ paddingTop: 48, paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`blog-filter-btn${active === cat ? ' active' : ''}`}
              >
                {cat}
              </button>
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
                <div className="blog-card">
                  {/* Card top — themed icon area */}
                  <div style={{
                    background: 'var(--light-2)',
                    padding: '28px 24px', marginBottom: 0,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    borderBottom: '1px solid var(--border)'
                  }}>
                    <span style={{ fontSize: 40 }}>{b.icon}</span>
                    <span className="blog-cat-pill">{b.category}</span>
                  </div>
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 17, lineHeight: 1.45, marginBottom: 12, flex: 1 }}>{b.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{b.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{b.date} · {b.readTime}</div>
                      <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Read More →</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="blog-newsletter-wrap">
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
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}