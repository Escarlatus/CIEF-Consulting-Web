import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Landmark, Briefcase, ChevronRight, Target, Shield, LineChart, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Economía',
      description: 'Análisis profundo del entorno macroeconómico para fundamentar decisiones estratégicas de inversión y expansión territorial.',
      features: [
        'Análisis de coyuntura económica',
        'Estudios de factibilidad económica',
        'Proyecciones macroeconómicas',
        'Evaluación de políticas públicas'
      ],
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      dark: false
    },
    {
      id: '02',
      title: 'Finanzas',
      description: 'Estructuración financiera y optimización de capital para maximizar el valor de su empresa en el largo plazo.',
      features: [
        'Valoración de empresas',
        'Estructuración de financiamiento',
        'Fusiones y adquisiciones (M&A)',
        'Modelos financieros y proyecciones'
      ],
      icon: <PieChart size={32} strokeWidth={1.5} />,
      dark: true
    },
    {
      id: '03',
      title: 'Estrategia Corporativa',
      description: 'Asesoría de alto nivel para redefinir el modelo de negocio y garantizar la ventaja competitiva sostenible.',
      features: [
        'Planificación estratégica',
        'Optimización de procesos',
        'Gobierno corporativo',
        'Estrategias de entrada al mercado'
      ],
      icon: <Target size={32} strokeWidth={1.5} />,
      dark: false
    },
    {
      id: '04',
      title: 'Gestión de Riesgos',
      description: 'Identificación y mitigación proactiva de riesgos financieros, regulatorios y operativos.',
      features: [
        'Análisis de riesgo financiero',
        'Cumplimiento regulatorio',
        'Auditoría estratégica',
        'Manejo de crisis'
      ],
      icon: <Shield size={32} strokeWidth={1.5} />,
      dark: true
    },
    {
      id: '05',
      title: 'Inteligencia de Mercados',
      description: 'Estudios de mercado detallados y análisis de datos para comprender las dinámicas del consumidor y la competencia.',
      features: [
        'Investigación de mercado',
        'Análisis de demanda',
        'Monitoreo de competencia',
        'Estrategias de precios'
      ],
      icon: <LineChart size={32} strokeWidth={1.5} />,
      dark: false
    },
    {
      id: '06',
      title: 'Políticas Públicas',
      description: 'Evaluación y diseño de políticas e iniciativas conjuntas entre el sector público y privado.',
      features: [
        'Diseño de programas públicos',
        'Alianzas público-privadas',
        'Impacto socioeconómico',
        'Asuntos regulatorios'
      ],
      icon: <BookOpen size={32} strokeWidth={1.5} />,
      dark: true
    }
  ];

  return (
    <div id="servicios" style={{ backgroundColor: 'var(--bg-warm)', padding: '8rem 0' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <span className="eyebrow">Áreas de Práctica</span>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Nuestras <span style={{ color: 'var(--accent-sage)', fontStyle: 'italic' }}>Especialidades</span>
        </h2>
        <p style={{ margin: '0 auto', color: 'var(--text-secondary)', maxWidth: '600px' }}>
          Soluciones integrales diseñadas para enfrentar los desafíos más complejos del mercado dominicano e internacional.
        </p>
      </div>

      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ 
                backgroundColor: service.dark ? 'var(--bg-dark)' : 'var(--surface)',
                color: service.dark ? 'var(--text-light)' : 'var(--text-primary)',
                borderRadius: '2rem',
                padding: '4rem 3rem',
                position: 'relative',
                overflow: 'hidden',
                border: `1px solid ${service.dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                boxShadow: service.dark ? '0 25px 50px -12px rgba(13,31,22,0.25)' : 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Decorative Background Element */}
              <div style={{ 
                position: 'absolute', 
                top: '-10%', 
                right: '-10%', 
                width: '300px', 
                height: '300px', 
                background: service.dark ? 'var(--accent-gold)' : 'var(--accent-sage)', 
                borderRadius: '50%', 
                filter: 'blur(80px)', 
                opacity: service.dark ? 0.15 : 0.08,
                pointerEvents: 'none'
              }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  color: service.dark ? 'var(--accent-gold)' : 'var(--accent-sage)',
                  background: service.dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  display: 'inline-flex'
                }}>
                  {service.icon}
                </div>
                <span style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '4rem', 
                  color: service.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  lineHeight: 0.8,
                  fontWeight: 700
                }}>
                  {service.id}
                </span>
              </div>
              
              <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '1rem', position: 'relative', zIndex: 10 }}>
                {service.title}
              </h3>
              
              <p style={{ fontSize: '1.125rem', color: service.dark ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)', marginBottom: '3rem', position: 'relative', zIndex: 10, flexGrow: 1 }}>
                {service.description}
              </p>
              
              <div style={{ borderTop: `1px solid ${service.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '2rem', position: 'relative', zIndex: 10 }}>
                <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '1.5rem' }}>
                  Especialidades
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ 
                        color: service.dark ? 'var(--accent-gold)' : 'var(--accent-sage)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <ChevronRight size={16} />
                      </div>
                      <span style={{ fontWeight: 500, color: service.dark ? 'rgba(255,255,255,0.9)' : 'var(--text-primary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '3rem', position: 'relative', zIndex: 10 }}>
                <a href="#contacto" className={`btn ${service.dark ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                  Solicitar Consulta
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
