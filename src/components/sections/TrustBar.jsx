import React from 'react';

import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedNumber = ({ end, duration = 2.5, decimals = 0 }) => {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setValue(end * easeProgress);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <>{Number(value.toFixed(decimals))}</>;
};

const TrustBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 204, suffix: '+', label: 'Profesionales' },
    { value: 45, suffix: '+', label: 'Empresas asesoradas' },
    { value: 90, suffix: '%', label: 'Satisfacción garantizada' },
    { value: 4.5, suffix: '/5', label: 'Calificación promedio', decimals: 1 }
  ];

  return (
    <div style={{ backgroundColor: 'var(--surface)', padding: '5rem 0' }} ref={ref}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }} className="bento-grid">
          
          {/* Main Stat Card (Spans more space on desktop) */}
          <div className="main-stat" style={{
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--text-light)',
            padding: '3rem',
            borderRadius: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background decorative element */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'var(--accent-gold)', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.15 }}></div>
            
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 700, color: 'var(--accent-gold)', lineHeight: 1 }}>
              {isInView ? <AnimatedNumber end={95} duration={2.5} /> : '0'}%
            </div>
            <div style={{ fontSize: '1.25rem', marginTop: '1rem', fontWeight: 500 }}>
              de nuestros colaboradores cuenta con formación académica internacional en las mejores universidades.
            </div>
          </div>

          {/* Other Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--bg-warm)',
                padding: '2rem',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid rgba(13,31,22,0.05)'
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {isInView ? (
                    <AnimatedNumber 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.decimals || 0} 
                    />
                  ) : '0'}
                  <span style={{ color: 'var(--accent-sage)' }}>{stat.suffix}</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
