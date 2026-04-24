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
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a,#1a56db,#3b82f6)', paddingTop: 140, paddingBottom: 80, textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag-amber">Get In Touch</span>
          <h1 className="section-title-white" style={{ maxWidth: 600, margin: '0 auto 16px' }}>Let's Start a Conversation</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, maxWidth: 520, margin: '0 auto' }}>
            Ready to streamline your operations? Our team is here to help you find the perfect outsourcing solution.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginTop: -48, position: 'relative', zIndex: 10 }}>
            {contactInfo.map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ background: 'white', borderRadius: 16, padding: '28px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                  <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 8, fontSize: 15 }}>{c.title}</div>
                  {c.lines.map((l, j) => <div key={j} style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>{l}</div>)}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
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
                        <label style={{ display: 'block', fontWeight: 600, color: '#374151', fontSize: 14, marginBottom: 6 }}>{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          style={{ width: '100%', border: '1.5px solid #e5e7eb', borderRadius: 10, padding: '12px 16px', fontSize: 15, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                          onFocus={e => e.target.style.borderColor = '#1a56db'}
                          onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                        />
                      </div>
                    ))}

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: '#374151', fontSize: 14, marginBottom: 6 }}>Service Interested In</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        style={{ width: '100%', border: '1.5px solid #e5e7eb', borderRadius: 10, padding: '12px 16px', fontSize: 15, outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                        <option value="">Select a service...</option>
                        <option>Record Retrieval Services</option>
                        <option>Medical Coding Services</option>
                        <option>Revenue Cycle Management</option>
                        <option>Medical Records Summarization</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: '#374151', fontSize: 14, marginBottom: 6 }}>Message *</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your needs..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ width: '100%', border: '1.5px solid #e5e7eb', borderRadius: 10, padding: '12px 16px', fontSize: 15, outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                        onFocus={e => e.target.style.borderColor = '#1a56db'}
                        onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>

                    <button onClick={handleSubmit} disabled={loading} className="btn-secondary" style={{ fontSize: 16, padding: '14px', textAlign: 'center', width: '100%', opacity: loading ? 0.7 : 1 }}>
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
                <p className="section-sub" style={{ marginBottom: 32 }}>Our team is ready to understand your specific needs and craft a tailored solution for your business.</p>

                {[
                  { icon: '🆓', title: 'Free Consultation', desc: 'No-obligation discovery call to understand your needs.' },
                  { icon: '⚡', title: 'Quick Onboarding', desc: 'Risk-free transition with dedicated onboarding support.' },
                  { icon: '🔒', title: 'Fully Confidential', desc: 'All discussions protected under strict NDA agreements.' },
                  { icon: '🌍', title: 'Works Across Time Zones', desc: 'US and India offices ensure round-the-clock availability.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: i % 2 === 0 ? '#eff6ff' : '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{item.title}</div>
                      <div style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}

                <div style={{ background: 'linear-gradient(135deg,#1a56db,#3b82f6)', borderRadius: 16, padding: 28, color: 'white', marginTop: 32 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Prefer to call directly?</div>
                  <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>+1 307-213-4034</div>
                  <div style={{ opacity: 0.8, fontSize: 14 }}>Mon – Fri, 9 AM to 6 PM EST</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </div>
  )
}