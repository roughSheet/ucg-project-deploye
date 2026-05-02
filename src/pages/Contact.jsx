import { useState, useEffect, useRef } from 'react'

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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const contactInfo = [
    { icon: '📍', title: 'USA Office', lines: ['1021 E Lincolnway Suite 9864', 'Cheyenne, WY 82001, United States'] },
    { icon: '📍', title: 'India Office', lines: ['A 1003-1005, The Gateway, Nikol', 'Ahmedabad - 380049, Gujarat, India'] },
    { icon: '✉️', title: 'Email Us', lines: ['Info@u-cgs.com'] },
    { icon: '📞', title: 'Call Us', lines: ['+1 307-213-4034 (US)', '+91 88666 42472 (India)'] },
  ]

  return (
    <div>
      <style>{`
        @keyframes ctHeroIn { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ctImgIn  { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:0.45} }

        .ct-hero-wrap {
          background: var(--gradient-primary);
          padding-top: 90px;
          overflow: hidden;
          position: relative;
        }
        .ct-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
          padding: 44px 24px 0;
          position: relative; z-index: 1;
        }
        .ct-hero-text { order: 1; animation: ctHeroIn 0.8s ease forwards; }
        .ct-hero-img  { order: 2; position: relative; height: 400px; animation: ctImgIn 1s ease 0.3s both; }

        .ct-form-input {
          width: 100%;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
          font-family: inherit;
          background: white;
          color: var(--text-main);
        }
        .ct-form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 15%, transparent);
        }

        .ct-contact-card {
          background: white;
          border-radius: 16px;
          padding: 28px 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          border: 1px solid var(--border);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .ct-contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.14);
        }

        .ct-info-icon {
          background: color-mix(in srgb, var(--primary) 10%, transparent);
        }
        .ct-info-icon-alt {
          background: color-mix(in srgb, var(--warning) 15%, transparent);
        }

        .ct-call-card {
          background: var(--gradient-primary);
          border-radius: 16px;
          padding: 28px;
          color: white;
          margin-top: 32px;
        }

        .ct-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .ct-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 28px 16px 0 !important;
          }
          .ct-hero-text { order: 2 !important; }
          .ct-hero-img  { order: 1 !important; height: 220px !important; }
          .ct-hero-float { display: none !important; }
          .ct-form-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>

      {/* ── HERO with image ── */}
      <section className="ct-hero-wrap">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container ct-hero-grid">

          {/* Image col */}
          <div className="ct-hero-img">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 36, bottom: 36, borderRadius: 22, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,0.4)' }}>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Contact U-CGS team"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,28,44,0.6) 0%, transparent 60%)' }} />
            </div>
            {/* Float response badge */}
            <div className="ct-hero-float" style={{ position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: 14, padding: '16px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.22)', minWidth: 160 }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--primary)' }}>24hr</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Response Time</div>
              <div style={{ display: 'flex', gap: 3, marginTop: 5 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 11 }}>★</span>)}
              </div>
            </div>
          </div>

          {/* Text col */}
          <div className="ct-hero-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 24, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fbbf24', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#fbbf24', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Get In Touch</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px,4.5vw,52px)', fontWeight: 800, color: 'white', lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.5px' }}>
              Let's Start a<br />
              <span style={{ color: 'var(--primary-light)' }}>Conversation</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
              Ready to streamline your operations? Our team is here to help you find the perfect outsourcing solution — with a response guaranteed within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {['🆓 Free Consultation', '🔒 Fully Confidential', '🌍 US & India'].map((b, i) => (
                <span key={i} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: 60 }} />
      </section>

      {/* CONTACT CARDS — overlap lifted from hero */}
      <section className="section-with-lifted-card" style={{ background: 'white', paddingBottom: 0 }}>
        <div className="container">
          <div className="lifted-stats-card" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20
          }}>
            {contactInfo.map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="ct-contact-card">
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 8, fontSize: 15 }}>{c.title}</div>
                  {c.lines.map((l, j) => (
                    <div key={j} style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{l}</div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section>
        <div className="container">
          <div className="ct-form-grid">

            {/* Form */}
            <FadeIn>
              <div>
                <span className="section-tag">Send a Message</span>
                <h2 className="section-title">How Can We Help?</h2>
                <div className="gradient-line" />

                {submitted ? (
                  <div style={{ background: '#ecfdf5', border: '1px solid #6ee7b7', borderRadius: 16, padding: 40, textAlign: 'center' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                    <h3 style={{ color: '#065f46', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ color: '#047857' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {[
                      { key: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Smith' },
                      { key: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@company.com' },
                      { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ display: 'block', fontWeight: 600, color: 'var(--text-main)', fontSize: 14, marginBottom: 6 }}>{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          className="ct-form-input"
                        />
                      </div>
                    ))}

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: 'var(--text-main)', fontSize: 14, marginBottom: 6 }}>Service Interested In</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="ct-form-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Select a service...</option>
                        <option>Record Retrieval Services</option>
                        <option>Medical Coding Services</option>
                        <option>Revenue Cycle Management</option>
                        <option>Medical Records Summarization</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: 'var(--text-main)', fontSize: 14, marginBottom: 6 }}>Message *</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your needs..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="ct-form-input"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="btn-secondary"
                      style={{ fontSize: 16, padding: '14px', textAlign: 'center', width: '100%', opacity: loading ? 0.7 : 1 }}
                    >
                      {loading ? 'Sending...' : 'Send Message →'}
                    </button>
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Info side */}
            <FadeIn delay={0.2}>
              <div>
                <span className="section-tag">Why Reach Out?</span>
                <h2 className="section-title">We Respond Within 24 Hours</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 32 }}>
                  Our team is ready to understand your specific needs and craft a tailored solution for your business.
                </p>

                {[
                  { icon: '🆓', title: 'Free Consultation', desc: 'No-obligation discovery call to understand your needs.' },
                  { icon: '⚡', title: 'Quick Onboarding', desc: 'Risk-free transition with dedicated onboarding support.' },
                  { icon: '🔒', title: 'Fully Confidential', desc: 'All discussions protected under strict NDA agreements.' },
                  { icon: '🌍', title: 'Works Across Time Zones', desc: 'US and India offices ensure round-the-clock availability.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: i % 2 === 0
                        ? 'color-mix(in srgb, var(--primary) 10%, transparent)'
                        : 'color-mix(in srgb, var(--warning) 15%, transparent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 22, flexShrink: 0,
                      border: i % 2 === 0
                        ? '1px solid color-mix(in srgb, var(--primary) 20%, transparent)'
                        : '1px solid color-mix(in srgb, var(--warning) 25%, transparent)'
                    }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>{item.title}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}

                {/* Call card — fully themed */}
                <div className="ct-call-card">
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Prefer to call directly?</div>
                  <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>+1 307-213-4034</div>
                  <div style={{ opacity: 0.8, fontSize: 14 }}>Mon – Fri, 9 AM to 6 PM EST</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}