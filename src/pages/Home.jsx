import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const start = direction === 'up' ? 'translateY(32px)' : direction === 'left' ? 'translateX(-32px)' : 'translateX(32px)'
    el.style.opacity = 0; el.style.transform = start
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
        el.style.opacity = 1; el.style.transform = 'translate(0,0)'; obs.unobserve(el)
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref}>{children}</div>
}

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null); const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const num = parseInt(target.replace(/\D/g, ''))
        const step = Math.ceil(num / (duration / 16)); let cur = 0
        const timer = setInterval(() => { cur = Math.min(cur + step, num); setCount(cur); if (cur >= num) clearInterval(timer) }, 16)
      }
    }, { threshold: 0.5 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return <span ref={ref}>{count}{suffix}</span>
}

const services = [
  { title: 'Record Retrieval Services', desc: 'Fast, accurate medical record retrieval for legal, insurance, and healthcare organizations with HIPAA-compliant delivery.', path: '/record-retrieval-services', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80', color: 'var(--primary-dark)', icon: '📋' },
  { title: 'Medical Coding Services', desc: 'Certified coders delivering 95%+ first-pass acceptance rates across 40+ specialties with full ICD-10 compliance.', path: '/medical-billing-coding', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', color: '#0369a1', icon: '⚕️' },
  { title: 'Revenue Cycle Management', desc: 'End-to-end RCM solutions — eligibility, claims, AR follow-up, denial management — to maximize your collections.', path: '/revenue-cycle-management', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', color: '#1e40af', icon: '💰' },
  { title: 'Medical Records Summarization', desc: 'Transform thousands of pages into clear, actionable summaries for legal and insurance professionals. Save 20+ hrs per case.', path: '/medical-records-summarization', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', color: '#075985', icon: '📝' },
]

const stats = [
  { number: '10', suffix: '+', label: 'Years of Experience', icon: '🏆' },
  { number: '500', suffix: '+', label: 'Clients Served', icon: '🤝' },
  { number: '99', suffix: '%', label: 'Client Retention Rate', icon: '⭐' },
  { number: '50', suffix: 'K+', label: 'Records Processed', icon: '📋' },
]

const whyUs = [
  { icon: '🏆', title: 'Industry Expertise', desc: 'Proven operational performance by talented resources, guided by an experienced professional team with deep knowledge of Healthcare.' },
  { icon: '🌐', title: 'Network Availability', desc: 'Redundant infrastructure, onshore data storage in highly secure locations, purpose-built for real-time applications.' },
  { icon: '🤝', title: 'Seamless Experience', desc: 'Risk-free transition, hands-on focus, and cultural alignment through local Client Relationship Managers.' },
  { icon: '⏱️', title: 'On-Time Service', desc: 'Proven track record of consistently delivering timely and reliable services, meeting client expectations with precision.' },
  { icon: '🔒', title: 'Security & Compliance', desc: 'ISO 27001:2013 certified for Information Security and Management Systems (ISMS).' },
  { icon: '👥', title: 'Scalable Resources', desc: 'State-of-the-art workspace with scalable operations and a vast talent pool of skilled agents.' },
]

const process = [
  { step: '01', icon: '📞', title: 'Consultation', desc: 'Free discovery call to understand your specific needs and pain points.' },
  { step: '02', icon: '📋', title: 'Custom Plan', desc: 'We design a tailored solution and onboarding roadmap for your team.' },
  { step: '03', icon: '🚀', title: 'Seamless Onboarding', desc: 'Risk-free transition with dedicated support at every step.' },
  { step: '04', icon: '📊', title: 'Deliver & Report', desc: 'Ongoing delivery with real-time reporting and performance metrics.' },
]

const testimonials = [
  { text: 'I am truly impressed with the work of U-CGS. Your excellent outsourcing services have given us time to focus on the growth of our Business. I would highly recommend your services.', name: 'Chief Executive Officer', company: 'Record Retrieval Firm', initial: 'R' },
  { text: 'My experience with the U-CGS Team has been extremely positive! While significantly reducing our cost of doing business, U-CGS professionalism and efficiency has been unsurpassed!', name: 'Chief Executive Officer', company: 'Medical Billing Firm', initial: 'M' },
]

export default function Home() {
  return (
    <div>
      <style>{`
        @keyframes heroFadeIn { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes heroImgIn { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.45} }

        /* ───── Hero ───── */
        .hero-wrap {
          min-height: auto;
          background: var(--gradient-primary);
          display: flex; align-items: center;
          padding-top: 90px; overflow: hidden; position: relative;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          padding: 44px 24px;
          position: relative; z-index: 1;
        }
        .hero-text-col { order: 1; }
        .hero-img-col  { order: 2; position: relative; height: 440px; }

        /* ───── About section ───── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* ───── Why Us section ───── */
        .why-outer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .why-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        /* ───── Process ───── */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
        }

        /* ───── Industries ───── */
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* ───── Testimonials ───── */
        .test-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        /* ───── Stats ───── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        /* ══════════ MOBILE ══════════ */
        @media (max-width: 768px) {
          .hero-wrap { padding-top: 70px; }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 28px 16px 36px !important;
          }
          /* image ABOVE text on mobile */
          .hero-text-col { order: 2 !important; }
          .hero-img-col  {
            order: 1 !important;
            height: 220px !important;
            display: block !important;
          }
          .hero-img-col .main-img {
            border-radius: 14px !important;
            top:0 !important; left:0 !important; right:0 !important; bottom:0 !important;
          }
          .hero-float { display: none !important; }
          .hero-h1 { font-size: clamp(26px,7vw,36px) !important; margin-bottom: 12px !important; }
          .hero-p  { font-size: 14px !important; margin-bottom: 20px !important; }
          .hero-btns a { padding: 11px 22px !important; font-size: 14px !important; }
          .hero-trust span { font-size: 11px !important; }

          /* About — image above text */
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .about-img-col {
            display: block !important;
            order: 1 !important;
            margin-bottom: 24px !important;
          }
          .about-img-col > div { border-radius: 14px !important; }
          .about-img-col img  { height: 220px !important; }
          .about-float-badge  { display: none !important; }
          .about-text-col { order: 2 !important; }

          /* Why Us — image above cards */
          .why-outer-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .why-img-col {
            display: block !important;
            order: 1 !important;
            margin-bottom: 24px !important;
            border-radius: 14px !important;
            overflow: hidden !important;
          }
          .why-img-col img   { height: 200px !important; width: 100% !important; object-fit: cover !important; }
          .why-img-overlay   { display: none !important; }
          .why-text-col { order: 2 !important; }
          .why-cards-grid { grid-template-columns: 1fr !important; }

          /* Process */
          .process-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }

          /* Industries */
          .ind-grid { grid-template-columns: 1fr !important; }

          /* Testimonials */
          .test-grid { grid-template-columns: 1fr !important; }

          /* Stats */
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .stats-grid > div:nth-child(odd)  { border-right: 1px solid var(--border) !important; }
          .stats-grid > div:nth-child(3),
          .stats-grid > div:nth-child(4)    { border-bottom: none !important; }

          /* CTA box */
          .cta-box { padding: 36px 18px !important; border-radius: 18px !important; }
          .cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .cta-btns a { text-align: center !important; }
        }

        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero-wrap">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(96,165,250,0.08) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container hero-grid">

          {/* Image col — order:1 on mobile so it appears first */}
          <div className="hero-img-col">
            <div className="main-img" style={{ position: 'absolute', top: 0, left: 0, right: 36, bottom: 36, borderRadius: 22, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,0.4)', animation: 'heroImgIn 1s ease 0.3s both' }}>
              <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80" alt="Healthcare professionals" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,28,44,0.55) 0%, transparent 60%)' }} />
            </div>
            {/* Floating cards */}
            <div className="hero-float" style={{ position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: 14, padding: '16px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.22)', animation: 'heroImgIn 1s ease 0.6s both', minWidth: 160 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--primary)' }}>99%</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Client Retention Rate</div>
              <div style={{ display: 'flex', gap: 3, marginTop: 5 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 11 }}>★</span>)}
              </div>
            </div>
          </div>

          {/* Text col — order:2 on mobile so it appears below image */}
          <div className="hero-text-col" style={{ animation: 'heroFadeIn 0.8s ease forwards' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#60a5fa', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#93c5fd', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Trusted BPO Solutions Provider</span>
            </div>

            <h1 className="hero-h1" style={{ fontSize: 'clamp(28px,4.5vw,54px)', fontWeight: 800, color: 'white', lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.5px' }}>
              Empowering Your<br />Business With<br />
              <span style={{ color: '#60a5fa' }}>Seamless Outsourcing</span>
            </h1>

            <p className="hero-p" style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
              Achieve exponential growth by outsourcing non-core functions — Record Retrieval, Revenue Cycle Management, Medical Coding, and more.
            </p>

            <div className="hero-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link to="/contact"
                style={{ background: 'var(--primary)', color: 'white', padding: '13px 30px', borderRadius: 8, fontWeight: 700, fontSize: 15, display: 'inline-block', transition: 'all 0.2s', boxShadow: '0 4px 18px rgba(29,111,184,0.45)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                Get Started Free →
              </Link>
              <Link to="/about"
                style={{ border: '2px solid rgba(255,255,255,0.55)', color: 'white', padding: '11px 26px', borderRadius: 8, fontWeight: 600, fontSize: 15, display: 'inline-block', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                Learn More
              </Link>
            </div>

            <div className="hero-trust" style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {['🏅 ISO 27001:2013', '🔒 HIPAA Compliant', '✅ 10+ Years'].map((b, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '44px 0', background: 'white', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '22px 14px', borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                  <CountUp target={s.number} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 5, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: '#f0f7ff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(29,111,184,0.1)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 12 }}>Our Services</span>
              <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2, marginBottom: 12 }}>Complete BPO Solutions for Healthcare</h2>
              <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto' }}>From record retrieval to revenue cycle management — we handle the complexity so you can focus on growth.</p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link to={s.path} style={{ display: 'block', borderRadius: 18, overflow: 'hidden', background: 'white', boxShadow: '0 2px 18px rgba(0,0,0,0.06)', border: '1px solid var(--border)', transition: 'all 0.35s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-7px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 18px rgba(0,0,0,0.06)' }}>
                  <div style={{ height: 185, overflow: 'hidden', position: 'relative' }}>
                    <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${s.color}cc 0%, transparent 60%)` }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 14, fontSize: 26 }}>{s.icon}</div>
                  </div>
                  <div style={{ padding: '20px 22px' }}>
                    <h3 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>
                    <div style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>Learn More →</div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="about-grid">

            {/* Image col — on mobile: order:1, appears above */}
            <FadeIn direction="left">
              <div className="about-img-col" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 22, overflow: 'hidden', boxShadow: '0 20px 56px rgba(0,0,0,0.14)' }}>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Professional team" style={{ width: '100%', height: 400, objectFit: 'cover' }} />
                </div>
                <div className="about-float-badge" style={{ position: 'absolute', bottom: 10, right: 10, background: 'linear-gradient(135deg,var(--primary-dark),var(--primary))', borderRadius: 14, padding: '16px 20px', color: 'white', boxShadow: '0 12px 32px rgba(29,111,184,0.38)' }}>
                  <div style={{ fontWeight: 800, fontSize: 26 }}>500+</div>
                  <div style={{ fontSize: 12, opacity: 0.85 }}>Happy Clients</div>
                </div>
              </div>
            </FadeIn>

            {/* Text col — on mobile: order:2 */}
            <FadeIn direction="right" delay={0.15}>
              <div className="about-text-col">
                <span style={{ display: 'inline-block', background: 'rgba(29,111,184,0.1)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 14 }}>About U-CGS</span>
                <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2, marginBottom: 14 }}>Enabling Clients to Focus on Their Strengths</h2>
                <div style={{ height: 4, width: 56, background: 'linear-gradient(90deg,var(--primary),#60a5fa)', borderRadius: 2, marginBottom: 18 }} />
                <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 14 }}>
                  At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the highest standards in data management and service delivery.
                </p>
                <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 26 }}>
                  We take pride not in claiming to be the best, but in delivering exceptional, cost-effective, and professional solutions that exceed expectations.
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 26 }}>
                  {[['🏅', 'ISO 27001:2013', 'var(--primary)'], ['🔒', 'HIPAA Compliant', '#0369a1'], ['✅', 'US & India Offices', '#1e40af']].map(([icon, text, color], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, background: `${color}10`, border: `1px solid ${color}28`, borderRadius: 9, padding: '8px 13px' }}>
                      <span style={{ fontSize: 13 }}>{icon}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color }}>{text}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about" style={{ background: 'var(--primary)', color: 'white', padding: '11px 26px', borderRadius: 8, fontWeight: 700, fontSize: 14, display: 'inline-block', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  Learn About Us →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: '#f0f7ff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(29,111,184,0.1)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 12 }}>How It Works</span>
              <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>Get Started in 4 Simple Steps</h2>
            </FadeIn>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ textAlign: 'center', padding: '24px 18px', position: 'relative' }}>
                  {i < process.length - 1 && (
                    <div className="hide-mobile" style={{ position: 'absolute', top: 44, right: 0, width: '50%', height: 2, background: 'linear-gradient(90deg,var(--primary),#bfdbfe)', zIndex: 0 }} />
                  )}
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary-dark),var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: '0 6px 20px rgba(29,111,184,0.32)', position: 'relative', zIndex: 1 }}>
                    <span style={{ fontSize: 24 }}>{p.icon}</span>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary)', letterSpacing: 1.5, marginBottom: 6 }}>STEP {p.step}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 15, marginBottom: 7 }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/contact" style={{ background: 'var(--primary)', color: 'white', padding: '13px 34px', borderRadius: 8, fontWeight: 700, fontSize: 15, display: 'inline-block', transition: 'all 0.2s', boxShadow: '0 4px 18px rgba(29,111,184,0.32)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--primary-dark)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--primary)'}>
              Start Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <div className="why-outer-grid">

            {/* Left: tag + title + cards */}
            <FadeIn>
              <div className="why-text-col">
                <span style={{ display: 'inline-block', background: 'rgba(29,111,184,0.1)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 12 }}>Why Choose Us</span>
                <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2, marginBottom: 12 }}>Why 500+ Clients Trust U-CGS</h2>
                <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 24 }}>We don't just promise results — we deliver them with a team that treats your business like our own.</p>
                <div className="why-cards-grid">
                  {whyUs.map((w, i) => (
                    <div key={i} style={{ padding: '15px 16px', background: i % 2 === 0 ? '#f0f7ff' : '#f0f9ff', borderRadius: 12, border: `1px solid ${i % 2 === 0 ? '#bfdbfe' : '#bae6fd'}` }}>
                      <div style={{ fontSize: 19, marginBottom: 6 }}>{w.icon}</div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 13, marginBottom: 4 }}>{w.title}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.55 }}>{w.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right: image — on mobile: order:1, appears above */}
            <FadeIn delay={0.2}>
              <div className="why-img-col" style={{ borderRadius: 22, overflow: 'hidden', boxShadow: '0 20px 56px rgba(0,0,0,0.12)', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80" alt="Professional team collaboration" style={{ width: '100%', height: 460, objectFit: 'cover' }} />
                <div className="why-img-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 55%)' }} />
                <div className="why-img-overlay" style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Dedicated to Your Success</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>A team that works tirelessly on your behalf, every single day.</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: 'linear-gradient(135deg,var(--bg-dark) 0%,var(--bg-dark-2) 55%,var(--primary) 100%)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', color: '#93c5fd', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 12, border: '1px solid rgba(255,255,255,0.15)' }}>Client Testimonials</span>
              <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>What Our Clients Say</h2>
            </FadeIn>
          </div>
          <div className="test-grid">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', borderRadius: 18, padding: '30px 26px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                    {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>)}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.78, marginBottom: 22, fontStyle: 'italic', fontSize: 14 }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),#60a5fa)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>{t.initial}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: 14 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: '#93c5fd', marginTop: 2 }}>{t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ background: '#f0f7ff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(29,111,184,0.1)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 12 }}>Industries We Serve</span>
              <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>Built for Healthcare, Legal & Insurance</h2>
            </FadeIn>
          </div>
          <div className="ind-grid">
            {[
              { icon: '⚖️', title: 'Legal', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80', desc: 'Document review, legal research, record retrieval, and litigation support for law firms of all sizes.', link: '/record-retrieval-services', color: 'var(--primary-dark)' },
              { icon: '🛡️', title: 'Insurance', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', desc: 'Claims processing, underwriting support, and record retrieval services for insurance carriers and TPAs.', link: '/revenue-cycle-management', color: '#0369a1' },
              { icon: '🏥', title: 'Healthcare', img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80', desc: 'End-to-end revenue cycle management, coding, billing, and payment posting for healthcare providers.', link: '/medical-billing-coding', color: 'var(--primary)' },
            ].map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ borderRadius: 16, overflow: 'hidden', background: 'white', boxShadow: '0 3px 20px rgba(0,0,0,0.07)', border: '1px solid var(--border)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 44px rgba(0,0,0,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 20px rgba(0,0,0,0.07)' }}>
                  <div style={{ height: 165, overflow: 'hidden', position: 'relative' }}>
                    <img src={ind.img} alt={ind.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${ind.color}dd 0%, transparent 50%)` }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 22 }}>{ind.icon}</span>
                      <span style={{ color: 'white', fontWeight: 800, fontSize: 17 }}>{ind.title}</span>
                    </div>
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>{ind.desc}</p>
                    <Link to={ind.link} style={{ color: ind.color, fontWeight: 700, fontSize: 13 }}>Explore Solutions →</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'white', padding: '68px 0' }}>
        <div className="container">
          <FadeIn>
            <div className="cta-box" style={{ background: 'linear-gradient(135deg,var(--bg-dark),var(--bg-dark-2),var(--primary))', borderRadius: 24, padding: '60px 44px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 56px rgba(29,111,184,0.28)' }}>
              <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(22px,4vw,38px)', fontWeight: 800, color: 'white', marginBottom: 12 }}>Ready to Transform Your Business?</h2>
                <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.75 }}>
                  Partner with U-CGS and experience the difference that expert outsourcing can make.
                </p>
                <div className="cta-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contact" style={{ background: 'var(--primary)', color: 'white', padding: '14px 34px', borderRadius: 8, fontWeight: 700, fontSize: 15, display: 'inline-block', transition: 'all 0.2s', boxShadow: '0 4px 18px rgba(0,0,0,0.2)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--primary-dark)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--primary)'}>
                    Book a Free Consultation
                  </Link>
                  <Link to="/about" style={{ border: '2px solid rgba(255,255,255,0.55)', color: 'white', padding: '12px 30px', borderRadius: 8, fontWeight: 600, fontSize: 15, display: 'inline-block', transition: 'all 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
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