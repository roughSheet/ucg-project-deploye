import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const services = [
  { label: 'Record Retrieval Services', path: '/record-retrieval-services' },
  { label: 'Medical Coding Services', path: '/medical-billing-coding' },
  { label: 'Revenue Cycle Management', path: '/revenue-cycle-management' },
  { label: 'Medical Records Summarization', path: '/medical-records-summarization' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [location])

  const linkColor = scrolled ? '#374151' : 'rgba(255,255,255,0.92)'
  const isActive = (path) => location.pathname === path

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.4s ease',
      padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo — fixed alignment */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 10, flexShrink: 0,
            background: 'linear-gradient(135deg, #0d9488, #0f766e)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: 18,
            boxShadow: '0 2px 8px rgba(13,148,136,0.4)'
          }}>U</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: scrolled ? '#0f172a' : 'white' }}>U-Connect Global</div>
            <div style={{ fontSize: 10, color: scrolled ? '#6b7280' : 'rgba(255,255,255,0.7)', letterSpacing: 2, textTransform: 'uppercase' }}>Services</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 500 }} className="desktop-nav">
          {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([path, label]) => (
            <Link key={path} to={path} style={{
              color: linkColor,
              borderBottom: isActive(path) ? '2px solid #f59e0b' : '2px solid transparent',
              paddingBottom: 2, transition: 'all 0.2s'
            }}>{label}</Link>
          ))}

          {/* Services dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <span style={{ color: linkColor, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
              Services <span style={{ fontSize: 9, marginTop: 1 }}>▼</span>
            </span>
            {servicesOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                transform: 'translateX(-50%)',
                background: 'white', borderRadius: 14,
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                padding: '8px 0', minWidth: 270,
                border: '1px solid #f1f5f9'
              }}>
                {services.map(s => (
                  <Link key={s.path} to={s.path} style={{
                    display: 'block', padding: '11px 20px',
                    color: '#374151', fontSize: 14, transition: 'all 0.2s',
                    borderLeft: '3px solid transparent'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f0fdfa'; e.currentTarget.style.borderLeftColor = '#0d9488'; e.currentTarget.style.color = '#0d9488' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.color = '#374151' }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" style={{
            background: '#f59e0b', color: '#0f172a',
            padding: '10px 22px', borderRadius: 8, fontWeight: 700,
            fontSize: 14, transition: 'all 0.2s', display: 'inline-block'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d97706'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.transform = 'translateY(0)' }}>
            Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: 24, height: 2, background: scrolled ? '#0f172a' : 'white', borderRadius: 2, transition: 'all 0.3s' }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'white', padding: '16px 24px 24px', borderTop: '1px solid #f1f5f9', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
          {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blogs'], ['/contact', 'Contact Us']].map(([path, label]) => (
            <Link key={path} to={path} style={{ display: 'block', padding: '12px 0', color: '#374151', borderBottom: '1px solid #f1f5f9', fontWeight: 500 }}>{label}</Link>
          ))}
          <div style={{ padding: '12px 0 6px', color: '#9ca3af', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Services</div>
          {services.map(s => (
            <Link key={s.path} to={s.path} style={{ display: 'block', padding: '10px 0 10px 12px', color: '#374151', borderBottom: '1px solid #f1f5f9', fontSize: 14 }}>{s.label}</Link>
          ))}
          <Link to="/contact" style={{ display: 'block', textAlign: 'center', marginTop: 16, background: '#f59e0b', color: '#0f172a', padding: '12px', borderRadius: 8, fontWeight: 700 }}>Book Now</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}