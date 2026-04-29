import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', position: 'relative' }}>
      {/* Decorative top border */}
      <div style={{ height: '4px', width: '100%', backgroundColor: 'var(--accent-gold)' }}></div>

      <div className="container" style={{ padding: '6rem 1.5rem 3rem' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '4rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '4rem',
          marginBottom: '2rem'
        }} className="footer-layout">
          
          {/* Brand Column */}
          <div style={{ flex: '1 1 40%' }}>
            <img src="/assets/CIEF_LOGO.png" alt="CIEF Consulting Logo" style={{ height: '40px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '400px' }}>
              Firma líder en consultoría económica y financiera, transformando datos complejos en estrategias accionables desde 2006.
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1rem' }}>
              <a href="https://www.instagram.com/ciefconsulting/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--text-light)', opacity: 0.7, transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'var(--accent-gold)' }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.color = 'var(--text-light)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://twitter.com/ciefconsulting" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{ color: 'var(--text-light)', opacity: 0.7, transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'var(--accent-gold)' }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.color = 'var(--text-light)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100054368597169#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'var(--text-light)', opacity: 0.7, transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'var(--accent-gold)' }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.color = 'var(--text-light)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/cief-consulting/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-light)', opacity: 0.7, transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'var(--accent-gold)' }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.color = 'var(--text-light)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div style={{ flex: '1 1 30%' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.5, marginBottom: '1.5rem' }}>
              Contacto
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                <MapPin size={18} style={{ color: 'var(--accent-sage)', flexShrink: 0, marginTop: '2px' }} />
                <span>Torre Empresarial, Av. Winston Churchill, Santo Domingo, Rep. Dom.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                <Phone size={18} style={{ color: 'var(--accent-sage)', flexShrink: 0 }} />
                <span>+1 809-540-5466</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                <Mail size={18} style={{ color: 'var(--accent-sage)', flexShrink: 0 }} />
                <span>info@cief.com.do</span>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div style={{ flex: '1 1 20%' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', opacity: 0.5, marginBottom: '1.5rem' }}>
              Navegación
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} CIEF Consulting. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-light)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Términos</a>
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-light)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Privacidad</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-layout {
            flex-direction: row !important;
            justify-content: space-between;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
