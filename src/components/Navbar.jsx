import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SERVICES = [
  { label: 'Record Retrieval Services', path: '/record-retrieval-services', icon: '📋', desc: 'Fast, HIPAA-compliant retrieval' },
  { label: 'Medical Coding Services', path: '/medical-billing-coding', icon: '⚕️', desc: 'CPC & CCS certified coders' },
  { label: 'Revenue Cycle Management', path: '/revenue-cycle-management', icon: '💰', desc: 'End-to-end RCM solutions' },
  { label: 'Medical Records Summarization', path: '/medical-records-summarization', icon: '📝', desc: 'Save 20+ hours per case' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [location])

  const linkColor = scrolled ? '#374151' : 'rgba(255,255,255,0.9)'
  const isActive = p => location.pathname === p

  return (
    <>
      {/* Top bar — hidden on mobile via CSS, hidden when scrolled */}
      {!scrolled && (
        <div className="top-bar" style={{ background: '#0f172a', color: 'rgba(255,255,255,0.7)', fontSize: 12, padding: '7px 0', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 20, whiteSpace: 'nowrap', overflow: 'hidden' }}>
              <span>📧 Info@u-cgs.com</span>
              <span>📞 +1 307-213-4034 &nbsp;|&nbsp; +91 88666 42472</span>
            </div>
            <span style={{ color: '#2dd4bf', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}>🏅 ISO 27001:2013</span>
          </div>
        </div>
      )}

      {/* Main nav */}
      <nav style={{
        position: 'fixed',
        top: scrolled ? 0 : 33,
        left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.09)' : 'none',
        transition: 'all 0.35s ease',
        padding: scrolled ? '12px 0' : '16px 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{ width: 38, height: 38, borderRadius: 9, background: 'linear-gradient(135deg,#0d9488,#0f766e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 17, flexShrink: 0, boxShadow: '0 2px 8px rgba(13,148,136,0.4)' }}>U</div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontWeight: 800, fontSize: 14, color: scrolled ? '#0f172a' : 'white', whiteSpace: 'nowrap' }}>U-Connect Global</div>
              <div style={{ fontSize: 9, color: scrolled ? '#9ca3af' : 'rgba(255,255,255,0.65)', letterSpacing: 2, textTransform: 'uppercase' }}>Services</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 14, fontWeight: 500 }}>
            {[['/', 'Home'], ['/about', 'About'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} style={{ color: linkColor, borderBottom: isActive(p) ? '2px solid #f59e0b' : '2px solid transparent', paddingBottom: 2, transition: 'all 0.2s', whiteSpace: 'nowrap' }}>{l}</Link>
            ))}

            {/* Dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <span style={{ color: linkColor, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap', userSelect: 'none' }}>
                Services <span style={{ fontSize: 9 }}>▼</span>
              </span>
              {servicesOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)', background: 'white', borderRadius: 16, boxShadow: '0 24px 60px rgba(0,0,0,0.14)', padding: 18, minWidth: 480, border: '1px solid #f1f5f9', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, zIndex: 100 }}>
                  <div style={{ gridColumn: '1/-1', fontSize: 10, fontWeight: 700, color: '#9ca3af', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6, paddingBottom: 8, borderBottom: '1px solid #f1f5f9' }}>Our Services</div>
                  {SERVICES.map(s => (
                    <Link key={s.path} to={s.path} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 12px', borderRadius: 10, transition: 'background 0.15s', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#f0fdfa'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <div style={{ width: 38, height: 38, borderRadius: 9, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{s.icon}</div>
                      <div>
                        <div style={{ fontWeight: 600, color: '#0f172a', fontSize: 13, marginBottom: 2 }}>{s.label}</div>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <div style={{ gridColumn: '1/-1', marginTop: 6, paddingTop: 12, borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                    <Link to="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '9px 24px', borderRadius: 7, fontWeight: 700, fontSize: 13, display: 'inline-block' }}>Book a Free Consultation →</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '9px 20px', borderRadius: 7, fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#d97706'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Book Now
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 6 }} aria-label="Menu">
            <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0f172a' : 'white', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0f172a' : 'white', borderRadius: 2, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0f172a' : 'white', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div style={{ background: 'white', borderTop: '1px solid #f1f5f9', boxShadow: '0 12px 32px rgba(0,0,0,0.1)', maxHeight: '80vh', overflowY: 'auto' }}>
            <div style={{ padding: '12px 20px 20px' }}>
              {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([p, l]) => (
                <Link key={p} to={p} style={{ display: 'block', padding: '13px 0', color: '#374151', borderBottom: '1px solid #f9fafb', fontWeight: 600, fontSize: 15 }}>{l}</Link>
              ))}
              <div style={{ padding: '13px 0 8px', color: '#9ca3af', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Services</div>
              {SERVICES.map(s => (
                <Link key={s.path} to={s.path} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '11px 0', borderBottom: '1px solid #f9fafb' }}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, color: '#374151', fontWeight: 600 }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: '#9ca3af' }}>{s.desc}</div>
                  </div>
                </Link>
              ))}
              <Link to="/contact" style={{ display: 'block', textAlign: 'center', marginTop: 16, background: '#f59e0b', color: '#0f172a', padding: '13px', borderRadius: 8, fontWeight: 700, fontSize: 15 }}>Book Now</Link>
              <div style={{ marginTop: 16, padding: '12px', background: '#f9fafb', borderRadius: 10, fontSize: 12, color: '#6b7280', textAlign: 'center' }}>
                📧 Info@u-cgs.com &nbsp;|&nbsp; 📞 +1 307-213-4034
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}