import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.68)', marginTop: 0 }}>
      {/* Top accent bar — uses theme primary color */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, var(--primary-dark), var(--primary), var(--primary-light))' }} />

      <div className="container" style={{ paddingTop: 52, paddingBottom: 44 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 44, marginBottom: 44 }}>

          {/* Brand */}
          <div>
            <div className="footer-brand-row" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src={logo} alt="U-CGS Logo" style={{ width: 38, height: 38, borderRadius: 8, background: 'white', padding: 2, objectFit: 'contain', flexShrink: 0 }} />
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>U-Connect Global Services</div>
                <div style={{ fontSize: 10, color: 'var(--primary-light)', letterSpacing: 1, opacity: 0.7 }}>BPO Solutions</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 18, color: 'rgba(255,255,255,0.55)' }}>
              A dynamic team of business solutions experts with close to a decade of outsourcing experience.
            </p>
            {/* ISO badge — uses primary variable */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'color-mix(in srgb, var(--primary) 20%, transparent)',
              border: '1px solid color-mix(in srgb, var(--primary) 40%, transparent)',
              borderRadius: 8, padding: '7px 13px'
            }}>
              <span style={{ color: 'var(--primary-light)', fontSize: 13 }}>🏅</span>
              <span style={{ color: 'var(--primary-light)', fontSize: 12, fontWeight: 600 }}>ISO 27001:2013 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{
              color: 'white', fontWeight: 700, marginBottom: 16,
              fontSize: 13, textTransform: 'uppercase', letterSpacing: 1,
              borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 10
            }}>Quick Links</div>
            {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blog'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 11, fontSize: 13, color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <span style={{ color: 'var(--primary)', fontSize: 9 }}>▶</span>{l}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{
              color: 'white', fontWeight: 700, marginBottom: 16,
              fontSize: 13, textTransform: 'uppercase', letterSpacing: 1,
              borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 10
            }}>Services</div>
            {[
              ['/record-retrieval-services', 'Record Retrieval'],
              ['/medical-billing-coding', 'Medical Coding'],
              ['/revenue-cycle-management', 'Revenue Cycle'],
              ['/medical-records-summarization', 'Records Summarization'],
            ].map(([p, l]) => (
              <Link key={p} to={p} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 11, fontSize: 13, color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <span style={{ color: 'var(--primary)', fontSize: 9 }}>▶</span>{l}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              color: 'white', fontWeight: 700, marginBottom: 16,
              fontSize: 13, textTransform: 'uppercase', letterSpacing: 1,
              borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 10
            }}>Contact</div>
            {[
              ['📍', '1021 E Lincolnway Suite 9864\nCheyenne, WY 82001, US'],
              ['📍', 'A 1003-1005, The Gateway, Nikol\nAhmedabad - 380049, India'],
              ['✉️', 'Info@u-cgs.com'],
              ['📞', '+1 307-213-4034\n+91 88666 42472'],
            ].map(([icon, text], i) => (
              <div key={i} style={{ display: 'flex', gap: 9, marginBottom: 12, fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,0.58)' }}>
                <span style={{ flexShrink: 0, marginTop: 1 }}>{icon}</span>
                <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 22,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 10
        }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>
            © 2026 U-Connect Global Services. All Rights Reserved.
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>
            Trusted BPO Partner · HIPAA Compliant · ISO 27001:2013
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 600px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  )
}