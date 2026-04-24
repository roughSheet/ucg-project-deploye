import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#111827', color: 'rgba(255,255,255,0.72)' }}>
      {/* Top accent bar */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, #0d9488, #14b8a6, #f59e0b)' }} />

      <div className="container" style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg,#0d9488,#0f766e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 18, flexShrink: 0 }}>U</div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>U-Connect Global Services</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: 1 }}>BPO Solutions</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20, color: 'rgba(255,255,255,0.6)' }}>A dynamic team of business solutions experts with close to a decade of outsourcing experience.</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(13,148,136,0.2)', border: '1px solid rgba(13,148,136,0.4)', borderRadius: 8, padding: '8px 14px' }}>
              <span style={{ color: '#2dd4bf', fontSize: 13 }}>🏅</span>
              <span style={{ color: '#2dd4bf', fontSize: 12, fontWeight: 600 }}>ISO 27001:2013 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ color: 'white', fontWeight: 700, marginBottom: 18, fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 10 }}>Quick Links</div>
            {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blog'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2dd4bf'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}>
                <span style={{ color: '#0d9488', fontSize: 10 }}>▶</span>{l}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ color: 'white', fontWeight: 700, marginBottom: 18, fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 10 }}>Services</div>
            {[
              ['/record-retrieval-services', 'Record Retrieval'],
              ['/medical-billing-coding', 'Medical Coding'],
              ['/revenue-cycle-management', 'Revenue Cycle'],
              ['/medical-records-summarization', 'Records Summarization'],
            ].map(([p, l]) => (
              <Link key={p} to={p} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2dd4bf'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}>
                <span style={{ color: '#0d9488', fontSize: 10 }}>▶</span>{l}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: 'white', fontWeight: 700, marginBottom: 18, fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 10 }}>Contact</div>
            {[
              ['📍', '1021 E Lincolnway Suite 9864\nCheyenne, WY 82001, US'],
              ['📍', 'A 1003-1005, The Gateway, Nikol\nAhmedabad - 380049, India'],
              ['✉️', 'Info@u-cgs.com'],
              ['📞', '+1 307-213-4034\n+91 88666 42472'],
            ].map(([icon, text], i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 14, fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>
                <span style={{ flexShrink: 0, marginTop: 1 }}>{icon}</span>
                <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>© 2026 U-Connect Global Services. All Rights Reserved.</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>Trusted BPO Partner · HIPAA Compliant · ISO 27001:2013</div>
        </div>
      </div>
    </footer>
  )
}