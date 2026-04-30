import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Estratégico',
      description: 'Analizamos la situación actual de su empresa o institución frente al contexto macroeconómico para identificar áreas de oportunidad.',
      icon: <Search size={24} />
    },
    {
      number: '02',
      title: 'Diseño de Soluciones',
      description: 'Desarrollamos modelos financieros y proyecciones económicas a la medida de sus objetivos a corto y largo plazo.',
      icon: <PenTool size={24} />
    },
    {
      number: '03',
      title: 'Implementación y Crecimiento',
      description: 'Acompañamos la ejecución de las estrategias financieras para garantizar la maximización del valor y la rentabilidad.',
      icon: <Rocket size={24} />
    }
  ];

  return (
    <div style={{ padding: '8rem 0', backgroundColor: 'var(--bg-warm)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="eyebrow">Metodología CIEF</span>
          <h2 style={{ color: 'var(--text-primary)' }}>Nuestro Proceso de Trabajo</h2>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          position: 'relative'
        }}>
          {/* Connecting Line (Desktop Only) */}
          <div className="process-line" style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '2px',
            backgroundColor: 'rgba(13,31,22,0.1)',
            zIndex: 0
          }}></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--surface)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                border: '1px solid rgba(13,31,22,0.1)',
                boxShadow: '0 10px 20px -10px rgba(0,0,0,0.05)',
                color: 'var(--accent-sage)',
                position: 'relative'
              }}>
                {step.icon}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  backgroundColor: 'var(--accent-gold)',
                  color: 'var(--bg-dark)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {index + 1}
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .process-line {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Process;
