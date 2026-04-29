import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  const scrollTo = (e, href) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Left Independent Logo */}
      <div style={{
        position: 'fixed',
        top: '2rem',
        left: 'clamp(1.5rem, 5vw, 4rem)',
        zIndex: 60,
        pointerEvents: isScrolled ? 'none' : 'auto'
      }}>
        <AnimatePresence>
          {!isScrolled && (
              <motion.img 
                layoutId="main-logo"
                src="/assets/CIEF_LOGO.png" 
                alt="CIEF Consulting Logo" 
                style={{ height: 'clamp(40px, 8vw, 72px)', cursor: 'pointer', transformOrigin: 'left center' }} 
                onClick={(e) => scrollTo(e, '#inicio')}
                transition={{ type: "spring", stiffness: 70, damping: 16, mass: 1 }}
              />
          )}
        </AnimatePresence>
      </div>

      {/* Floating Navbar */}
      <header 
        className="nav-header"
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '1rem',
          right: '1rem',
          margin: '0 auto',
          maxWidth: '1200px',
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <motion.div 
          layout
          className="nav-pill"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.5rem',
            backgroundColor: isScrolled ? 'rgba(245, 240, 232, 0.85)' : 'rgba(245, 240, 232, 0.5)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '9999px',
            boxShadow: isScrolled ? '0 10px 40px -10px rgba(13, 31, 22, 0.15)' : 'none',
            border: '1px solid rgba(255,255,255,0.2)',
            width: isScrolled ? '100%' : 'auto',
            gap: isScrolled ? '0' : '3rem',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          
          {/* Logo inside pill (Visible only when scrolled) */}
          <motion.div 
            initial={false}
            animate={{ width: isScrolled ? 160 : 0, opacity: isScrolled ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 16, mass: 1 }}
            style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}
          >
            {isScrolled && (
              <motion.img 
                layoutId="main-logo"
                src="/assets/CIEF_LOGO.png" 
                alt="CIEF Consulting Logo" 
                style={{ height: '36px', cursor: 'pointer', transformOrigin: 'left center', flexShrink: 0 }} 
                onClick={(e) => scrollTo(e, '#inicio')}
                transition={{ type: "spring", stiffness: 70, damping: 16, mass: 1 }}
              />
            )}
          </motion.div>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      transition: 'color 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-sage)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'none', width: isScrolled ? '120px' : 'auto', justifyContent: 'flex-end' }} className="desktop-cta">
            <a href="#contacto" onClick={(e) => scrollTo(e, '#contacto')} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Hablemos
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle"
            style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: 0 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </motion.div>
      </header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(13, 31, 22, 0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 48
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '5rem',
              left: '1rem',
              right: '1rem',
              backgroundColor: 'var(--bg-warm)',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 20px 50px -10px rgba(13, 31, 22, 0.3)',
              border: '1px solid rgba(13,31,22,0.05)',
              zIndex: 49
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: 0, padding: 0, listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    style={{
                      display: 'block',
                      padding: '0.75rem',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontSize: '1.125rem'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '1rem' }}>
                <a href="#contacto" onClick={(e) => scrollTo(e, '#contacto')} className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', textDecoration: 'none' }}>
                  Hablemos
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav, .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-header {
            justify-content: flex-end !important;
          }
          .nav-pill {
            padding: 0.5rem 1rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
