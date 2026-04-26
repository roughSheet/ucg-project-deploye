import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Scroll fade-in ── */
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        obs.unobserve(el)
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref}>{children}</div>
}

/* ── Animated counter ── */
function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const num = parseInt(target)
        const step = Math.ceil(num / 80)
        let cur = 0
        const timer = setInterval(() => {
          cur = Math.min(cur + step, num)
          setCount(cur)
          if (cur >= num) clearInterval(timer)
        }, 20)
      }
    }, { threshold: 0.5 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ── Data ── */
const SERVICES = [
  { title: 'Record Retrieval Services', desc: 'Fast, accurate medical record retrieval for legal, insurance, and healthcare with HIPAA-compliant delivery.', path: '/record-retrieval-services', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80', color: '#1e40af', icon: '📋' },
  { title: 'Medical Coding Services', desc: 'Certified coders delivering 95%+ first-pass acceptance rates across 40+ specialties with full compliance.', path: '/medical-billing-coding', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', color: '#7c3aed', icon: '⚕️' },
  { title: 'Revenue Cycle Management', desc: 'End-to-end RCM — eligibility, claims, AR follow-up, denial management — to maximize your collections.', path: '/revenue-cycle-management', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', color: '#065f46', icon: '💰' },
  { title: 'Medical Records Summarization', desc: 'Transform thousands of pages into clear summaries for legal and insurance professionals. Save 20+ hrs per case.', path: '/medical-records-summarization', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', color: '#92400e', icon: '📝' },
]

const STATS = [
  { number: '10', suffix: '+', label: 'Years Experience', icon: '🏆' },
  { number: '500', suffix: '+', label: 'Clients Served', icon: '🤝' },
  { number: '99', suffix: '%', label: 'Client Retention', icon: '⭐' },
  { number: '50', suffix: 'K+', label: 'Records Processed', icon: '📋' },
]

const WHY = [
  { icon: '🏆', title: 'Industry Expertise', desc: 'Proven performance with deep knowledge of Healthcare operations.' },
  { icon: '🌐', title: 'Network Availability', desc: 'Redundant infrastructure in highly secure onshore locations.' },
  { icon: '🤝', title: 'Seamless Experience', desc: 'Risk-free transition with local Client Relationship Managers.' },
  { icon: '⏱️', title: 'On-Time Service', desc: 'Consistent, timely service delivery that meets every deadline.' },
  { icon: '🔒', title: 'Security First', desc: 'ISO 27001:2013 certified Information Security Management.' },
  { icon: '👥', title: 'Scalable Resources', desc: 'Vast talent pool of skilled agents, ready to scale with you.' },
]

const PROCESS = [
  { step: '01', icon: '📞', title: 'Consultation', desc: 'Free discovery call to understand your exact needs.' },
  { step: '02', icon: '📋', title: 'Custom Plan', desc: 'We design a tailored solution and onboarding roadmap.' },
  { step: '03', icon: '🚀', title: 'Onboarding', desc: 'Risk-free transition with dedicated support at every step.' },
  { step: '04', icon: '📊', title: 'Deliver & Report', desc: 'Ongoing delivery with real-time performance reporting.' },
]

const TESTIMONIALS = [
  { text: 'I am truly impressed with the work of U-CGS. Your excellent outsourcing services have given us time to focus on the growth of our Business. I would highly recommend your services.', name: 'Chief Executive Officer', company: 'Record Retrieval Firm', initial: 'R' },
  { text: 'My experience with the U-CGS Team has been extremely positive! While significantly reducing our cost of doing business, U-CGS professionalism and efficiency has been unsurpassed!', name: 'Chief Executive Officer', company: 'Medical Billing Firm', initial: 'M' },
]

const INDUSTRIES = [
  { icon: '⚖️', title: 'Legal', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80', desc: 'Document review, legal research, record retrieval, and litigation support for law firms.', link: '/record-retrieval-services', color: '#1e40af' },
  { icon: '🛡️', title: 'Insurance', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', desc: 'Claims processing, underwriting support, and record retrieval for insurance carriers.', link: '/revenue-cycle-management', color: '#065f46' },
  { icon: '🏥', title: 'Healthcare', img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80', desc: 'End-to-end revenue cycle management, coding, and billing for healthcare providers.', link: '/medical-billing-coding', color: '#0f766e' },
]

export default function Home() {
  return (
    <div>
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes imgIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>

      {/* ════════════════════════════════
          HERO
          paddingTop = topbar(33) + nav(66) + breathing(40) = 139px
          ════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #0f766e 65%, #0d9488 100%)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 140,
        paddingBottom: 80,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle background circles */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', top: -150, right: -150 }} />
          <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'rgba(245,158,11,0.06)', bottom: -100, left: -100 }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* grid-2 from CSS — no inline gridTemplateColumns ever */}
          <div className="grid-2" style={{ alignItems: 'center' }}>

            {/* LEFT: text */}
            <div className="hero-text" style={{ animation: 'heroIn 0.85s ease forwards' }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(245,158,11,0.15)',
                border: '1px solid rgba(245,158,11,0.4)',
                borderRadius: 24, padding: '6px 18px', marginBottom: 24,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f59e0b', flexShrink: 0, animation: 'pulse 2s infinite' }} />
                <span style={{ color: '#fcd34d', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                  Trusted BPO Solutions Provider
                </span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                marginBottom: 22,
                letterSpacing: '-1px',
              }}>
                Empowering Your<br />
                Business With<br />
                <span style={{ color: '#f59e0b' }}>Seamless Outsourcing</span>
              </h1>

              {/* Sub */}
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, marginBottom: 40, maxWidth: 460 }}>
                Achieve exponential growth by outsourcing non-core functions — Record Retrieval, Revenue Cycle Management, Medical Coding, and more.
              </p>

              {/* Buttons — amber fills dark text, outline has thick white border */}
              <div className="hero-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
                <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '14px 34px' }}>
                  Get Started Free →
                </Link>
                <Link to="/about" className="btn-outline-white" style={{ fontSize: 15, padding: '12px 30px' }}>
                  Learn More
                </Link>
              </div>

              {/* Trust badges */}
              <div className="hero-badges" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['🏅 ISO 27001:2013', '🔒 HIPAA Compliant', '✅ 10+ Years'].map((b, i) => (
                  <span key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>

            {/* RIGHT: image collage — hidden on mobile via .hero-img-col CSS */}
            <div className="hero-img-col" style={{ position: 'relative', height: 520, animation: 'imgIn 1s ease 0.35s both' }}>
              {/* Main image */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 48, bottom: 48,
                borderRadius: 24, overflow: 'hidden',
                boxShadow: '0 40px 80px rgba(0,0,0,0.45)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80"
                  alt="Healthcare professionals"
                  className="img-hero"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,118,110,0.55) 0%, transparent 60%)' }} />
              </div>

              {/* Float card: retention */}
              <div className="hero-float-card" style={{
                position: 'absolute', bottom: 0, right: 0,
                background: 'white', borderRadius: 16, padding: '18px 22px',
                boxShadow: '0 16px 48px rgba(0,0,0,0.22)',
              }}>
                <div style={{ fontSize: 30, fontWeight: 800, color: '#0d9488' }}>99%</div>
                <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, marginBottom: 6 }}>Client Retention Rate</div>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 13 }}>★</span>)}
                </div>
              </div>

              {/* Float card: ISO */}
              <div className="hero-float-card" style={{
                position: 'absolute', top: 20, right: -12,
                background: 'white', borderRadius: 14, padding: '12px 16px',
                boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>🏅</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>ISO Certified</div>
                    <div style={{ fontSize: 11, color: '#6b7280' }}>27001:2013</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STATS
          ════════════════════════════════ */}
      <section style={{ padding: '60px 0', background: 'white', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="grid-stats">
            {STATS.map((s, i) => (
              <div key={i} className="stat-border-right" style={{
                textAlign: 'center',
                padding: '24px 20px',
                borderRight: i < STATS.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 40, fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>
                  <CountUp target={s.number} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 13, color: '#6b7280', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SERVICES
          ════════════════════════════════ */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-tag">Our Services</span>
              <h2 className="section-title">Complete BPO Solutions for Healthcare</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                From record retrieval to revenue cycle management — we handle the complexity so you can focus on growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid-services">
            {SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link to={s.path} style={{
                  display: 'block', borderRadius: 20, overflow: 'hidden',
                  background: 'white', textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                  border: '1px solid #f1f5f9',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.13)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)' }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={s.img} alt={s.title} className="img-service" />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${s.color}cc 0%, transparent 55%)` }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 28 }}>{s.icon}</div>
                  </div>
                  <div style={{ padding: '22px 26px 26px' }}>
                    <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 17, marginBottom: 10, lineHeight: 1.35 }}>{s.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>
                    <span style={{ color: s.color, fontWeight: 700, fontSize: 14 }}>Learn More →</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          ABOUT SPLIT
          ════════════════════════════════ */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">

            {/* Image side */}
            <FadeIn>
              <div style={{ position: 'relative', paddingBottom: 32, paddingRight: 32 }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                  alt="Professional team"
                  className="img-about"
                />
                {/* Badge outside overflow so it's never clipped */}
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  background: 'linear-gradient(135deg, #0f766e, #0d9488)',
                  borderRadius: 14, padding: '18px 24px',
                  color: 'white', boxShadow: '0 12px 36px rgba(13,148,136,0.45)',
                }}>
                  <div style={{ fontWeight: 800, fontSize: 28 }}>500+</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>Happy Clients</div>
                </div>
              </div>
            </FadeIn>

            {/* Text side */}
            <FadeIn delay={0.15}>
              <div>
                <span className="section-tag">About U-CGS</span>
                <h2 className="section-title">Enabling Clients to Focus on Their Strengths</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 18 }}>
                  At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the highest standards in data management and service delivery. With close to a decade of practical outsourcing knowledge, we bring valuable expertise to the table.
                </p>
                <p className="section-sub" style={{ marginBottom: 32 }}>
                  We take pride not in claiming to be the best, but in delivering exceptional, cost-effective, and professional solutions that exceed expectations.
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
                  {[['🏅', 'ISO 27001:2013', '#0d9488'], ['🔒', 'HIPAA Compliant', '#1e40af'], ['✅', 'US & India Offices', '#065f46']].map(([icon, text, color], i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      background: `${color}12`, border: `1px solid ${color}30`,
                      borderRadius: 9, padding: '9px 14px',
                    }}>
                      <span style={{ fontSize: 15 }}>{icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color }}>{text}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="btn-secondary">Learn About Us →</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          HOW IT WORKS
          ════════════════════════════════ */}
      <section style={{ background: '#f0fdfa' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span className="section-tag">How It Works</span>
              <h2 className="section-title">Get Started in 4 Simple Steps</h2>
            </div>
          </FadeIn>

          <div className="grid-process">
            {PROCESS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center', padding: '20px 24px', position: 'relative' }}>
                  {/* connector line — hidden on mobile/tablet via CSS */}
                  {i < PROCESS.length - 1 && (
                    <div className="process-connector" style={{
                      position: 'absolute', top: 53, left: '58%', right: '-22%',
                      height: 2, background: 'linear-gradient(90deg, #0d9488, #99f6e4)', zIndex: 0,
                    }} />
                  )}
                  <div style={{
                    width: 68, height: 68, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0f766e, #0d9488)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    boxShadow: '0 8px 24px rgba(13,148,136,0.35)',
                    position: 'relative', zIndex: 1,
                  }}>
                    <span style={{ fontSize: 28 }}>{p.icon}</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#0d9488', letterSpacing: 1.5, marginBottom: 8 }}>STEP {p.step}</div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 16, marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '14px 38px' }}>
              Start Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHY CHOOSE US
          ════════════════════════════════ */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">

            {/* Text + mini cards */}
            <FadeIn>
              <div>
                <span className="section-tag">Why Choose Us</span>
                <h2 className="section-title">Why 500+ Clients Trust U-CGS</h2>
                <p className="section-sub" style={{ marginBottom: 28 }}>
                  We don't just promise results — we deliver them with a team that treats your business like our own.
                </p>
                <div className="grid-why">
                  {WHY.map((w, i) => (
                    <div key={i} style={{
                      padding: '16px 16px',
                      background: i % 2 === 0 ? '#f0fdfa' : '#fffbeb',
                      borderRadius: 12,
                      border: `1px solid ${i % 2 === 0 ? '#99f6e4' : '#fde68a'}`,
                    }}>
                      <div style={{ fontSize: 20, marginBottom: 7 }}>{w.icon}</div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 13, marginBottom: 4 }}>{w.title}</div>
                      <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.55 }}>{w.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Image — height controlled by .img-why class */}
            <FadeIn delay={0.15}>
              <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 56px rgba(0,0,0,0.12)', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80"
                  alt="Team collaboration"
                  className="img-why"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.72) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Dedicated to Your Success</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, lineHeight: 1.5 }}>A team that works tirelessly on your behalf, every single day.</div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TESTIMONIALS
          ════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f766e 100%)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-tag-amber-light">Client Testimonials</span>
              <h2 className="section-title-white">What Our Clients Say</h2>
            </div>
          </FadeIn>
          <div className="grid-testimonials">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 22, padding: '36px 32px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 18 }}>
                    {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#f59e0b', fontSize: 15 }}>★</span>)}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.78, marginBottom: 26, fontStyle: 'italic', fontSize: 15 }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 20 }}>
                    <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#0d9488,#14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 18, flexShrink: 0 }}>{t.initial}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: 14 }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: '#f59e0b', marginTop: 3 }}>{t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          INDUSTRIES
          ════════════════════════════════ */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-tag">Industries We Serve</span>
              <h2 className="section-title">Built for Healthcare, Legal & Insurance</h2>
            </div>
          </FadeIn>
          <div className="grid-3">
            {INDUSTRIES.map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  borderRadius: 20, overflow: 'hidden', background: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 18px 44px rgba(0,0,0,0.13)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)' }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={ind.img} alt={ind.title} className="img-industry" />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${ind.color}e0 0%, transparent 50%)` }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 22 }}>{ind.icon}</span>
                      <span style={{ color: 'white', fontWeight: 800, fontSize: 18 }}>{ind.title}</span>
                    </div>
                  </div>
                  <div style={{ padding: '22px 24px' }}>
                    <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{ind.desc}</p>
                    <Link to={ind.link} style={{ color: ind.color, fontWeight: 700, fontSize: 14 }}>Explore Solutions →</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CTA
          ════════════════════════════════ */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <FadeIn>
            <div className="cta-inner" style={{
              background: 'linear-gradient(135deg, #0f766e, #0d9488)',
              borderRadius: 28, padding: '72px 56px',
              textAlign: 'center', position: 'relative', overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(13,148,136,0.28)',
            }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(245,158,11,0.08)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, color: 'white', marginBottom: 16 }}>
                  Ready to Transform Your Business?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.75 }}>
                  Partner with U-CGS and experience the difference that expert outsourcing can make.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '15px 38px' }}>
                    Book a Free Consultation
                  </Link>
                  <Link to="/about" className="btn-outline-white" style={{ fontSize: 15, padding: '13px 32px' }}>
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}