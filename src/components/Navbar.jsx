import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const services = [
  { label: 'Record Retrieval Services', path: '/record-retrieval-services', icon: '📋' },
  { label: 'Medical Coding Services', path: '/medical-billing-coding', icon: '⚕️' },
  { label: 'Revenue Cycle Management', path: '/revenue-cycle-management', icon: '💰' },
  { label: 'Medical Records Summarization', path: '/medical-records-summarization', icon: '📝' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = p => location.pathname === p

  return (
    <>
      <style>{`
        /* ── TOP BAR ── */
        .ucg-top-bar {
          /* Accent gradient using theme variables */
          background: linear-gradient(90deg, var(--navy) 0%, var(--navy-2) 40%, color-mix(in srgb, var(--primary) 40%, var(--navy-2)) 100%);
          color: rgba(255,255,255,0.82);
          font-size: 12px;
          padding: 7px 0;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1001;
          transition: transform 0.3s ease;
          /* Left accent line using primary color */
          border-bottom: 1px solid color-mix(in srgb, var(--primary) 35%, transparent);
        }
        .ucg-top-bar.hidden { transform: translateY(-100%); }

        /* Pill badges inside top bar */
        .ucg-topbar-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: color-mix(in srgb, var(--primary) 18%, transparent);
          border: 1px solid color-mix(in srgb, var(--primary) 30%, transparent);
          border-radius: 20px;
          padding: 2px 10px;
          font-size: 11px;
          color: var(--primary-light);
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        .ucg-topbar-sep {
          color: color-mix(in srgb, var(--primary) 40%, transparent);
          margin: 0 8px;
        }
        .ucg-topbar-accent {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--primary-light);
          display: inline-block;
          margin-right: 2px;
          box-shadow: 0 0 6px color-mix(in srgb, var(--primary-light) 60%, transparent);
        }

        /* ── MAIN NAV ── */
        .ucg-nav {
          position: fixed;
          left: 0; right: 0;
          z-index: 1000;
          transition: all 0.35s ease;
        }
        .ucg-nav.not-scrolled {
          background: transparent;
          top: 33px;
          padding: 14px 0;
        }
        .ucg-nav.scrolled {
          background: rgba(var(--navy-rgb, 11,28,44), 0.97);
          backdrop-filter: blur(16px);
          top: 0;
          padding: 10px 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }

        .ucg-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          box-sizing: border-box;
        }

        .ucg-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .ucg-logo img {
          width: 40px; height: 40px;
          border-radius: 8px;
          object-fit: contain;
          background: white;
          padding: 2px;
          flex-shrink: 0;
        }
        .ucg-logo-name {
          font-weight: 800;
          font-size: 16px;
          color: white;
          white-space: nowrap;
          line-height: 1.2;
        }
        .ucg-logo-sub {
          font-size: 9px;
          color: var(--primary-light);
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.8;
        }

        .ucg-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: flex-end;
          min-width: 0;
          overflow: hidden;
        }
        .ucg-nl {
          color: rgba(255,255,255,0.82);
          font-size: 13px;
          font-weight: 500;
          padding: 6px 8px;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .ucg-nl:hover {
          color: white;
          background: rgba(255,255,255,0.1);
        }
        .ucg-nl.active {
          color: var(--primary-light);
          background: color-mix(in srgb, var(--primary) 15%, transparent);
        }

        .ucg-book {
          background: var(--primary);
          color: white !important;
          padding: 8px 16px;
          border-radius: 7px;
          font-weight: 700;
          font-size: 13px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          margin-left: 6px;
          transition: all 0.2s;
          border: none;
        }
        .ucg-book:hover {
          background: var(--primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 14px color-mix(in srgb, var(--primary) 45%, transparent);
        }

        .ucg-burger {
          display: none !important;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 6px;
          flex-shrink: 0;
        }
        .ucg-burger span {
          display: block;
          width: 22px; height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.25s;
        }

        /* ── MOBILE MENU ── */
        .ucg-mob-menu {
          background: var(--navy);
          border-top: 2px solid var(--primary);
          padding: 12px 20px 24px;
          max-height: 80vh;
          overflow-y: auto;
        }
        .ucg-ml {
          display: block;
          padding: 12px 0;
          color: rgba(255,255,255,0.8);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ucg-ml:hover, .ucg-ml.active { color: var(--primary-light); }
        .ucg-msl {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 11px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          color: rgba(255,255,255,0.75);
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .ucg-msl:hover { color: var(--primary-light); }
        .ucg-mob-book {
          display: block;
          text-align: center;
          margin-top: 16px;
          background: var(--primary);
          color: white !important;
          padding: 13px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .ucg-mob-book:hover { background: var(--primary-dark); }
        .ucg-mob-section-label {
          padding: 14px 0 6px;
          color: var(--primary-light);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          opacity: 0.7;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ucg-links { display: none !important; }
          .ucg-burger { display: flex !important; }
        }
        @media (max-width: 480px) {
          .ucg-top-bar { font-size: 10.5px; padding: 5px 0; }
          .ucg-nav.not-scrolled { top: 30px; }
          .ucg-logo img { width: 34px; height: 34px; }
          .ucg-logo-name { font-size: 14px; }
          .ucg-topbar-pill { display: none; }
        }
      `}</style>

      {/* ── TOP BAR ── */}
      <div className={`ucg-top-bar ${scrolled ? 'hidden' : ''}`}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 20px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 6
        }}>
          {/* Left: contact info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <span>📧</span>
              <a href="mailto:Info@u-cgs.com" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontWeight: 500 }}>Info@u-cgs.com</a>
            </span>
            <span className="ucg-topbar-sep">|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <span>📞</span>
              <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>+1 307-213-4034</span>
            </span>
            <span className="ucg-topbar-sep">|</span>
            <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>+91 88666 42472</span>
          </div>

          {/* Right: trust pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="ucg-topbar-pill">
              <span className="ucg-topbar-accent" />
              ISO 27001:2013
            </span>
            <span className="ucg-topbar-pill">
              <span className="ucg-topbar-accent" />
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className={`ucg-nav ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="ucg-inner">
          {/* Logo */}
          <Link to="/" className="ucg-logo">
            <img src={logo} alt="U-CGS Logo" />
            <div>
              <div className="ucg-logo-name">U-Connect Global</div>
              <div className="ucg-logo-sub">Services</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="ucg-links">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/record-retrieval-services', 'Record Retrieval'],
              ['/medical-billing-coding', 'Medical Coding'],
              ['/revenue-cycle-management', 'RCM'],
              ['/medical-records-summarization', 'Summarization'],
              ['/blogs', 'Blogs'],
              ['/contact', 'Contact'],
            ].map(([p, l]) => (
              <Link key={p} to={p} className={`ucg-nl ${isActive(p) ? 'active' : ''}`}>{l}</Link>
            ))}
            <Link to="/contact" className="ucg-book">Book Now</Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="ucg-burger" aria-label="Toggle menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="ucg-mob-menu">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/record-retrieval-services', 'Record Retrieval'],
              ['/medical-billing-coding', 'Medical Coding'],
              ['/revenue-cycle-management', 'RCM'],
              ['/medical-records-summarization', 'Summarization'],
              ['/blogs', 'Blogs'],
              ['/contact', 'Contact'],
            ].map(([p, l]) => (
              <Link key={p} to={p} className="ucg-ml">{l}</Link>
            ))}
            <Link to="/contact" className="ucg-mob-book">📅 Book a Free Consultation</Link>
          </div>
        )}
      </nav>
    </>
  )
}