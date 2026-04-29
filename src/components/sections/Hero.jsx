import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem', // Account for navbar
      paddingBottom: '4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background elegant grid and noise */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(13, 31, 22, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 31, 22, 0.04) 1px, transparent 1px)`,
        backgroundSize: '4rem 4rem',
        maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      {/* Dynamic Animated Glows for "Life" */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '5%',
          right: '-5%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(200,169,110,0.4) 0%, rgba(200,169,110,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
          borderRadius: '50%'
        }}
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(100,123,109,0.3) 0%, rgba(100,123,109,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
          borderRadius: '50%'
        }}
      />
      
      {/* Abstract Finance/Economy Background Lines */}
      <svg style={{ position: 'absolute', top: '25%', left: '-5%', width: '110%', height: '50%', zIndex: 0, opacity: 0.08, pointerEvents: 'none' }} preserveAspectRatio="none" viewBox="0 0 1000 200">
        <path d="M0,150 C150,180 250,50 400,80 C550,110 650,20 800,60 C950,100 1000,40 1000,40" fill="none" stroke="var(--text-primary)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M0,120 C200,180 300,20 500,90 C700,160 800,40 1000,80" fill="none" stroke="var(--accent-sage)" strokeWidth="2" />
        <path d="M0,80 C250,120 400,180 600,100 C750,40 850,140 1000,90" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" />
      </svg>

      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.04,
        pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        zIndex: 0
      }}></div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Content (60%) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '640px', zIndex: 10 }}
          >
            <motion.span variants={itemVariants} className="eyebrow">
              Consultoría Económica y Financiera
            </motion.span>
            
            <motion.h1 variants={itemVariants} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 8vw, 6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginTop: '1rem',
              marginBottom: '1.5rem',
            }}>
              El conocimiento<br />
              <span style={{ color: 'var(--accent-sage)', fontStyle: 'italic', paddingRight: '1rem' }}>es poder.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} style={{
              fontSize: '1.25rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              maxWidth: '540px'
            }}>
              Transformamos la complejidad macroeconómica y financiera en estrategias claras para instituciones públicas y privadas de primer nivel.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#servicios" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Conoce Nuestros Servicios
                <ArrowRight size={20} />
              </a>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid rgba(13,31,22,0.1)'
              }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--bg-dark)', fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' }}>
                  18+
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.2 }}>
                  Años de<br />
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Experiencia</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content (40%) - Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
            className="hero-image-container"
          >
            {/* The Cutout Image with Bottom Fade */}
            <div style={{ 
              width: '100%', 
              height: '110%', 
              position: 'absolute', 
              bottom: '-5%',
              right: '-5%',
              display: 'flex', 
              alignItems: 'flex-end', 
              justifyContent: 'center',
              WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
            }}>
              <img 
                src="/assets/Raul-Hernandez-removebg-preview.png" 
                alt="Raúl E. Hernández Báez - Fundador" 
                style={{ 
                  width: '110%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  objectPosition: 'bottom center',
                  filter: 'drop-shadow(0 20px 30px rgba(13,31,22,0.15))'
                }} 
              />
            </div>
            
            {/* Minimal Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '15%',
                right: '5%',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '0.8rem 1.25rem',
                borderRadius: '16px',
                boxShadow: '0 20px 40px -10px rgba(13, 31, 22, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 10,
                border: '1px solid rgba(255,255,255,0.6)'
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.125rem', lineHeight: 1.2 }}>Raúl E. Hernández Báez, PhD</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '2px' }}>Fundador y Managing Partner</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-image-container {
          position: relative;
          height: 450px;
          display: flex;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-image-container {
            height: 100%;
            min-height: 650px;
          }
        }
        @media (max-width: 768px) {
          .hero-grid {
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
