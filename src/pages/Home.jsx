import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

      {/* ================================================
          HERO - Video Background, centered text
          ================================================ */}
      <section className="hero-video-section">
        <div className="hero-video-container">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="https://cdn.coverr.co/videos/coverr-doctor-walking-through-hospital-corridor-9142/1080p.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>

        <div className="hero-content-centered">
          <div className="hero-text-wrapper">
            <div className="hero-badge">⭐ TRUSTED BPO SOLUTIONS PROVIDER</div>
            <h1 className="hero-title">
              Empowering Your Business With{' '}
              <span className="text-accent">Seamless Outsourcing</span>
            </h1>
            <p className="hero-description">
              Achieve exponential growth by outsourcing non-core functions — Record Retrieval,
              Revenue Cycle Management, Medical Coding, and more.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Get Started Free →</Link>
              <Link to="/about" className="btn-secondary-hero" style={{ textDecoration: 'none' }}>Learn More</Link>
            </div>
            <div className="iso-floating-badge">
              <span style={{ fontSize: '28px' }}>🏆</span>
              <div>
                <div className="iso-cert-title">ISO Certified</div>
                <div className="iso-cert-num">27001:2013</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          STATS BAR
          ================================================ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon-top">⭐</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon-top">👥</div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon-top">💯</div>
              <div className="stat-number">99%</div>
              <div className="stat-label">Client Retention Rate</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon-top">📄</div>
              <div className="stat-number">50K+</div>
              <div className="stat-label">Records Processed Monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          SERVICES - Image on top, text below (mobile-first)
          ================================================ */}
      <section className="section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <p className="section-eyebrow">OUR SERVICES</p>
            <h2 className="section-title-white">Complete BPO Solutions for Healthcare</h2>
            <p className="section-subtitle">
              From record retrieval to revenue cycle management — we handle the complexity
              so you can focus on growth.
            </p>
          </div>

          <div className="services-4col">
            <div className="service-card-img">
              <div className="service-img-wrap">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop" alt="Record Retrieval" className="service-img" />
                <div className="service-img-icon">📋</div>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Record Retrieval Services</h3>
                <p className="service-card-desc">Fast, secure, and compliant medical record retrieval for legal, insurance, and healthcare organizations with HIPAA-compliant delivery.</p>
                <Link to="/record-retrieval-services" className="service-learn-more">Learn More →</Link>
              </div>
            </div>

            <div className="service-card-img">
              <div className="service-img-wrap">
                <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=300&fit=crop" alt="Medical Coding" className="service-img" />
                <div className="service-img-icon">💊</div>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Medical Coding Services</h3>
                <p className="service-card-desc">Expert ICD-10, CPT, and HCPCS coding with best-in-class acceptance rates across all specialties with full compliance.</p>
                <Link to="/medical-billing-coding" className="service-learn-more">Learn More →</Link>
              </div>
            </div>

            <div className="service-card-img">
              <div className="service-img-wrap">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=300&fit=crop" alt="Revenue Cycle" className="service-img" />
                <div className="service-img-icon">💰</div>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Revenue Cycle Management</h3>
                <p className="service-card-desc">End-to-end RCM solutions — eligibility, claims, AR follow-up, denial management to maximize your collections.</p>
                <Link to="/revenue-cycle-management" className="service-learn-more">Learn More →</Link>
              </div>
            </div>

            <div className="service-card-img">
              <div className="service-img-wrap">
                <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop" alt="Summarization" className="service-img" />
                <div className="service-img-icon">📄</div>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Medical Records Summarization</h3>
                <p className="service-card-desc">Comprehensive chronological summaries for legal and insurance professionals. Turn 100+ pages into clean, actionable summaries.</p>
                <Link to="/medical-records-summarization" className="service-learn-more">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          ABOUT / ENABLING CLIENTS
          Mobile: image on top, text below
          Desktop: image left, text right
          ================================================ */}
      <section className="about-section">
        <div className="container">
          <div className="side-by-side-grid">
            {/* Image - order 1 on mobile (top), order 1 on desktop (left) */}
            <div className="side-image-col">
              <div className="side-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=520&fit=crop"
                  alt="Healthcare professionals"
                  className="side-img"
                />
                <div className="side-img-badge">
                  <div className="side-badge-num">500+</div>
                  <div className="side-badge-lbl">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Text - order 2 on mobile (below), order 2 on desktop (right) */}
            <div className="side-text-col">
              <p className="section-eyebrow">ABOUT U-CGS</p>
              <h2 className="section-title-dark">Enabling Clients to Focus on Their Strengths</h2>
              <p className="about-desc">
                At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the
                highest standards in data management and service delivery. With close to a decade
                of practical outsourcing knowledge, we bring valuable expertise to the table.
              </p>
              <p className="about-desc">
                We take pride in delivering exceptional, cost-effective, and professional solutions
                that exceed expectations.
              </p>
              <div className="compliance-tags">
                <span className="compliance-tag">🛡️ ISO 27001:2013</span>
                <span className="compliance-tag">✅ HIPAA Compliant</span>
                <span className="compliance-tag">📊 US &amp; India Teams</span>
              </div>
              <Link to="/about" className="btn-primary" style={{ display: 'inline-block', marginTop: '32px', textDecoration: 'none' }}>
                Learn About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          HOW IT WORKS - 4 STEPS
          ================================================ */}
      <section className="steps-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <p className="section-eyebrow">HOW IT WORKS</p>
            <h2 className="section-title-dark">Get Started in 4 Simple Steps</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-circle"><span className="step-num">01</span></div>
              <div className="step-icon-big">💬</div>
              <h3 className="step-title">Consultation</h3>
              <p className="step-desc">Free discovery call to understand your specific needs and pain points.</p>
            </div>
            <div className="step-card">
              <div className="step-circle"><span className="step-num">02</span></div>
              <div className="step-icon-big">📝</div>
              <h3 className="step-title">Custom Plan</h3>
              <p className="step-desc">We design a tailored solution and onboarding roadmap for your team.</p>
            </div>
            <div className="step-card">
              <div className="step-circle"><span className="step-num">03</span></div>
              <div className="step-icon-big">🚀</div>
              <h3 className="step-title">Seamless Onboarding</h3>
              <p className="step-desc">Risk-free transition with dedicated support at every step.</p>
            </div>
            <div className="step-card">
              <div className="step-circle"><span className="step-num">04</span></div>
              <div className="step-icon-big">📊</div>
              <h3 className="step-title">Deliver &amp; Report</h3>
              <p className="step-desc">Ongoing delivery with real-time reporting and performance metrics.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '56px' }}>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', fontSize: '18px', padding: '16px 40px' }}>
              Start Your Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          WHY CHOOSE US
          Mobile: image on top, features below
          Desktop: features left, image right
          ================================================ */}
      <section className="why-section">
        <div className="container">
          <div className="side-by-side-grid why-reversed">
            {/* Text left on desktop, below image on mobile */}
            <div className="side-text-col">
              <p className="section-eyebrow">WHY CHOOSE US</p>
              <h2 className="section-title-dark">Why 500+ Clients Trust U-CGS</h2>
              <p className="about-desc">We don't just promise results — we deliver them with a team that treats your business like our own.</p>
              <div className="why-features-grid">
                <div className="why-feat">
                  <div className="why-feat-icon" style={{ background: '#dbeafe' }}>📈</div>
                  <div><h4 className="why-feat-title">Industry Expertise</h4><p className="why-feat-desc">10+ years of specialized experience in healthcare outsourcing.</p></div>
                </div>
                <div className="why-feat">
                  <div className="why-feat-icon" style={{ background: '#d1fae5' }}>🌐</div>
                  <div><h4 className="why-feat-title">Network Availability</h4><p className="why-feat-desc">Redundant infrastructure on highly-secure, purpose-built locations.</p></div>
                </div>
                <div className="why-feat">
                  <div className="why-feat-icon" style={{ background: '#fef3c7' }}>⚡</div>
                  <div><h4 className="why-feat-title">Seamless Experience</h4><p className="why-feat-desc">Risks mitigation and cultural alignment through dedicated CRMs.</p></div>
                </div>
                <div className="why-feat">
                  <div className="why-feat-icon" style={{ background: '#fce7f3' }}>⏱️</div>
                  <div><h4 className="why-feat-title">On-Time Service</h4><p className="why-feat-desc">Proven track record of consistently delivering timely and reliable services.</p></div>
                </div>
                <div className="why-feat">
                  <div className="why-feat-icon" style={{ background: '#ede9fe' }}>🛡️</div>
                  <div><h4 className="why-feat-title">Security &amp; Compliance</h4><p className="why-feat-desc">ISO 27001:2013 certified for Information Security Management.</p></div>
                </div>
                <div className="why-feat">
                  <div className="why-feat-icon" style={{ background: '#dcfce7' }}>💎</div>
                  <div><h4 className="why-feat-title">Scalable Resources</h4><p className="why-feat-desc">State-of-the-art workspace with a vast talent pool of skilled agents.</p></div>
                </div>
              </div>
            </div>

            {/* Image - right on desktop, top on mobile */}
            <div className="side-image-col">
              <div className="side-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=600&fit=crop"
                  alt="Team collaboration"
                  className="side-img"
                />
                <div className="why-overlay-card">
                  <div className="why-overlay-title">Dedicated to Your Success</div>
                  <div className="why-overlay-sub">A team that works exclusively on your behalf, every single day.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          TESTIMONIALS
          ================================================ */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <p className="section-eyebrow">CLIENT TESTIMONIALS</p>
            <h2 className="section-title-white">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I am truly impressed with the work of U-CGS. Their excellent outsourcing services
                have given us time to focus on the growth of our Business. I would highly recommend their services."
              </p>
              <div className="testimonial-author-row">
                <div className="testimonial-avatar">C</div>
                <div>
                  <div className="testimonial-name">Chief Executive Officer</div>
                  <div className="testimonial-company">Record Retrieval Firm</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "My experience with the U-CGS Team has been extremely positive! While significantly
                reducing our cost of doing business, UCG-G professionalism and efficiency has been unsurpassed!"
              </p>
              <div className="testimonial-author-row">
                <div className="testimonial-avatar" style={{ background: '#0d9488' }}>M</div>
                <div>
                  <div className="testimonial-name">Chief Executive Officer</div>
                  <div className="testimonial-company">Medical Billing Firm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          FINAL CTA
          ================================================ */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Transform Your Operations?</h2>
          <p className="cta-subtitle">Get started with U-Connect Global Services today</p>
          <Link to="/contact" className="btn-cta" style={{ textDecoration: 'none' }}>
            Schedule Free Consultation →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;