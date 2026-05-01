import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// Put your logo.png inside src/assets/ and import it:
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
        .ucg-top-bar {
          background: var(--bg-dark);
          color: var(--text-light);
          font-size: 12px;
          padding: 6px 0;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1001;
          transition: transform 0.3s ease;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .ucg-top-bar.hidden { transform: translateY(-100%); }

        .ucg-nav {
          position: fixed;
          left: 0; right: 0;
          z-index: 1000;
          transition: all 0.35s ease;
        }
        .ucg-nav.not-scrolled {
          background: transparent;
          top: 32px;
          padding: 14px 0;
        }
        .ucg-nav.scrolled {
          background: rgba(11,28,44,0.97);
          backdrop-filter: blur(16px);
          top: 0;
          padding: 10px 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }

        /* This wrapper is what controls width — always inside viewport */
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
          width: 40px;
          height: 40px;
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
          color: rgba(255,255,255,0.5);
          letter-spacing: 2px;
          text-transform: uppercase;
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
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          font-weight: 500;
          padding: 6px 8px;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .ucg-nl:hover { color: white; background: rgba(255,255,255,0.1); }
        .ucg-nl.active { color: #93c5fd; }

        .ucg-book {
          background: #1d6fb8;
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
        }
        .ucg-book:hover { background: #1557a0; transform: translateY(-1px); }

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
          width: 22px;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.25s;
        }

        .ucg-mob-menu {
          background: #0b1c2c;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 12px 20px 20px;
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
        }
        .ucg-ml:hover { color: #93c5fd; }
        .ucg-msl {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 11px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          font-weight: 500;
        }
        .ucg-msl:hover { color: #93c5fd; }
        .ucg-mob-book {
          display: block;
          text-align: center;
          margin-top: 16px;
          background: #1d6fb8;
          color: white !important;
          padding: 13px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .ucg-links { display: none !important; }
          .ucg-burger { display: flex !important; }
        }

        @media (max-width: 480px) {
          .ucg-top-bar { font-size: 10.5px; padding: 5px 0; }
          .ucg-nav.not-scrolled { top: 28px; }
          .ucg-logo img { width: 34px; height: 34px; }
          .ucg-logo-name { font-size: 14px; }
        }
      `}</style>

      {/* Top bar */}
      <div className={`ucg-top-bar ${scrolled ? 'hidden' : ''}`}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
          <span>📧 Info@u-cgs.com &nbsp;|&nbsp; 📞 +1 307-213-4034 &nbsp;|&nbsp; +91 88666 42472</span>
          
        </div>
      </div>

      {/* Main nav */}
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
            {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} className="ucg-ml">{l}</Link>
            ))}
            <div style={{ padding: '14px 0 6px', color: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Services</div>
            {services.map(s => (
              <Link key={s.path} to={s.path} className="ucg-msl">
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <span>{s.label}</span>
              </Link>
            ))}
            <Link to="/contact" className="ucg-mob-book">Book Now</Link>
          </div>
        )}
      </nav>
    </>
  )
}