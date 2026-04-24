import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

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
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1a56db 70%, #3b82f6 100%)',
        paddingTop: 140, paddingBottom: 96, textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-tag-amber">About Us</span>
          <h1 className="section-title-white" style={{ maxWidth: 700, margin: '0 auto 20px' }}>
            A Decade of Trusted Outsourcing Excellence
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, lineHeight: 1.75, maxWidth: 620, margin: '0 auto 36px' }}>
            U-Connect Global Services is a dynamic team of business solutions experts committed to empowering clients to focus on their core strengths.
          </p>
          <Link to="/contact" className="btn-primary">Work With Us</Link>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              { icon: '🔭', title: 'Our Mission', color: '#1a56db', text: 'To enable our clients to focus on their core strengths by delivering exceptional, cost-effective outsourcing solutions that drive growth, efficiency, and competitive advantage.' },
              { icon: '🌟', title: 'Our Vision', color: '#f59e0b', text: 'To be the most trusted BPO partner for Healthcare, Legal, and Insurance industries globally — known for excellence, security, and transformative impact.' },
              { icon: '💡', title: 'Our Approach', color: '#10b981', text: 'Risk-free transition, hands-on focus, cultural alignment, and local relationship managers ensure every engagement is seamless, transparent, and results-driven.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 20px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 20, marginBottom: 12 }}>{item.title}</h3>
                  <div className="gradient-line" style={{ margin: '0 auto 16px' }} />
                  <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: 15 }}>{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <FadeIn>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">Built on Trust, Driven by Results</h2>
              <div className="gradient-line" />
              <p className="section-sub" style={{ marginBottom: 20 }}>
                At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the highest standards in data management and service delivery. With close to a decade of practical outsourcing knowledge, U-CGS brings valuable expertise to the table.
              </p>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                We take pride not in claiming to be the best, but in delivering exceptional, cost-effective, and professional solutions that exceed expectations. Our dedicated professionals work tirelessly to meet client requirements.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ background: '#1a56db', color: 'white', borderRadius: 12, padding: '16px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800 }}>10+</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>Years Experience</div>
                </div>
                <div style={{ background: '#f59e0b', color: '#0f172a', borderRadius: 12, padding: '16px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800 }}>500+</div>
                  <div style={{ fontSize: 13 }}>Happy Clients</div>
                </div>
                <div style={{ background: '#10b981', color: 'white', borderRadius: 12, padding: '16px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800 }}>99%</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>Retention Rate</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ position: 'relative' }}>
                <div style={{ background: 'linear-gradient(135deg, #1a56db, #3b82f6)', borderRadius: 24, padding: 48, color: 'white' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🌐</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Global Presence</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { flag: '🇺🇸', loc: 'USA', addr: '1021 E Lincolnway Suite 9864, Cheyenne, WY 82001' },
                      { flag: '🇮🇳', loc: 'India', addr: 'A 1003-1005, The Gateway, Nikol, Ahmedabad - 380049' },
                    ].map((o, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '16px 20px', display: 'flex', gap: 14 }}>
                        <span style={{ fontSize: 28 }}>{o.flag}</span>
                        <div>
                          <div style={{ fontWeight: 700, marginBottom: 4 }}>{o.loc}</div>
                          <div style={{ fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>{o.addr}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ position: 'absolute', top: -16, right: -16, background: '#f59e0b', borderRadius: 12, padding: '12px 20px', color: '#0f172a', fontWeight: 700, fontSize: 13, boxShadow: '0 8px 24px rgba(245,158,11,0.4)' }}>
                  🏅 ISO 27001:2013
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* VALUES */}
      <section>
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
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{v.icon}</div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>{v.title}</h4>
                    <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Our Journey</span>
              <h2 className="section-title">Milestones That Define Us</h2>
            </FadeIn>
          </div>
          <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg,#1a56db,#3b82f6,#f59e0b)' }} />
            {milestones.map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: 32, marginBottom: 36, alignItems: 'flex-start' }}>
                  <div style={{ width: 58, height: 58, borderRadius: '50%', background: i % 2 === 0 ? '#1a56db' : '#f59e0b', color: i % 2 === 0 ? 'white' : '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0, boxShadow: '0 4px 16px rgba(0,0,0,0.15)', zIndex: 1 }}>
                    {m.year}
                  </div>
                  <div className="card" style={{ flex: 1, padding: '20px 24px' }}>
                    <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>{m.title}</h4>
                    <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Our Team</span>
              <h2 className="section-title">The People Behind U-CGS</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>A talented team guided by experienced professionals dedicated to your success.</p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {team.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#1a56db,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto 20px' }}>{t.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 18, marginBottom: 4 }}>{t.name}</h3>
                  <div style={{ color: '#1a56db', fontWeight: 600, fontSize: 13, marginBottom: 14, letterSpacing: 0.5 }}>{t.role}</div>
                  <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1a56db)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title-white" style={{ marginBottom: 16 }}>Ready to Partner with U-CGS?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>Let's discuss how we can help you focus on what matters most — growing your business.</p>
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