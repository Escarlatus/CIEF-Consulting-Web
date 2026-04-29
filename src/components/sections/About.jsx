import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-light)',
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Blur */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        backgroundColor: 'var(--accent-sage)',
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.1,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{
          display: 'grid',
          gap: '4rem',
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>Nuestra Historia</span>
            
            <h2 style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              marginTop: '1rem',
              marginBottom: '2rem'
            }}>
              "Elevando el estándar de la consultoría estratégica en República Dominicana desde <span style={{ color: 'var(--accent-gold)', fontStyle: 'italic' }}>2006</span>."
            </h2>
            
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              CIEF Consulting nació con la misión de construir puentes entre el análisis riguroso y la toma de decisiones. Nuestro fundador, <strong>Raúl E. Hernández Báez</strong>, estableció la firma para proveer inteligencia económica de clase mundial adaptada a la realidad empresarial dominicana.
            </p>

            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', lineHeight: 1.8 }}>
              Hoy, somos los asesores de confianza detrás de las operaciones corporativas e institucionales más relevantes del país.
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '3rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '2.5rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '0.5rem' }}>Fundación</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>2006</div>
              </div>
              
              <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
              
              <div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '0.5rem' }}>Liderazgo</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>Visión Experta</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Founder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-image-container"
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '100%' }}
          >
            {/* Creative Background Element (Offset Circle / Podium) */}
            <div style={{ 
              position: 'absolute', 
              bottom: '10%', 
              right: '5%',
              width: '75%', 
              aspectRatio: '1', 
              backgroundColor: 'rgba(255,255,255,0.02)', 
              borderRadius: '50%', 
              border: '1px solid rgba(255,255,255,0.08)',
              zIndex: 1,
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.2)'
            }}>
              <div style={{ position: 'absolute', top: '10%', right: '10%', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent-gold)' }}></div>
            </div>
            
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              width: '90%', 
              height: '35%', 
              backgroundColor: 'var(--surface-dark)', 
              borderRadius: '2rem 2rem 0 0', 
              zIndex: 1,
              borderTop: '1px solid rgba(255,255,255,0.05)'
            }}></div>
            
            <img 
              src="/assets/Screenshot_29-4-2026_15613_www.instagram.com-removebg-preview.png" 
              alt="Raúl E. Hernández Báez" 
              style={{ 
                width: '85%', 
                height: '95%', 
                objectFit: 'contain', 
                objectPosition: 'bottom center',
                filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.5))',
                position: 'relative',
                zIndex: 2
              }} 
            />

            <div className="about-quote-box" style={{
              position: 'absolute',
              backgroundColor: 'var(--accent-gold)',
              color: 'var(--bg-dark)',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              zIndex: 10,
              maxWidth: '220px'
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', lineHeight: 0.8, color: 'var(--bg-dark)', opacity: 0.2, marginBottom: '-1rem' }}>"</div>
              <p style={{ fontWeight: 600, fontStyle: 'italic', marginBottom: '1rem', fontSize: '1rem' }}>Excelencia y rigor analítico en cada proyecto.</p>
              <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>R. Hernández Báez, PhD</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '2px' }}>Fundador y Managing Partner</div>
            </div>
          </motion.div>
          
        </div>
      </div>

      <style>{`
        .about-image-container {
          height: 450px;
        }
        .about-quote-box {
          bottom: 1rem;
          right: 0rem;
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
          .about-image-container {
            height: 600px;
          }
          .about-quote-box {
            bottom: 2rem;
            right: -2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
