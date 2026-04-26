import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SERVICES = [
  { label: 'Record Retrieval Services', path: '/record-retrieval-services', icon: '📋', desc: 'Fast, HIPAA-compliant retrieval' },
  { label: 'Medical Coding Services', path: '/medical-billing-coding', icon: '⚕️', desc: 'CPC & CCS certified coders' },
  { label: 'Revenue Cycle Management', path: '/revenue-cycle-management', icon: '💰', desc: 'End-to-end RCM solutions' },
  { label: 'Medical Records Summarization', path: '/medical-records-summarization', icon: '📝', desc: 'Save 20+ hours per case' },
]

/* Heights:
   top-bar  = 33px (visible only when not scrolled, hidden on mobile/tablet)
   nav      = 65px
   Total offset hero needs = 33 + 65 = 98px when not scrolled
                           = 65px when scrolled (no top bar)
*/
const TOP_BAR_H = 33
const NAV_H = 65

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > TOP_BAR_H + 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [location])

  const isHome = location.pathname === '/'
  const isActive = p => location.pathname === p

  /* On hero (teal/dark bg) links should be white */
  const linkCol = scrolled ? '#374151' : 'rgba(255,255,255,0.92)'

  return (
    <>
      {/* ── TOP BAR ── hidden on scroll, hidden on mobile via CSS */}
      <div
        className="top-bar"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 1001,
          height: TOP_BAR_H,
          background: '#0f172a',
          color: 'rgba(255,255,255,0.72)',
          fontSize: 12,
          display: scrolled ? 'none' : 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', gap: 20, overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <span>📧 Info@u-cgs.com</span>
            <span>📞 +1 307-213-4034 &nbsp;|&nbsp; +91 88666 42472</span>
          </div>
          <span style={{ color: '#2dd4bf', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}>
            🏅 ISO 27001:2013
          </span>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav style={{
        position: 'fixed',
        top: scrolled ? 0 : TOP_BAR_H,
        left: 0, right: 0,
        zIndex: 1000,
        height: NAV_H,
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.09)' : 'none',
        transition: 'background 0.35s ease, box-shadow 0.35s ease, top 0.35s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, flexShrink: 0,
              background: 'linear-gradient(135deg, #0d9488, #0f766e)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 800, fontSize: 18,
              boxShadow: '0 2px 8px rgba(13,148,136,0.4)',
            }}>U</div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontWeight: 800, fontSize: 14, color: scrolled ? '#0f172a' : 'white', whiteSpace: 'nowrap' }}>
                U-Connect Global
              </div>
              <div style={{ fontSize: 9, color: scrolled ? '#9ca3af' : 'rgba(255,255,255,0.65)', letterSpacing: 2, textTransform: 'uppercase' }}>
                Services
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 14, fontWeight: 500 }}>
            {[['/', 'Home'], ['/about', 'About'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} style={{
                color: linkCol,
                borderBottom: isActive(p) ? '2px solid #f59e0b' : '2px solid transparent',
                paddingBottom: 2, transition: 'all 0.2s', whiteSpace: 'nowrap',
              }}>{l}</Link>
            ))}

            {/* Services mega dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span style={{ color: linkCol, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap', userSelect: 'none' }}>
                Services
                <span style={{ fontSize: 9, display: 'inline-block', transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
              </span>

              {servicesOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 14px)',
                  left: '50%', transform: 'translateX(-50%)',
                  background: 'white', borderRadius: 16,
                  boxShadow: '0 24px 60px rgba(0,0,0,0.14)',
                  padding: 18, minWidth: 480,
                  border: '1px solid #f1f5f9',
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
                  zIndex: 200,
                }}>
                  <div style={{ gridColumn: '1/-1', fontSize: 10, fontWeight: 700, color: '#9ca3af', letterSpacing: 1.5, textTransform: 'uppercase', paddingBottom: 10, borderBottom: '1px solid #f1f5f9', marginBottom: 4 }}>
                    Our Services
                  </div>
                  {SERVICES.map(s => (
                    <Link key={s.path} to={s.path} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 12px', borderRadius: 10, transition: 'background 0.15s', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#f0fdfa'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <div style={{ width: 38, height: 38, borderRadius: 9, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0 }}>{s.icon}</div>
                      <div>
                        <div style={{ fontWeight: 600, color: '#0f172a', fontSize: 13, marginBottom: 2 }}>{s.label}</div>
                        <div style={{ fontSize: 11, color: '#6b7280' }}>{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <div style={{ gridColumn: '1/-1', paddingTop: 12, borderTop: '1px solid #f1f5f9', textAlign: 'center', marginTop: 4 }}>
                    <Link to="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '9px 24px', borderRadius: 7, fontWeight: 700, fontSize: 13, display: 'inline-block' }}>
                      Book a Free Consultation →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CTA button */}
            <Link to="/contact" style={{
              background: '#f59e0b', color: '#0f172a',
              padding: '9px 20px', borderRadius: 7,
              fontWeight: 700, fontSize: 13,
              whiteSpace: 'nowrap', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#d97706'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Book Now
            </Link>
          </div>

          {/* Hamburger — shown via CSS on mobile */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="hamburger"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 6 }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0f172a' : 'white', borderRadius: 2, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0f172a' : 'white', borderRadius: 2, transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0f172a' : 'white', borderRadius: 2, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'white',
            borderTop: '1px solid #f1f5f9',
            boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
            maxHeight: '80vh', overflowY: 'auto',
            zIndex: 999,
          }}>
            <div style={{ padding: '12px 20px 24px' }}>
              {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([p, l]) => (
                <Link key={p} to={p} style={{ display: 'block', padding: '13px 0', color: '#374151', borderBottom: '1px solid #f9fafb', fontWeight: 600, fontSize: 15 }}>{l}</Link>
              ))}
              <div style={{ padding: '13px 0 8px', color: '#9ca3af', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Services</div>
              {SERVICES.map(s => (
                <Link key={s.path} to={s.path} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f9fafb' }}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, color: '#374151', fontWeight: 600 }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: '#9ca3af' }}>{s.desc}</div>
                  </div>
                </Link>
              ))}
              <Link to="/contact" style={{ display: 'block', textAlign: 'center', marginTop: 20, background: '#f59e0b', color: '#0f172a', padding: '14px', borderRadius: 8, fontWeight: 700, fontSize: 15 }}>
                Book Now
              </Link>
              <div style={{ marginTop: 14, padding: '12px', background: '#f9fafb', borderRadius: 10, fontSize: 12, color: '#6b7280', textAlign: 'center' }}>
                📧 Info@u-cgs.com &nbsp;|&nbsp; 📞 +1 307-213-4034
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}