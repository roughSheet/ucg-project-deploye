import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    el.style.opacity = 0
    el.style.transform = 'translateY(28px)'
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
        el.style.opacity = 1
        el.style.transform = 'translateY(0)'
        obs.unobserve(el)
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref}>{children}</div>
}

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
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
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <span ref={ref}>{count}{suffix}</span>
}

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
  { icon: '🏆', title: 'Industry Expertise', desc: 'Proven performance by talented resources with deep knowledge of Healthcare operations.' },
  { icon: '🌐', title: 'Network Availability', desc: 'Redundant infrastructure, onshore data storage in highly secure locations.' },
  { icon: '🤝', title: 'Seamless Experience', desc: 'Risk-free transition with local Client Relationship Managers for cultural alignment.' },
  { icon: '⏱️', title: 'On-Time Service', desc: 'Proven track record of delivering timely, reliable services with precision.' },
  { icon: '🔒', title: 'Security & Compliance', desc: 'ISO 27001:2013 certified for Information Security and Management Systems.' },
  { icon: '👥', title: 'Scalable Resources', desc: 'State-of-the-art workspace with a vast talent pool of skilled agents.' },
]

const PROCESS = [
  { step: '01', icon: '📞', title: 'Consultation', desc: 'Free discovery call to understand your needs.' },
  { step: '02', icon: '📋', title: 'Custom Plan', desc: 'We design a tailored solution and roadmap.' },
  { step: '03', icon: '🚀', title: 'Onboarding', desc: 'Risk-free transition with dedicated support.' },
  { step: '04', icon: '📊', title: 'Deliver & Report', desc: 'Ongoing delivery with real-time reporting.' },
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
        @keyframes heroIn { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes heroImgIn { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a 0%,#0f766e 70%,#0d9488 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%,rgba(255,255,255,0.03) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(245,158,11,0.07) 0%,transparent 50%)', pointerEvents: 'none' }} />

        <div className="container">
          <div className="grid-2" style={{ gap: '40px' }}>
            {/* Text */}
            <div className="hero-text" style={{ animation: 'heroIn 0.85s ease forwards', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: 24, padding: '6px 16px', marginBottom: 20 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                <span style={{ color: '#fcd34d', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Trusted BPO Solutions Provider</span>
              </div>

              <h1 style={{ fontSize: 'clamp(30px,5vw,58px)', fontWeight: 800, color: 'white', lineHeight: 1.12, marginBottom: 20, letterSpacing: '-1px' }}>
                Empowering Your<br />Business With<br />
                <span style={{ color: '#f59e0b' }}>Seamless Outsourcing</span>
              </h1>

              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                Achieve exponential growth by outsourcing non-core functions — Record Retrieval, Revenue Cycle Management, Medical Coding, and more.
              </p>

              <div className="hero-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
                <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>Get Started Free →</Link>
                <Link to="/about" className="btn-outline-white" style={{ fontSize: 15, padding: '12px 28px' }}>Learn More</Link>
              </div>

              <div className="hero-badges" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {['🏅 ISO 27001:2013', '🔒 HIPAA Compliant', '✅ 10+ Years'].map((b, i) => (
                  <span key={i} style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Image — hidden on mobile via CSS class */}
            <div className="hero-img-col" style={{ position: 'relative', height: 500, animation: 'heroImgIn 1s ease 0.3s both' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 40, bottom: 40, borderRadius: 24, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>
                <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80" alt="Healthcare professionals" className="hero-main-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(15,118,110,0.5) 0%,transparent 60%)' }} />
              </div>
              <div className="hero-float-card" style={{ position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: 16, padding: '18px 22px', boxShadow: '0 16px 48px rgba(0,0,0,0.25)' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#0d9488' }}>99%</div>
                <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 500 }}>Client Retention Rate</div>
                <div style={{ display: 'flex', gap: 3, marginTop: 6 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 12 }}>★</span>)}
                </div>
              </div>
              <div className="hero-float-card" style={{ position: 'absolute', top: 20, right: -10, background: 'white', borderRadius: 14, padding: '12px 16px', boxShadow: '0 12px 40px rgba(0,0,0,0.2)' }}>
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

      {/* ── STATS ── */}
      <section style={{ padding: '56px 0', background: 'white', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="grid-stats">
            {STATS.map((s, i) => (
              <div key={i} className="stat-divider" style={{ textAlign: 'center', padding: '28px 16px', borderRight: i < STATS.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 38, fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>
                  <CountUp target={s.number} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 13, color: '#6b7280', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES WITH IMAGES ── */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-tag">Our Services</span>
              <h2 className="section-title">Complete BPO Solutions for Healthcare</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>From record retrieval to revenue cycle management — we handle the complexity so you can focus on growth.</p>
            </div>
          </FadeIn>
          <div className="grid-services">
            {SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link to={s.path} style={{ display: 'block', borderRadius: 20, overflow: 'hidden', background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9', transition: 'all 0.3s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.13)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)' }}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={s.img} alt={s.title} className="service-card-img" />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top,${s.color}cc 0%,transparent 55%)` }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 30 }}>{s.icon}</div>
                  </div>
                  <div style={{ padding: '22px 24px' }}>
                    <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 16, marginBottom: 10, lineHeight: 1.35 }}>{s.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>
                    <span style={{ color: s.color, fontWeight: 700, fontSize: 14 }}>Learn More →</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">
            <FadeIn>
              {/* Wrapper with extra bottom padding so badge isn't clipped */}
              <div style={{ paddingBottom: 28, paddingRight: 28 }}>
                <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 56px rgba(0,0,0,0.13)', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Professional team" className="about-img" />
                </div>
                {/* Badge is OUTSIDE overflow:hidden now — won't clip */}
                <div style={{ position: 'relative', marginTop: -28, marginLeft: 'auto', marginRight: 0, width: 'fit-content', transform: 'translateX(-8px)' }}>
                  <div style={{ background: 'linear-gradient(135deg,#0f766e,#0d9488)', borderRadius: 14, padding: '16px 22px', color: 'white', boxShadow: '0 12px 36px rgba(13,148,136,0.4)', display: 'inline-block' }}>
                    <div style={{ fontWeight: 800, fontSize: 26 }}>500+</div>
                    <div style={{ fontSize: 12, opacity: 0.85 }}>Happy Clients</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <span className="section-tag">About U-CGS</span>
                <h2 className="section-title">Enabling Clients to Focus on Their Strengths</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 16 }}>At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the highest standards in data management and service delivery. With close to a decade of practical outsourcing knowledge, we bring valuable expertise to the table.</p>
                <p className="section-sub" style={{ marginBottom: 28 }}>We take pride not in claiming to be the best, but in delivering exceptional, cost-effective, and professional solutions that exceed expectations.</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
                  {[['🏅', 'ISO 27001:2013', '#0d9488'], ['🔒', 'HIPAA Compliant', '#1e40af'], ['✅', 'US & India Offices', '#065f46']].map(([icon, text, color], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 9, padding: '9px 14px' }}>
                      <span style={{ fontSize: 15 }}>{icon}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color }}>{text}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="btn-secondary">Learn About Us →</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: '#f0fdfa' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-tag">How It Works</span>
              <h2 className="section-title">Get Started in 4 Simple Steps</h2>
            </div>
          </FadeIn>
          <div className="grid-process" style={{ position: 'relative' }}>
            {PROCESS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center', padding: '28px 20px', position: 'relative' }}>
                  {/* Connector line between steps — hidden mobile via CSS */}
                  {i < PROCESS.length - 1 && (
                    <div className="process-connector" style={{ position: 'absolute', top: 44, left: '60%', width: '80%', height: 2, background: 'linear-gradient(90deg,#0d9488,#99f6e4)', zIndex: 0 }} />
                  )}
                  <div style={{ width: 66, height: 66, borderRadius: '50%', background: 'linear-gradient(135deg,#0f766e,#0d9488)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: '0 8px 24px rgba(13,148,136,0.35)', position: 'relative', zIndex: 1 }}>
                    <span style={{ fontSize: 26 }}>{p.icon}</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#0d9488', letterSpacing: 1.5, marginBottom: 7 }}>STEP {p.step}</div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 16, marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '14px 36px' }}>Start Your Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="grid-2">
            <FadeIn>
              <div>
                <span className="section-tag">Why Choose Us</span>
                <h2 className="section-title">Why 500+ Clients Trust U-CGS</h2>
                <p className="section-sub" style={{ marginBottom: 28 }}>We don't just promise results — we deliver them with a team that treats your business like our own.</p>
                <div className="grid-why">
                  {WHY.map((w, i) => (
                    <div key={i} style={{ padding: '16px 18px', background: i % 2 === 0 ? '#f0fdfa' : '#fffbeb', borderRadius: 12, border: `1px solid ${i % 2 === 0 ? '#99f6e4' : '#fde68a'}` }}>
                      <div style={{ fontSize: 20, marginBottom: 7 }}>{w.icon}</div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 13, marginBottom: 4 }}>{w.title}</div>
                      <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.55 }}>{w.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 56px rgba(0,0,0,0.12)', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80"
                alt="Team collaboration"
                className="why-img"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(15,23,42,0.7) 0%,transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 17, marginBottom: 5 }}>Dedicated to Your Success</div>
                <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 13, lineHeight: 1.5 }}>A team that works tirelessly on your behalf, every single day.</div>
              </div>
            </div>
          </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a 0%,#0f766e 100%)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-tag-amber-light">Client Testimonials</span>
              <h2 className="section-title-white">What Our Clients Say</h2>
            </div>
          </FadeIn>
          <div className="grid-auto-lg">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', borderRadius: 22, padding: '36px 30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 18 }}>
                    {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#f59e0b', fontSize: 15 }}>★</span>)}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic', fontSize: 15 }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 18 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#0d9488,#14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>{t.initial}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: 14 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: '#f59e0b', marginTop: 2 }}>{t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-tag">Industries We Serve</span>
              <h2 className="section-title">Built for Healthcare, Legal & Insurance</h2>
            </div>
          </FadeIn>
          <div className="grid-3">
            {INDUSTRIES.map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ borderRadius: 20, overflow: 'hidden', background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 18px 44px rgba(0,0,0,0.13)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)' }}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={ind.img} alt={ind.title} className="industry-img" />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top,${ind.color}dd 0%,transparent 50%)` }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 24 }}>{ind.icon}</span>
                      <span style={{ color: 'white', fontWeight: 800, fontSize: 18 }}>{ind.title}</span>
                    </div>
                  </div>
                  <div style={{ padding: '22px 24px' }}>
                    <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{ind.desc}</p>
                    <Link to={ind.link} style={{ color: ind.color, fontWeight: 700, fontSize: 14 }}>Explore Solutions →</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <FadeIn>
            <div className="cta-inner" style={{ background: 'linear-gradient(135deg,#0f766e,#0d9488)', borderRadius: 24, padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 56px rgba(13,148,136,0.3)' }}>
              <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(22px,4vw,38px)', fontWeight: 800, color: 'white', marginBottom: 14 }}>Ready to Transform Your Business?</h2>
                <p style={{ color: 'rgba(255,255,255,0.84)', fontSize: 16, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.75 }}>Partner with U-CGS and experience the difference that expert outsourcing can make.</p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '14px 36px' }}>Book a Free Consultation</Link>
                  <Link to="/about" className="btn-outline-white" style={{ fontSize: 15, padding: '12px 30px' }}>Learn About Us</Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}