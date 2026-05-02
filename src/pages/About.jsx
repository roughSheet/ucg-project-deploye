import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import about11 from '../assets/about11.jpg'
import about12 from '../assets/about12.jpg'
import about13 from '../assets/about13.jpg'

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

const team = [
  { name: 'Leadership Team', role: 'Strategy & Vision', icon: '🎯', desc: 'Guided by experienced professionals with close to a decade of outsourcing expertise across Healthcare, Legal, and Insurance sectors.' },
  { name: 'Operations Team', role: 'Service Delivery', icon: '⚙️', desc: 'Dedicated operations specialists ensuring seamless delivery, quality assurance, and on-time performance for every client.' },
  { name: 'Technology Team', role: 'Innovation & Security', icon: '🔐', desc: 'ISO 27001:2013 certified security professionals maintaining the highest standards of data protection and compliance.' },
]

const values = [
  { icon: '🎯', title: 'Client-Centric', desc: 'Every decision we make centers around delivering maximum value to our clients.' },
  { icon: '🔒', title: 'Security First', desc: 'ISO 27001:2013 certified. Your data security is non-negotiable for us.' },
  { icon: '⚡', title: 'Efficiency', desc: 'Streamlined processes that save time, reduce costs, and boost productivity.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent communication, honest pricing, and trustworthy partnerships.' },
  { icon: '🌱', title: 'Growth Mindset', desc: 'We grow with our clients, scaling solutions as their business evolves.' },
  { icon: '🏆', title: 'Excellence', desc: 'We don\'t settle for good enough — we pursue the highest standard in everything.' },
]

const milestones = [
  { year: '2015', title: 'Company Founded', desc: 'U-CGS was established with a vision to deliver world-class BPO services.' },
  { year: '2017', title: 'ISO 27001 Certified', desc: 'Achieved Information Security Management System certification.' },
  { year: '2019', title: 'US Office Opened', desc: 'Expanded operations with a US office in Cheyenne, Wyoming.' },
  { year: '2021', title: '200+ Clients Served', desc: 'Crossed a major milestone in client satisfaction and retention.' },
  { year: '2024', title: 'Expanded Services', desc: 'Launched Medical Records Summarization and enhanced RCM offerings.' },
]

