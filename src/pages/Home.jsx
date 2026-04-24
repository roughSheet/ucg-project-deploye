import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = 1; el.style.transform = 'translateY(0)'; obs.unobserve(el) }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} style={{ opacity: 0, transform: 'translateY(30px)', transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s` }}>{children}</div>
}

const stats = [
  { number: '10+', label: 'Years Experience', icon: '🏆' },
  { number: '500+', label: 'Clients Served', icon: '🤝' },
  { number: '99%', label: 'Client Retention', icon: '⭐' },
  { number: '24/7', label: 'Support Available', icon: '🔄' },
]

const whyUs = [
  { icon: '🏆', title: 'Industry Expertise', desc: 'Proven operational performance by talented resources, guided by an experienced professional team with deep knowledge of Healthcare.' },
  { icon: '🌐', title: 'Network Availability', desc: 'Redundant infrastructure, onshore data storage in highly secure locations, purpose-built for real-time applications.' },
  { icon: '🤝', title: 'Seamless Client Experience', desc: 'Risk-free transition, hands-on focus, and cultural alignment through local Client Relationship Managers.' },
  { icon: '⏱️', title: 'On-Time Service', desc: 'Proven track record of consistently delivering timely and reliable services, meeting client expectations with precision.' },
  { icon: '🔒', title: 'Security & Compliance', desc: 'ISO 27001:2013 certified for Information Security and Management Systems (ISMS).' },
  { icon: '👥', title: 'Availability of Resources', desc: 'State-of-the-art workspace with scalable operations and a vast talent pool of skilled agents.' },
]

const industries = [
  { icon: '⚖️', title: 'Legal', desc: 'Enhance efficiency with expert legal outsourcing — document review, legal research, record retrieval, and litigation support.', color: '#1e40af', light: '#eff6ff', link: '/record-retrieval-services' },
  { icon: '🛡️', title: 'Insurance', desc: 'Streamline operations with expert back-office support — claims processing, data entry, and record retrieval services.', color: '#065f46', light: '#ecfdf5', link: '/revenue-cycle-management' },
  { icon: '🏥', title: 'Healthcare', desc: 'Optimize revenue cycles with end-to-end solutions — medical billing, coding, claims processing, and payment posting.', color: '#0f766e', light: '#f0fdfa', link: '/medical-billing-coding' },
]

const testimonials = [
  { text: 'I am truly impressed with the work of U-CGS. Your excellent outsourcing services have given us time to focus on the growth of our Business. I would highly recommend your services.', name: 'CEO', company: 'Record Retrieval Firm' },
  { text: 'My experience with the U-CGS Team has been extremely positive! While significantly reducing our cost of doing business, U-CGS professionalism and efficiency has been unsurpassed!', name: 'CEO', company: 'Medical Billing Firm' },
]

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #0f766e 60%, #0d9488 100%)',
        position: 'relative', overflow: 'hidden', paddingTop: 100, paddingBottom: 60
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute', borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              width: `${140 + i * 80}px`, height: `${140 + i * 80}px`,
              top: `${8 + i * 13}%`, right: `${-8 + i * 9}%`,
              animation: `floatHero ${5 + i}s ease-in-out infinite alternate`
            }} />
          ))}
        </div>
        <style>{`
          @keyframes floatHero { from{transform:translateY(0)} to{transform:translateY(-18px)} }
          @keyframes heroIn { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        `}</style>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '60px 24px' }}>
          <div style={{ animation: 'heroIn 0.85s ease forwards' }}>
            <div style={{ display: 'inline-block', background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)', color: '#fcd34d', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 18px', borderRadius: 20, marginBottom: 24 }}>
              Trusted BPO Consultant & Solutions Provider
            </div>
            <h1 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 800, color: 'white', lineHeight: 1.12, margin: '0 0 24px', letterSpacing: '-1px' }}>
              Empowering Your Business<br />
              <span style={{ color: '#f59e0b' }}>With Seamless Outsourcing</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, maxWidth: 620, margin: '0 auto 44px' }}>
              Achieve exponential growth by outsourcing non-core functions — Record Retrieval, Revenue Cycle Management, Medical Coding, and more.
            </p>
            {/* Buttons — amber + white-outline, both clearly visible on dark bg */}
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 38px' }}>Get Started Today</Link>
              <Link to="/about" className="btn-outline-white" style={{ fontSize: 16, padding: '15px 38px' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '72px 0', background: 'white', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center', padding: '36px 24px', background: 'white', borderRadius: 16, border: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                  <div style={{ fontSize: 40, fontWeight: 800, color: '#0d9488', lineHeight: 1 }}>{s.number}</div>
                  <div style={{ fontSize: 14, color: '#6b7280', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeIn>
              <div style={{ background: 'linear-gradient(135deg,#0f766e,#0d9488)', borderRadius: 24, padding: 48, color: 'white' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🏢</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 14 }}>Who We Are</h3>
                <p style={{ lineHeight: 1.75, opacity: 0.9, fontSize: 15 }}>At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the highest standards in data management and service delivery. With close to a decade of practical outsourcing knowledge, we bring valuable expertise to the table.</p>
                <div style={{ marginTop: 28, padding: '16px 20px', background: 'rgba(255,255,255,0.15)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 24 }}>🏅</span>
                  <div>
                    <div style={{ fontWeight: 700 }}>ISO 27001:2013 Certified</div>
                    <div style={{ fontSize: 13, opacity: 0.8 }}>Information Security Management</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <span className="section-tag">About U-CGS</span>
                <h2 className="section-title">Enabling Clients to Focus on Their Strengths</h2>
                <div style={{ height: 4, width: 60, background: 'linear-gradient(90deg,#0d9488,#f59e0b)', borderRadius: 2, marginBottom: 20 }} />
                <p className="section-sub" style={{ marginBottom: 20 }}>We take pride not in claiming to be the best, but in delivering exceptional, cost-effective, and professional solutions that exceed expectations.</p>
                <p className="section-sub" style={{ marginBottom: 36 }}>Our dedicated professionals work tirelessly to meet client requirements, ensuring seamless financial and transactional management with clarity and efficiency.</p>
                <Link to="/about" className="btn-secondary">Learn About Us</Link>
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{`@media(max-width:768px){.home-about-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── WHY CHOOSE US — extra top padding to separate from above ── */}
      <section style={{ background: 'white', paddingTop: 96 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <FadeIn>
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title">Why Choose U-Connect Global Services?</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Six reasons why 500+ clients trust U-CGS with their most critical operations.</p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {whyUs.map((w, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="card" style={{ borderTop: '3px solid #0d9488' }}>
                  <div style={{ fontSize: 34, marginBottom: 14 }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', marginBottom: 10, fontSize: 16 }}>{w.title}</h3>
                  <p style={{ color: '#6b7280', lineHeight: 1.65, fontSize: 14 }}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES — clear section background separation ── */}
      <section style={{ background: '#f0fdfa', paddingTop: 96 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <FadeIn>
              <span className="section-tag">Industries We Serve</span>
              <h2 className="section-title">Comprehensive Industry Expertise</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>We specialize in understanding your unique business needs and delivering customized workforce solutions.</p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {industries.map((ind, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.09)', background: 'white', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.15)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.09)' }}>
                  <div style={{ background: ind.light, padding: '36px 32px', borderBottom: `3px solid ${ind.color}` }}>
                    <div style={{ fontSize: 48, marginBottom: 12 }}>{ind.icon}</div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: ind.color }}>{ind.title}</h3>
                  </div>
                  <div style={{ padding: '24px 32px' }}>
                    <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: 14 }}>{ind.desc}</p>
                    <Link to={ind.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#0d9488', fontWeight: 700, marginTop: 16, fontSize: 14, transition: 'gap 0.2s' }}>Learn More →</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#0f766e)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag-amber">Testimonials</span>
              <h2 className="section-title-white">What Our Clients Say</h2>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: 20, padding: 36, border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div style={{ fontSize: 44, color: '#f59e0b', lineHeight: 1, marginBottom: 18, fontFamily: 'Georgia, serif' }}>"</div>
                  <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, marginBottom: 28, fontStyle: 'italic', fontSize: 15 }}>{t.text}</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#0d9488,#14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 16 }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: 14 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: '#f59e0b' }}>{t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — separated from footer with padding + own background ── */}
      <section style={{ background: 'white', padding: '96px 0' }}>
        <div className="container">
          <FadeIn>
            {/* Rounded card — clearly distinct from square footer below */}
            <div style={{ background: 'linear-gradient(135deg,#0f766e,#0d9488)', borderRadius: 28, padding: '72px 48px', color: 'white', textAlign: 'center', boxShadow: '0 24px 64px rgba(13,148,136,0.35)' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
              <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, marginBottom: 16, color: 'white' }}>Ready to Transform Your Business?</h2>
              <p style={{ opacity: 0.88, fontSize: 17, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
                Partner with U-CGS and experience the difference that expert outsourcing can make for your team.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>Book a Free Consultation</Link>
                <Link to="/about" className="btn-outline-white" style={{ fontSize: 16, padding: '16px 40px' }}>Learn About Us</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}