import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const start = direction === 'up' ? 'translateY(32px)' : direction === 'left' ? 'translateX(-32px)' : 'translateX(32px)'
    el.style.opacity = 0
    el.style.transform = start
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
        el.style.opacity = 1
        el.style.transform = 'translate(0,0)'
        obs.unobserve(el)
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref}>{children}</div>
}

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const num = parseInt(target.replace(/\D/g, ''))
        const step = Math.ceil(num / (duration / 16))
        let cur = 0
        const timer = setInterval(() => {
          cur = Math.min(cur + step, num)
          setCount(cur)
          if (cur >= num) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <span ref={ref}>{count}{suffix}</span>
}

const services = [
  {
    title: 'Record Retrieval Services',
    desc: 'Fast, accurate medical record retrieval for legal, insurance, and healthcare organizations with HIPAA-compliant delivery.',
    path: '/record-retrieval-services',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    color: '#1e40af',
    icon: '📋'
  },
  {
    title: 'Medical Coding Services',
    desc: 'Certified coders delivering 95%+ first-pass acceptance rates across 40+ specialties with full ICD-10 compliance.',
    path: '/medical-billing-coding',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    color: '#7c3aed',
    icon: '⚕️'
  },
  {
    title: 'Revenue Cycle Management',
    desc: 'End-to-end RCM solutions — eligibility, claims, AR follow-up, denial management — to maximize your collections.',
    path: '/revenue-cycle-management',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    color: '#065f46',
    icon: '💰'
  },
  {
    title: 'Medical Records Summarization',
    desc: 'Transform thousands of pages into clear, actionable summaries for legal and insurance professionals. Save 20+ hrs per case.',
    path: '/medical-records-summarization',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    color: '#92400e',
    icon: '📝'
  },
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
      {/* ── HERO — split layout ── */}
      <section className="header-space" style={{
        minHeight: 'auto',
        background: 'linear-gradient(135deg, #0f172a 0%, #0f766e 70%, #0d9488 100%)',
        display: 'flex', alignItems: 'center',
        paddingTop: window.innerWidth < 768 ? 140 : 120, overflow: 'hidden', position: 'relative'
      }}>
        {/* Background pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.08) 0%, transparent 50%)', pointerEvents: 'none' }} />

        <div className="container hero-grid" style={{ display: 'grid',  gap: 60, alignItems: 'center', position: 'relative', zIndex: 1, padding: '60px 24px' }}>
          {/* Left: text */}
          <div>
            <style>{`@keyframes heroFadeIn{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}`}</style>
            <div style={{ animation: 'heroFadeIn 0.8s ease forwards' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: 24, padding: '6px 16px', marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ color: '#fcd34d', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Trusted BPO Solutions Provider</span>
              </div>
              <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>

              <h1 style={{ fontSize: 'clamp(34px,4.5vw,58px)', fontWeight: 800, color: 'white', lineHeight: 1.12, marginBottom: 22, letterSpacing: '-1px' }}>
                Empowering Your<br />
                Business With<br />
                <span style={{ color: '#f59e0b' }}>Seamless Outsourcing</span>
              </h1>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
                Achieve exponential growth by outsourcing non-core functions — Record Retrieval, Revenue Cycle Management, Medical Coding, and more.
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                <Link to="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '15px 36px', borderRadius: 8, fontWeight: 700, fontSize: 15, display: 'inline-block', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(245,158,11,0.4)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#d97706'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  Get Started Free →
                </Link>
                <Link to="/about" style={{ border: '2px solid rgba(255,255,255,0.6)', color: 'white', padding: '13px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, display: 'inline-block', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)' }}>
                  Learn More
                </Link>
              </div>

              {/* Trust badges */}
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['🏅 ISO 27001:2013', '🔒 HIPAA Compliant', '✅ 10+ Years'].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500 }}>{b}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: image card collage */}
          <div className="hero-img-col" style={{ position: 'relative', height: 480, display: window.innerWidth < 768 ? 'none' : 'block' }}>
            <style>{`@keyframes heroImgIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}`}</style>
            {/* Main image */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 40, bottom: 40, borderRadius: 24, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', animation: 'heroImgIn 1s ease 0.3s both' }}>
              <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80" alt="Healthcare professionals" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,118,110,0.5) 0%, transparent 60%)' }} />
            </div>
            {/* Floating card 1 */}
            <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: 16, padding: '18px 22px', boxShadow: '0 16px 48px rgba(0,0,0,0.25)', animation: 'heroImgIn 1s ease 0.6s both', minWidth: 170 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#0d9488' }}>99%</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 500 }}>Client Retention Rate</div>
              <div style={{ display: 'flex', gap: 3, marginTop: 6 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 12 }}>★</span>)}
              </div>
            </div>
            {/* Floating card 2 */}
            <div style={{ position: 'absolute', top: 24, right: 10, background: 'white', borderRadius: 16, padding: '14px 18px', boxShadow: '0 16px 48px rgba(0,0,0,0.2)', animation: 'heroImgIn 1s ease 0.8s both' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🏅</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>ISO Certified</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>27001:2013</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stack columns */}
        <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important;}.hero-img-col{display:none!important;}}`}</style>
      </section>

      {/* ── ANIMATED STATS ── */}
      <section style={{ padding: '56px 0', background: 'white', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '28px 20px', borderRight: i < stats.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 42, fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>
                  <CountUp target={s.number} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 13, color: '#6b7280', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES WITH IMAGES ── */}
      <section style={{ background: '#f9fafb', padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(13,148,136,0.1)', color: '#0d9488', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 14 }}>Our Services</span>
              <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: 14 }}>
                Complete BPO Solutions for Healthcare
              </h2>
              <p style={{ fontSize: 17, color: '#6b7280', maxWidth: 560, margin: '0 auto' }}>From record retrieval to revenue cycle management — we handle the complexity so you can focus on growth.</p>
            </FadeIn>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link to={s.path} style={{ display: 'block', borderRadius: 20, overflow: 'hidden', background: 'white', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9', transition: 'all 0.35s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 24px 56px rgba(0,0,0,0.14)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)' }}>
                  {/* Image */}
                  <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${s.color}cc 0%, transparent 60%)` }} />
                    <div style={{ position: 'absolute', bottom: 16, left: 16, fontSize: 32 }}>{s.icon}</div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: '24px 28px' }}>
                    <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 17, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65, marginBottom: 18 }}>{s.desc}</p>
                    <div style={{ color: s.color, fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                      Learn More <span style={{ transition: 'transform 0.2s' }}>→</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT — image left, text right ── */}
      <section style={{ padding: '96px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <FadeIn direction="left">
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.15)' }}>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Professional team" style={{ width: '100%', height: 420, objectFit: 'cover' }} />
                </div>
                {/* Floating badge */}
                <div style={{ position: 'absolute', bottom: 10, right: 10, background: 'linear-gradient(135deg,#0f766e,#0d9488)', borderRadius: 16, padding: '20px 24px', color: 'white', boxShadow: '0 16px 40px rgba(13,148,136,0.4)' }}>
                  <div style={{ fontWeight: 800, fontSize: 28 }}>500+</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>Happy Clients</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div>
                <span style={{ display: 'inline-block', background: 'rgba(13,148,136,0.1)', color: '#0d9488', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 16 }}>About U-CGS</span>
                <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: 18 }}>
                  Enabling Clients to Focus on Their Strengths
                </h2>
                <div style={{ height: 4, width: 60, background: 'linear-gradient(90deg,#0d9488,#f59e0b)', borderRadius: 2, marginBottom: 22 }} />
                <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.75, marginBottom: 18 }}>
                  At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the highest standards in data management and service delivery. With close to a decade of practical outsourcing knowledge, we bring valuable expertise to the table.
                </p>
                <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.75, marginBottom: 32 }}>
                  We take pride not in claiming to be the best, but in delivering exceptional, cost-effective, and professional solutions that exceed expectations.
                </p>

                {/* Certification badges */}
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
                  {[['🏅', 'ISO 27001:2013', '#0d9488'], ['🔒', 'HIPAA Compliant', '#1e40af'], ['✅', 'US & India Offices', '#065f46']].map(([icon, text, color], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 10, padding: '10px 16px' }}>
                      <span style={{ fontSize: 16 }}>{icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color }}>{text}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about" style={{ background: '#0d9488', color: 'white', padding: '13px 30px', borderRadius: 8, fontWeight: 700, fontSize: 15, display: 'inline-block', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#0f766e'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#0d9488'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  Learn About Us →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — process stepper ── */}
      <section style={{ background: '#f0fdfa', padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(13,148,136,0.1)', color: '#0d9488', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 14 }}>How It Works</span>
              <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>Get Started in 4 Simple Steps</h2>
            </FadeIn>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0, position: 'relative' }}>
            {process.map((p, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ textAlign: 'center', padding: '32px 28px', position: 'relative' }}>
                  {/* Connector line */}
                  {i < process.length - 1 && (
                    <div style={{ position: 'absolute', top: 52, right: 0, width: '50%', height: 2, background: 'linear-gradient(90deg,#0d9488,#99f6e4)', zIndex: 0 }} className="hide-mobile" />
                  )}
                  {/* Step circle */}
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#0f766e,#0d9488)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 8px 24px rgba(13,148,136,0.35)', position: 'relative', zIndex: 1 }}>
                    <span style={{ fontSize: 28 }}>{p.icon}</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#0d9488', letterSpacing: 1.5, marginBottom: 8 }}>STEP {p.step}</div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '15px 40px', borderRadius: 8, fontWeight: 700, fontSize: 15, display: 'inline-block', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(245,158,11,0.35)' }}
              onMouseEnter={e => e.currentTarget.style.background = '#d97706'}
              onMouseLeave={e => e.currentTarget.style.background = '#f59e0b'}>
              Start Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: 'white', padding: '96px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(13,148,136,0.1)', color: '#0d9488', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 14 }}>Why Choose Us</span>
              <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: 16 }}>Why 500+ Clients Trust U-CGS</h2>
              <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.75, marginBottom: 36 }}>We don't just promise results — we deliver them with a team that treats your business like our own.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {whyUs.map((w, i) => (
                  <div key={i} style={{ padding: '18px 20px', background: i % 2 === 0 ? '#f0fdfa' : '#fffbeb', borderRadius: 14, border: `1px solid ${i % 2 === 0 ? '#99f6e4' : '#fde68a'}` }}>
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{w.icon}</div>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 14, marginBottom: 4 }}>{w.title}</div>
                    <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.55 }}>{w.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80" alt="Professional team collaboration" style={{ width: '100%', height: 500, objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Dedicated to Your Success</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>A team that works tirelessly on your behalf, every single day.</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — with real visual treatment ── */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a 0%,#0f766e 100%)', padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(245,158,11,0.18)', color: '#fcd34d', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 14, border: '1px solid rgba(245,158,11,0.3)' }}>Client Testimonials</span>
              <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>What Our Clients Say</h2>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', borderRadius: 24, padding: '40px 36px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                    {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#f59e0b', fontSize: 16 }}>★</span>)}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.78, marginBottom: 28, fontStyle: 'italic', fontSize: 15 }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,#0d9488,#14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 18, flexShrink: 0 }}>
                      {t.initial}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: 15 }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: '#f59e0b', marginTop: 2 }}>{t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ background: '#f9fafb', padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span style={{ display: 'inline-block', background: 'rgba(13,148,136,0.1)', color: '#0d9488', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 14 }}>Industries We Serve</span>
              <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>Built for Healthcare, Legal & Insurance</h2>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {[
              { icon: '⚖️', title: 'Legal', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80', desc: 'Document review, legal research, record retrieval, and litigation support for law firms of all sizes.', link: '/record-retrieval-services', color: '#1e40af' },
              { icon: '🛡️', title: 'Insurance', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', desc: 'Claims processing, underwriting support, and record retrieval services for insurance carriers and TPAs.', link: '/revenue-cycle-management', color: '#065f46' },
              { icon: '🏥', title: 'Healthcare', img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80', desc: 'End-to-end revenue cycle management, coding, billing, and payment posting for healthcare providers.', link: '/medical-billing-coding', color: '#0f766e' },
            ].map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ borderRadius: 20, overflow: 'hidden', background: 'white', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.14)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)' }}>
                  <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                    <img src={ind.img} alt={ind.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${ind.color}dd 0%, transparent 50%)` }} />
                    <div style={{ position: 'absolute', bottom: 16, left: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 28 }}>{ind.icon}</span>
                      <span style={{ color: 'white', fontWeight: 800, fontSize: 20 }}>{ind.title}</span>
                    </div>
                  </div>
                  <div style={{ padding: '24px 28px' }}>
                    <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{ind.desc}</p>
                    <Link to={ind.link} style={{ color: ind.color, fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, transition: 'gap 0.2s' }}>Explore Solutions →</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — final ── */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="container">
          <FadeIn>
            <div style={{ background: 'linear-gradient(135deg,#0f766e,#0d9488)', borderRadius: 28, padding: '72px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 64px rgba(13,148,136,0.3)' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(245,158,11,0.1)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 800, color: 'white', marginBottom: 16 }}>Ready to Transform Your Business?</h2>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
                  Partner with U-CGS and experience the difference that expert outsourcing can make.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '16px 40px', borderRadius: 8, fontWeight: 700, fontSize: 16, display: 'inline-block', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(245,158,11,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#d97706'}
                    onMouseLeave={e => e.currentTarget.style.background = '#f59e0b'}>
                    Book a Free Consultation
                  </Link>
                  <Link to="/about" style={{ border: '2px solid rgba(255,255,255,0.6)', color: 'white', padding: '14px 36px', borderRadius: 8, fontWeight: 600, fontSize: 16, display: 'inline-block', transition: 'all 0.2s' }}
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