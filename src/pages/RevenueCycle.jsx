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

const frontEndServices = [
  { icon: '📅', title: 'Patient Scheduling & Appointment', desc: 'Helping healthcare providers manage patient visits efficiently, ensuring timely scheduling and reducing no-shows to maximize provider utilization.' },
  { icon: '✅', title: 'Eligibility Verification', desc: 'Verifying patient insurance coverage, eligibility, benefits, and policy details before providing medical services to ensure accurate billing and minimize claim denials.' },
  { icon: '👤', title: 'Patient Registration / Demographics', desc: 'Accurately capturing patient demographics, contact information, insurance details, and other relevant data that is crucial for seamless billing and operations.' },
  { icon: '📝', title: 'Prior Authorization', desc: 'Obtaining necessary approvals from insurance carriers before delivering certain medical services, procedures, or medications to prevent claim denials and delays.' },
]

const midCycleServices = [
  { icon: '📨', title: 'Electronic Claims Submission', desc: 'Electronic submission enhances readability, minimizes processing delays, prevents rejections, provides instant carrier confirmation, enables easy tracking, and ensures faster reimbursements.' },
  { icon: '⚕️', title: 'Medical Coding & Audit Services', desc: 'Our certified coders ensure accurate CPT and ICD code assignment based on physician documentation, reducing denials and maximizing revenue through swift and accurate claim submissions.' },
  { icon: '💳', title: 'Charge Entry & Capture Services', desc: 'Precise charge entry minimizes claim denials, prevents revenue leakage, and maximizes reimbursements. Seamless collaboration between coding and charge entry teams guarantees accuracy and compliance.' },
  { icon: '📋', title: 'Clinical Documentation Review', desc: 'Our CDI solutions enhance the accuracy, completeness, and specificity of patient records, aligning documentation with operational and strategic goals for better reimbursement outcomes.' },
]

const backEndServices = [
  { icon: '💰', title: 'Payment Posting', desc: 'We efficiently post payments from EOBs, EFTs, credit cards, cash, and checks. For non-ERA payers, we manually record payments, reconcile deposits, and manage secondary insurance claims.' },
  { icon: '📞', title: 'AR Follow-Up', desc: 'Our AR team analyzes collections, identifies discrepancies, and takes corrective actions. We keep Days in AR below 30 and prioritize high-value and time-sensitive claims for maximum recovery.' },
  { icon: '🔄', title: 'Denial Management', desc: 'Our experts analyze denied and underpaid claims, identify root causes, and take corrective actions. We ensure timely resubmission and conduct proactive follow-ups to accelerate reimbursements.' },
  { icon: '👥', title: 'Patient Billing Collections', desc: 'After insurance processes the claim, any remaining balance for deductibles, coinsurance, or copayments is billed efficiently — with clear patient communication to maximize collection rates.' },
]

const results = [
  { label: 'Collection Rate Improvement', val: '+18%' },
  { label: 'Denial Rate Reduction', val: '-35%' },
  { label: 'Days in AR Reduction', val: '-12 days' },
  { label: 'Clean Claim Rate', val: '97%+' },
]

const whyItems = [
  { icon: '🏭', title: 'Industry Expertise', desc: 'A team of experienced professionals with in-depth expertise in RCM across healthcare and various industries. We bring years of experience to provide tailored solutions for your specific needs.' },
  { icon: '🎛️', title: 'Customized Services', desc: 'Every organization has distinct RCM needs. Our services are fully customizable to seamlessly adapt to your goals — whether you\'re a healthcare provider, payer, or business of any scale.' },
  { icon: '💻', title: 'Cutting-Edge Technology', desc: 'We harness cutting-edge technology and advanced solutions to optimize your revenue cycle. Our commitment to innovation ensures you benefit from the latest industry advancements.' },
  { icon: '🔒', title: 'Data Security', desc: 'Committed to the highest level of security and confidentiality for your financial and sensitive data. Our RCM services incorporate robust security measures at every step.' },
  { icon: '💲', title: 'Cost-Efficiency', desc: 'Cost-effective revenue cycle management solutions designed to deliver maximum value without compromising on quality — accessible to organizations of all sizes.' },
  { icon: '🕐', title: '24/7 Support', desc: 'With 24/7 global operations, we deliver fast, accurate solutions across time zones. Submit work at day\'s end and have it ready by morning for seamless operations.' },
]

