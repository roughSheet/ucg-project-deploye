import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const services = [
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
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [location])

  const linkColor = scrolled ? '#374151' : 'rgba(255,255,255,0.92)'
  const isActive = p => location.pathname === p

  return (
    <>
      {/* ── Top contact bar ── */}
      <div style={{ background: '#0f172a', color: 'rgba(255,255,255,0.75)', fontSize: 13, padding: '8px 0', display: scrolled ? 'none' : 'block' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span>📧 Info@u-cgs.com</span>
            <span>📞 +1 307-213-4034 | +91 88666 42472</span>
          </div>
          <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>
            <span>🇺🇸 USA</span>
            <span>🇮🇳 India</span>
            <span style={{ color: '#2dd4bf' }}>🏅 ISO 27001:2013</span>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.4s ease',
        padding: scrolled ? '12px 0' : '18px 0',
        marginTop: scrolled ? 0 : 37,
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg,#0d9488,#0f766e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 18, flexShrink: 0, boxShadow: '0 2px 10px rgba(13,148,136,0.4)' }}>U</div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: scrolled ? '#0f172a' : 'white' }}>U-Connect Global</div>
              <div style={{ fontSize: 10, color: scrolled ? '#9ca3af' : 'rgba(255,255,255,0.65)', letterSpacing: 2, textTransform: 'uppercase' }}>Services</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 26, fontSize: 14, fontWeight: 500 }} className="desktop-nav">
            {[['/', 'Home'], ['/about', 'About'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} style={{ color: linkColor, borderBottom: isActive(p) ? '2px solid #f59e0b' : '2px solid transparent', paddingBottom: 2, transition: 'all 0.2s' }}>{l}</Link>
            ))}

            {/* Mega menu */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <span style={{ color: linkColor, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, borderBottom: '2px solid transparent', paddingBottom: 2 }}>
                Services <span style={{ fontSize: 9, transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
              </span>

              {servicesOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 16px)', left: '50%', transform: 'translateX(-50%)', background: 'white', borderRadius: 16, boxShadow: '0 24px 64px rgba(0,0,0,0.15)', padding: 20, minWidth: 520, border: '1px solid #f1f5f9', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <div style={{ gridColumn: '1/-1', fontSize: 11, fontWeight: 700, color: '#9ca3af', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid #f1f5f9' }}>Our Services</div>
                  {services.map(s => (
                    <Link key={s.path} to={s.path} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '12px 14px', borderRadius: 12, transition: 'background 0.15s', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#f0fdfa'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
                      <div>
                        <div style={{ fontWeight: 600, color: '#0f172a', fontSize: 13, marginBottom: 3 }}>{s.label}</div>
                        <div style={{ fontSize: 12, color: '#6b7280' }}>{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <div style={{ gridColumn: '1/-1', marginTop: 8, paddingTop: 14, borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'center' }}>
                    <Link to="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '10px 28px', borderRadius: 8, fontWeight: 700, fontSize: 13 }}>Book a Free Consultation →</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" style={{ background: '#f59e0b', color: '#0f172a', padding: '10px 22px', borderRadius: 8, fontWeight: 700, fontSize: 13, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#d97706'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Book Now
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4 }}>
            {[0, 1, 2].map(i => <span key={i} style={{ display: 'block', width: 24, height: 2, background: scrolled ? '#0f172a' : 'white', borderRadius: 2 }} />)}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: 'white', padding: '16px 24px 24px', borderTop: '1px solid #f1f5f9', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} style={{ display: 'block', padding: '12px 0', color: '#374151', borderBottom: '1px solid #f9fafb', fontWeight: 500 }}>{l}</Link>
            ))}
            <div style={{ padding: '12px 0 6px', color: '#9ca3af', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Services</div>
            {services.map(s => (
              <Link key={s.path} to={s.path} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f9fafb' }}>
                <span style={{ fontSize: 20 }}>{s.icon}</span>
                <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{s.label}</span>
              </Link>
            ))}
            <Link to="/contact" style={{ display: 'block', textAlign: 'center', marginTop: 16, background: '#f59e0b', color: '#0f172a', padding: '12px', borderRadius: 8, fontWeight: 700 }}>Book Now</Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}