import { useEffect, useRef } from 'react'
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
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(28px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const features = [
  { icon: '⚡', title: 'Cost Effective & Fast', desc: 'Our skilled professionals ensure a seamless and efficient retrieval process with proactive alternative solutions. We pride ourselves on competitive pricing with industry-leading fee negotiation skills — no compromise on quality.' },
  { icon: '🔒', title: 'HIPAA & HITECH Compliant', desc: 'Every retrieval strictly follows HIPAA regulations, the HITECH Act, and PHI policies — ensuring the utmost confidentiality and protection of information with encrypted transmission and secure storage.' },
  { icon: '📊', title: 'High Accuracy & Transparency', desc: 'Our healthcare professionals deliver the most accurate and efficient record retrieval services. With real-time updates, clients can track progress and stay informed at every stage of the process.' },
  { icon: '🌐', title: 'Technology-Driven Solution', desc: 'Our specialists work across Meta Records 4 (MR4), Meta Records 8 (MR8), Legacy, Wincopy, SmartAdvocate, and any client-based software — ensuring seamless integration and optimal performance.' },
  { icon: '💻', title: 'Digital Delivery & Organization', desc: 'Records delivered in TIFF or PDF format via secure portal — with Bates stamping, Redaction, OCR, Hyperlinking, and Bookmarking services. Easy download, organization, and sharing tools included.' },
  { icon: '🤝', title: 'Dedicated Account Support', desc: 'Assigned account managers who know your case requirements and build strong rapport with physician offices, clinics, hospitals, and various entities to expedite retrieval timelines.' },
]

const whoWeServe = [
  {
    icon: '🛡️',
    title: 'Life Insurance Companies',
    desc: 'We partner with all sectors of the life insurance industry — carriers, broker general agents, and independent agents — providing expertly prepared APS summaries in your preferred format so underwriters receive exactly the information they need.',
  },
  {
    icon: '⚖️',
    title: 'Law Firms',
    desc: 'Quick, reliable access to medical records that frees up critical staff time so legal professionals can focus on building strong cases. Our solution provides medical records and documentation quickly, accurately, and cost-effectively for all case types.',
  },
  {
    icon: '🏥',
    title: 'Health Plans',
    desc: 'U-CGS optimizes your medical record retrieval and quality review processes, enabling you to enhance quality ratings, secure reimbursements, and earn bonus payments. Efficiently identify, obtain, and analyze medical data with speed, ease, and security.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Data Entry & Validation',
    desc: 'Validate data by verifying web/fax/e-request forms, confirm HIPAA Authorization details (Name, DOB, SSN, Scope), locate provider phone and fax numbers, and conduct web research to fill any missing information.',
  },
  {
    step: '02',
    title: 'Initial Contact & Verification',
    desc: 'Verify doctor/facility name and address, check authorization requirements (HIPAA/LOR/Special Documents), confirm fee requirements, mode of payment, TAT, and communicate via call, email, fax, or portal per payer process.',
  },
  {
    step: '03',
    title: 'Status & Follow-Up',
    desc: 'Confirm receipt of request and prepayment, negotiate fees outside client\'s acceptable range, update call outcomes on client portals, and build strong rapport with physician offices and hospitals to accelerate retrieval.',
  },
  {
    step: '04',
    title: 'Quality Assurance',
    desc: 'Confirm Patient Name, DOB, and SSN against request and records received. Check image quality, rearrange records, delete blank/out-of-range pages, generate invoices as per client agreement, and convert to TIFF or PDF.',
  },
  {
    step: '05',
    title: 'Secure Delivery',
    desc: 'Deliver records via secure encrypted portal with Bates stamping, Redaction, OCR, Hyperlinking, and Bookmarking as required. Real-time status updates throughout so clients are always informed at every stage.',
  },
]

const stats = [
  { icon: '📋', num: '50K+', label: 'Records Retrieved' },
  { icon: '⚡', num: '48hr', label: 'Avg Turnaround' },
  { icon: '✅', num: '99.9%', label: 'Accuracy Rate' },
  { icon: '🏢', num: '200+', label: 'Provider Network' },
]

export default function RecordRetrieval() {
  return (
    <div>
      <style>{`
        .rr-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .rr-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .rr-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .rr-process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }
        .rr-serve-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .rr-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        /* Image cards used inside who-we-serve */
        .rr-serve-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          margin-bottom: 16px;
        }
        @media (max-width: 768px) {
          .rr-hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .rr-hero-img  { order: -1; }
          .rr-stats-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .rr-process-grid { grid-template-columns: 1fr 1fr !important; }
          .rr-detail-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .rr-process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--gradient-primary)', paddingTop: 140, paddingBottom: 96, position: 'relative', overflow: 'hidden' }}>
        {/* Background texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 30%, rgba(96,165,250,0.08) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div className="container">
          <div className="rr-hero-grid">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="section-tag-amber">Record Retrieval Services (APS)</span>
              <h1 className="section-title-white" style={{ marginTop: 8 }}>
                Fast, Accurate Medical<br />Record Retrieval
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, lineHeight: 1.75, marginBottom: 24 }}>
                Retrieving APS medical records is one of the most tedious and time-consuming tasks. U-CGS, a leading Healthcare BPO provider, offers customized solutions to remove the complexity — delivering high-value data, superior service, accurate medical information, and industry-leading turnaround times.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
                Our technology-driven solutions empower insurance carriers, self-insured corporations, third-party administrators, and law firms to reduce costs, increase record retrieval rates, make better-informed decisions, and accelerate claims resolution.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Request Records</Link>
                <Link to="/contact" className="btn-outline-white">Schedule a Call</Link>
              </div>
            </div>

            <FadeIn delay={0.2}>
              {/* Hero image + stat overlay */}
              <div className="rr-hero-img" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,0.4)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=85&auto=format&fit=crop"
                    alt="Medical record retrieval specialist"
                    style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,28,44,0.55) 0%, transparent 60%)' }} />
                </div>
                {/* Stat cards overlaid */}
                <div className="rr-stats-grid" style={{ marginTop: 16 }}>
                  {stats.map(({ icon, num, label }, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 14,
                      padding: '18px 16px',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.15)'
                    }}>
                      <div style={{ fontSize: 22 }}>{icon}</div>
                      <div style={{ fontSize: 24, fontWeight: 800, color: 'white', margin: '6px 0 3px' }}>{num}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE — with images inside cards */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <FadeIn>
              <span className="section-tag">Industries Served</span>
              <h2 className="section-title">Who We Help</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                We help Life Insurance companies, Law Firms, and Health Plans improve efficiency, increase record retrieval rates, and lower operational costs with market-leading accuracy, flexibility, and transparency.
              </p>
            </FadeIn>
          </div>
          <div className="rr-serve-grid">
            {[
              {
                ...whoWeServe[0],
                img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop',
                imgAlt: 'Life insurance industry professionals',
              },
              {
                ...whoWeServe[1],
                img: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80&auto=format&fit=crop',
                imgAlt: 'Law firm attorneys reviewing records',
              },
              {
                ...whoWeServe[2],
                img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80&auto=format&fit=crop',
                imgAlt: 'Health plan management team',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={item.img} alt={item.imgAlt} className="rr-serve-img" style={{ borderRadius: '12px 12px 0 0', marginBottom: 0, height: 180 }} />
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
                    <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">What Makes Us Better</span>
              <h2 className="section-title">Why Our Record Retrieval Stands Out</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Our primary goal extends beyond enhancing record retrieval rates — we strive to create a meaningful impact on your core business, driving operational efficiency and economic growth.
              </p>
            </FadeIn>
          </div>
          <div className="rr-features-grid">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: 'var(--light-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, marginBottom: 18,
                    border: '1px solid var(--border)'
                  }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10, fontSize: 16 }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Our Process</span>
              <h2 className="section-title">Strategies for Retrieving Medical Records</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                A structured, cost-effective, technology-driven solution built to address all your APS record retrieval challenges and increase overall business efficiency.
              </p>
            </FadeIn>
          </div>
          <div className="rr-process-grid">
            {processSteps.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  textAlign: 'center', padding: '32px 24px',
                  background: 'white', borderRadius: 16,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid var(--border)',
                  height: '100%'
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'var(--gradient-button)',
                    color: 'white', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 16,
                    margin: '0 auto 20px',
                    boxShadow: '0 4px 16px rgba(37,99,235,0.3)'
                  }}>{p.step}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10, fontSize: 15 }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65, textAlign: 'left' }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DETAIL + PERFORMANCE — with image */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="rr-detail-grid">
            <FadeIn>
              <div>
                <span className="section-tag">Requesting & Organizing Records</span>
                <h2 className="section-title">Built to Meet Your Deadlines</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 28 }}>
                  Our Medical Record Retrieval specialists work according to your client deadlines. Not only do we offer the best retrieval services — we also keep costs under control to boost your financial resources.
                </p>
                {[
                  { icon: '💰', title: 'Best-in-class fee negotiation', desc: 'We negotiate provider fees on your behalf, keeping costs within your acceptable range while maintaining strong relationships for faster retrieval.' },
                  { icon: '🔁', title: 'Parallel team structure', desc: 'Dedicated Data Entry, Initial Contact, Status Follow-up, and Quality Assurance teams work in tandem so no step creates a bottleneck.' },
                  { icon: '📁', title: 'Complete document processing', desc: 'Bates stamping, Redaction, OCR, Hyperlinking, and Bookmarking — everything you need for litigation-ready record packages.' },
                  { icon: '🖥️', title: 'Multi-platform expertise', desc: 'Our team is trained on MR4, MR8, Legacy, Wincopy, SmartAdvocate, and flexible enough to work on any client-based software.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 20, alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--light-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
                <Link to="/contact" className="btn-primary" style={{ marginTop: 8, display: 'inline-block' }}>
                  Get Started Today
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                {/* Real image */}
                <div style={{ borderRadius: 18, overflow: 'hidden', marginBottom: 20, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=85&auto=format&fit=crop"
                    alt="Healthcare data and record management"
                    style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Performance metrics */}
                <div style={{ background: 'var(--gradient-primary)', borderRadius: 20, padding: '32px', color: 'white', marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 24 }}>📈 Performance of Our Retrieval Services</div>
                  {[
                    { label: 'Record Retrieval Rate', val: '99%+', pct: 99 },
                    { label: 'Increase in Net Revenue', val: '+22%', pct: 75 },
                    { label: 'Accuracy Rate', val: '99.9%', pct: 99 },
                    { label: 'Avg Turnaround Time', val: '48hrs', pct: 85 },
                  ].map(({ label, val, pct }, i) => (
                    <div key={i} style={{ marginBottom: i < 3 ? 18 : 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span style={{ fontSize: 13, opacity: 0.88 }}>{label}</span>
                        <span style={{ fontWeight: 700, color: 'var(--warning)' }}>{val}</span>
                      </div>
                      <div style={{ height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 3 }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #60a5fa, #fbbf24)', borderRadius: 3 }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Software platforms */}
                <div style={{ background: 'var(--light-2)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 15, marginBottom: 14 }}>🖥️ Software Platforms We Work On</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {['Meta Records 4 (MR4)', 'Meta Records 8 (MR8)', 'Legacy', 'Wincopy', 'SmartAdvocate', 'Client-Based Software'].map((s, i) => (
                      <span key={i} style={{ background: 'white', border: '1px solid var(--border)', color: 'var(--primary-dark)', padding: '5px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ background: '#f9fafb', paddingTop: 48, paddingBottom: 48 }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {[
                { icon: '🏅', text: 'ISO 27001:2013 Certified' },
                { icon: '🔒', text: 'HIPAA & HITECH Compliant' },
                { icon: '🇺🇸', text: 'US-Based & Offshore Teams' },
                { icon: '⚡', text: '48hr Average Turnaround' },
              ].map((b, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: 'white', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '14px 20px'
                }}>
                  <span style={{ fontSize: 22 }}>{b.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary-dark)' }}>{b.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gradient-primary)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title-white">Ready to Streamline Your Record Retrieval?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36, fontSize: 17, maxWidth: 520, margin: '0 auto 36px' }}>
              Contact us today for a free consultation and discover how U-CGS can reduce your retrieval time by up to 60%.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>Get Started Today</Link>
              <Link to="/contact" className="btn-outline-white">Talk to an Expert</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