const whyMatters = [
  { icon: '💵', title: 'Improved Cash Flow', desc: 'Effective RCM enhances cash flow, providing the financial stability needed for seamless operations and growth.' },
  { icon: '📉', title: 'Error Reduction', desc: 'Accurate revenue cycle management minimizes errors in claims, reduces denials, and speeds up the reimbursement process.' },
  { icon: '⚖️', title: 'Enhanced Compliance', desc: 'Adhering to RCM regulations and coding standards prevents legal risks, financial penalties, and protects your organization\'s reputation.' },
  { icon: '⚡', title: 'Operational Efficiency', desc: 'Optimized revenue cycle processes free up staff time, enabling organizations to focus on core operations and strategic growth.' },
]

export default function RevenueCycle() {
  return (
    <div>
      <style>{`
        .rcm-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .rcm-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .rcm-why-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .rcm-service-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        /* Horizontal image banner between service sections */
        .rcm-banner-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 18px;
          display: block;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .rcm-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .rcm-hero-results { order: -1; }
          .rcm-why-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .rcm-why-img { order: -1; }
          .rcm-why-cards { grid-template-columns: 1fr !important; }
          .rcm-banner-img { height: 160px !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--gradient-primary)', paddingTop: 140, paddingBottom: 96, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(96,165,250,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container">
          <div className="rcm-hero-grid">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="section-tag-light">Revenue Cycle Management</span>
              <h1 className="section-title-white" style={{ marginTop: 8 }}>
                End-to-End Revenue Cycle Management Services
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, lineHeight: 1.75, marginBottom: 20 }}>
                In today's dynamic healthcare landscape, efficient Revenue Cycle Management is essential for financial stability and operational success. Hospitals and physician groups often struggle with administrative burdens due to a shortage of skilled professionals — leading to revenue losses and inefficiencies.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
                At UCGS, our dedicated professionals provide industry-leading RCM services with exceptional accuracy. We manage the entire revenue cycle — from patient admission and treatment to post-discharge claims processing and account settlements.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Optimize My Revenue</Link>
                <Link to="/contact" className="btn-outline-white">Free RCM Assessment</Link>
              </div>
            </div>

            <FadeIn delay={0.2}>
              <div className="rcm-hero-results" style={{ position: 'relative' }}>
                {/* Hero image */}
                <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 16, boxShadow: '0 24px 64px rgba(0,0,0,0.35)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85&auto=format&fit=crop"
                    alt="Revenue cycle management dashboard"
                    style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 220, background: 'linear-gradient(to bottom, transparent 50%, rgba(11,28,44,0.5) 100%)', borderRadius: 20 }} />
                </div>
                {/* Results card */}
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 20,
                  padding: '28px 32px',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 20 }}>
                    💡 Average Client Results
                  </div>
                  {results.map(({ label, val }, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none'
                    }}>
                      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14 }}>{label}</span>
                      <span style={{ color: 'var(--warning)', fontWeight: 800, fontSize: 18 }}>{val}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Risk-free transition · Live in 2–3 weeks · Pilot project available</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FRONT-END SERVICES */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <FadeIn>
              <span className="section-tag">Front-End Revenue Cycle</span>
              <h2 className="section-title">Front-End Revenue Cycle Services</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Capturing clean data at the point of entry prevents downstream billing issues and reduces denials before they happen.
              </p>
            </FadeIn>
          </div>
          <div className="rcm-service-tabs">
            {frontEndServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--light-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 14, border: '1px solid var(--border)' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 8, fontSize: 15 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BANNER between front-end and mid-cycle */}
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <FadeIn>
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=85&auto=format&fit=crop"
            alt="Medical billing and revenue cycle team"
            className="rcm-banner-img"
            style={{ margin: '0 auto' }}
          />
        </FadeIn>
      </div>

      {/* MID-CYCLE SERVICES */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <FadeIn>
              <span className="section-tag">Mid-Revenue Cycle</span>
              <h2 className="section-title">Mid-Revenue Cycle Services</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Accurate coding, clean claims, and clinical documentation that maximize first-pass acceptance rates and accelerate reimbursement.
              </p>
            </FadeIn>
          </div>
          <div className="rcm-service-tabs">
            {midCycleServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'color-mix(in srgb, var(--accent) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 14, border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 8, fontSize: 15 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BACK-END SERVICES */}
      <section style={{ background: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <FadeIn>
              <span className="section-tag">Back-End Revenue Cycle</span>
              <h2 className="section-title">Back-End Revenue Cycle Services</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Aggressive yet professional AR follow-up, denial resolution, and payment posting to recover every dollar you're owed.
              </p>
            </FadeIn>
          </div>
          <div className="rcm-service-tabs">
            {backEndServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 14, border: '1px solid #bbf7d0' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 8, fontSize: 15 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — with real image */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="rcm-why-grid">
            <FadeIn>
              <div>
                <span className="section-tag">Why U-CGS RCM</span>
                <h2 className="section-title">Built to Recover Every Dollar</h2>
                <div className="gradient-line" />
                <p className="section-sub" style={{ marginBottom: 28 }}>
                  Our RCM specialists become an extension of your team — proactive, transparent, and relentless in recovering what you're owed. We simplify outsourcing, ensuring a smooth and efficient transition with quick onboarding.
                </p>
                <div className="rcm-why-cards">
                  {whyItems.map((w, i) => (
                    <div key={i} style={{
                      padding: '18px',
                      background: 'var(--light-2)',
                      borderRadius: 12,
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{ fontSize: 22, marginBottom: 8 }}>{w.icon}</div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 14, marginBottom: 6 }}>{w.title}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.55 }}>{w.desc}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary" style={{ marginTop: 28, display: 'inline-block' }}>
                  Get Free Assessment
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rcm-why-img">
                {/* Real image at the top of right column */}
                <div style={{ borderRadius: 18, overflow: 'hidden', marginBottom: 20, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=700&q=85&auto=format&fit=crop"
                    alt="Healthcare financial team discussing revenue cycle"
                    style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
                  />
                </div>

                <div style={{
                  background: 'var(--gradient-primary)',
                  borderRadius: 20,
                  padding: '28px 32px',
                  color: 'white',
                  marginBottom: 20
                }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 18, opacity: 0.9 }}>Full RCM Cycle Coverage</div>
                  {[
                    { step: '01', label: 'Patient Scheduling & Registration' },
                    { step: '02', label: 'Insurance Eligibility Verification' },
                    { step: '03', label: 'Prior Authorization' },
                    { step: '04', label: 'Medical Coding & CDI' },
                    { step: '05', label: 'Electronic Claims Submission' },
                    { step: '06', label: 'Payment Posting & AR Follow-Up' },
                    { step: '07', label: 'Denial Management' },
                    { step: '08', label: 'Reporting & Analytics' },
                  ].map(({ step, label }, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '8px 0',
                      borderBottom: i < 7 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                    }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 700, flexShrink: 0
                      }}>{step}</div>
                      <span style={{ fontSize: 13, opacity: 0.9 }}>{label}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'var(--light-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '18px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14
                }}>
                  <span style={{ fontSize: 32 }}>🏅</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: 14 }}>ISO 27001:2013 Certified</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 2 }}>HIPAA-compliant RCM across all workflows · 24/7 global ops</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY RCM MATTERS */}
      <section style={{ background: 'var(--light-2)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <FadeIn>
              <span className="section-tag">Why It Matters</span>
              <h2 className="section-title">Why Effective Revenue Cycle Management Matters</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                In today's dynamic financial landscape, efficient revenue cycle management is not just beneficial — it's essential.
              </p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {whyMatters.map((w, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 10, fontSize: 16 }}>{w.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'white', paddingTop: 56, paddingBottom: 56 }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20, textAlign: 'center' }}>
              {[
                { num: '97%+', label: 'Clean Claim Rate', icon: '✅' },
                { num: '-35%', label: 'Denial Reduction', icon: '📉' },
                { num: '+18%', label: 'Collections Lift', icon: '📈' },
                { num: '<30', label: 'Days in AR', icon: '🗓️' },
                { num: '500+', label: 'Clients Served', icon: '🤝' },
              ].map(({ num, label, icon }, i) => (
                <div key={i} style={{
                  background: 'var(--light-2)',
                  borderRadius: 14,
                  padding: '24px 16px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-soft)'
                }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--primary)' }}>{num}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{label}</div>
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
            <h2 className="section-title-white">Stop Leaving Money on the Table</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>
              Get a free RCM assessment and find out how much revenue your practice could be recovering. Request a free pilot project — no long-term commitment required.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>Get Free Assessment</Link>
              <Link to="/contact" className="btn-outline-white">Talk to an Expert</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