export default function About() {
  return (
    <div>
      <style>{`
        @keyframes aboutHeroIn { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes aboutImgIn  { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.45} }

        .about-hero-wrap {
          background: var(--gradient-primary);
          padding-top: 90px;
          overflow: hidden;
          position: relative;
        }
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          padding: 44px 24px 0;
          position: relative;
          z-index: 1;
        }
        .about-hero-text { order: 1; animation: aboutHeroIn 0.8s ease forwards; }
        .about-hero-img-col {
          order: 2;
          position: relative;
          height: 420px;
          animation: aboutImgIn 1s ease 0.3s both;
        }
        .about-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }
        .timeline-line {
          position: absolute;
          left: 28px; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--primary), var(--primary-light), var(--warning));
        }

        @media (max-width: 768px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 28px 16px 0 !important;
          }
          .about-hero-text { order: 2 !important; }
          .about-hero-img-col {
            order: 1 !important;
            height: 220px !important;
          }
          .about-hero-img-col .ah-main-img {
            border-radius: 14px !important;
            top:0 !important; left:0 !important; right:0 !important; bottom:0 !important;
          }
          .about-hero-float { display: none !important; }
          .about-story-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .about-story-img { order: -1; }
          .about-float-badge { display: none !important; }
        }
      `}</style>

      {/* ── HERO with image (matches Home style) ── */}
      <section className="about-hero-wrap">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(96,165,250,0.08) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container about-hero-grid">

          {/* Image col */}
          <div className="about-hero-img-col">
            <div className="ah-main-img" style={{ position: 'absolute', top: 0, left: 0, right: 36, bottom: 36, borderRadius: 22, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,0.4)' }}>
              <img
                src={about12}
                alt="U-CGS professional team"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,28,44,0.55) 0%, transparent 60%)' }} />
            </div>
            {/* Float badge — 500+ clients */}
            <div className="about-hero-float" style={{ position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: 14, padding: '16px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.22)', minWidth: 160 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--primary)' }}>500+</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Happy Clients</div>
              <div style={{ display: 'flex', gap: 3, marginTop: 5 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 11 }}>★</span>)}
              </div>
            </div>
          </div>

          {/* Text col */}
          <div className="about-hero-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fbbf24', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#fbbf24', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>About U-CGS</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px,4.5vw,52px)', fontWeight: 800, color: 'white', lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.5px' }}>
              A Decade of<br />Trusted Outsourcing<br />
              <span style={{ color: 'var(--primary-light)' }}>Excellence</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
              U-Connect Global Services is a dynamic team of business solutions experts committed to empowering clients to focus on their core strengths.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
              <Link to="/contact" className="btn-primary">Work With Us</Link>
              <Link to="/record-retrieval-services" style={{ border: '2px solid rgba(255,255,255,0.55)', color: 'white', padding: '11px 26px', borderRadius: 8, fontWeight: 600, fontSize: 15, display: 'inline-block', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                Our Services
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {['🏅 ISO 27001:2013', '🔒 HIPAA Compliant', '✅ 10+ Years'].map((b, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave spacer so image bleeds into next section nicely */}
        <div style={{ height: 60 }} />
      </section>

      {/* MISSION & VISION */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              { icon: '🔭', title: 'Our Mission', text: 'To enable our clients to focus on their core strengths by delivering exceptional, cost-effective outsourcing solutions that drive growth, efficiency, and competitive advantage.' },
              { icon: '🌟', title: 'Our Vision', text: 'To be the most trusted BPO partner for Healthcare, Legal, and Insurance industries globally — known for excellence, security, and transformative impact.' },
              { icon: '💡', title: 'Our Approach', text: 'Risk-free transition, hands-on focus, cultural alignment, and local relationship managers ensure every engagement is seamless, transparent, and results-driven.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: 16,
                    background: 'color-mix(in srgb, var(--primary) 12%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--primary) 20%, transparent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, margin: '0 auto 20px'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 20, marginBottom: 12 }}>{item.title}</h3>
                  <div className="gradient-line" style={{ margin: '0 auto 16px' }} />
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: 15 }}>{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="about-story-grid">
            <FadeIn delay={0.1}>
              <div className="about-story-img" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 56px rgba(0,0,0,0.14)' }}>
                  <img
                    src={about11}
                    alt="Professional team at work"
                    style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, color-mix(in srgb, var(--navy) 60%, transparent) 0%, transparent 55%)' }} />
                </div>
                <div className="about-float-badge" style={{
                  position: 'absolute', bottom: 20, right: -16,
                  background: 'var(--gradient-primary)',
                  borderRadius: 14, padding: '16px 22px',
                  color: 'white', boxShadow: '0 12px 32px rgba(0,0,0,0.25)'
                }}>
                  <div style={{ fontWeight: 800, fontSize: 28 }}>500+</div>
                  <div style={{ fontSize: 12, opacity: 0.85 }}>Happy Clients</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div>
                <span className="section-tag">Our Story</span>
                <h2 className="section-title">Built on Trust, Driven by Results</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 20 }}>
                  At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the highest standards in data management and service delivery. With close to a decade of practical outsourcing knowledge, U-CGS brings valuable expertise to the table.
                </p>
                <p className="section-sub" style={{ marginBottom: 32 }}>
                  We take pride not in claiming to be the best, but in delivering exceptional, cost-effective, and professional solutions that exceed expectations.
                </p>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  {[
                    { num: '10+', label: 'Years Experience', bg: 'var(--primary)' },
                    { num: '500+', label: 'Happy Clients', bg: 'var(--warning)', textColor: '#0f172a' },
                    { num: '99%', label: 'Retention Rate', bg: '#10b981' },
                  ].map(({ num, label, bg, textColor }, i) => (
                    <div key={i} style={{ background: bg, color: textColor || 'white', borderRadius: 12, padding: '16px 22px', textAlign: 'center', minWidth: 90 }}>
                      <div style={{ fontSize: 26, fontWeight: 800 }}>{num}</div>
                      <div style={{ fontSize: 12, opacity: 0.88 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="about-story-grid">
            <FadeIn>
              <div>
                <span className="section-tag">Global Presence</span>
                <h2 className="section-title">US & India — Serving the World</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 28 }}>
                  With offices in Cheyenne, Wyoming and Ahmedabad, India, we deliver round-the-clock service across time zones — giving our clients the responsiveness of a local team and the scale of a global operation.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { flag: '🇺🇸', loc: 'USA', addr: '1021 E Lincolnway Suite 9864, Cheyenne, WY 82001' },
                    { flag: '🇮🇳', loc: 'India', addr: 'A 1003-1005, The Gateway, Nikol, Ahmedabad - 380049' },
                  ].map((o, i) => (
                    <div key={i} style={{
                      background: 'var(--light-2)',
                      border: '1px solid var(--border)',
                      borderRadius: 12, padding: '16px 20px',
                      display: 'flex', gap: 14, alignItems: 'flex-start'
                    }}>
                      <span style={{ fontSize: 28, flexShrink: 0 }}>{o.flag}</span>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>{o.loc}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{o.addr}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24 }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'color-mix(in srgb, var(--primary) 12%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--primary) 25%, transparent)',
                    borderRadius: 10, padding: '10px 18px',
                    color: 'var(--primary)', fontWeight: 700, fontSize: 13
                  }}>
                    🏅 ISO 27001:2013 Certified · HIPAA Compliant
                  </span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="about-story-img" style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 56px rgba(0,0,0,0.12)' }}>
                <img
                  src={about13}
                  alt="Global business team"
                  style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--primary) 18%, transparent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, flexShrink: 0
                  }}>{v.icon}</div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 6 }}>{v.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Our Journey</span>
              <h2 className="section-title">Milestones That Define Us</h2>
            </FadeIn>
          </div>
          <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
            <div className="timeline-line" />
            {milestones.map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: 32, marginBottom: 36, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 58, height: 58, borderRadius: '50%',
                    background: i % 2 === 0 ? 'var(--primary)' : 'var(--warning)',
                    color: i % 2 === 0 ? 'white' : '#0f172a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 13, flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)', zIndex: 1
                  }}>
                    {m.year}
                  </div>
                  <div className="card" style={{ flex: 1, padding: '20px 24px' }}>
                    <h4 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 6 }}>{m.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Our Team</span>
              <h2 className="section-title">The People Behind U-CGS</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                A talented team guided by experienced professionals dedicated to your success.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 40, boxShadow: '0 12px 40px rgba(0,0,0,0.1)', position: 'relative', height: 260 }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="U-CGS team collaboration"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, color-mix(in srgb, var(--navy) 85%, transparent) 0%, color-mix(in srgb, var(--navy) 30%, transparent) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', top: '50%', left: 40, transform: 'translateY(-50%)' }}>
                <div style={{ color: 'white', fontWeight: 800, fontSize: 24, marginBottom: 8 }}>A Team That Delivers</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, maxWidth: 400 }}>Passionate professionals across two continents working as one unified team for your success.</div>
              </div>
            </div>
          </FadeIn>
          <div className="about-team-grid">
            {team.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 36, margin: '0 auto 20px',
                    boxShadow: '0 8px 24px color-mix(in srgb, var(--primary) 30%, transparent)'
                  }}>{t.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 18, marginBottom: 4 }}>{t.name}</h3>
                  <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 13, marginBottom: 14, letterSpacing: 0.5 }}>{t.role}</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 300 }}>
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80"
              alt="Healthcare outsourcing professionals"
              style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, color-mix(in srgb, var(--navy) 90%, transparent) 0%, color-mix(in srgb, var(--primary) 70%, transparent) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
              <div style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(20px,4vw,32px)', marginBottom: 14 }}>
                Dedicated to Your Success, Every Day
              </div>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, maxWidth: 580, lineHeight: 1.7, marginBottom: 28 }}>
                Our team of certified specialists across Healthcare, Legal, and Insurance domains brings precision, speed, and care to every engagement.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
                {['🏅 ISO Certified', '🔒 HIPAA Compliant', '⭐ 99% Retention', '🌍 US & India Teams'].map((b, i) => (
                  <span key={i} style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 20, padding: '7px 16px',
                    color: 'white', fontSize: 13, fontWeight: 600
                  }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gradient-primary)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title-white" style={{ marginBottom: 16 }}>Ready to Partner with U-CGS?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>
              Let's discuss how we can help you focus on what matters most — growing your business.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/record-retrieval-services" className="btn-outline-white">Explore Services</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}