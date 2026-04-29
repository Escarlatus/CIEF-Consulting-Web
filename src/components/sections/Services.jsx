import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Landmark, Briefcase, ChevronRight, Target, Shield, LineChart, BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -452 : 452;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
    <div id="servicios" style={{ backgroundColor: 'var(--bg-warm)', padding: '8rem 0', overflow: 'hidden' }}>
      <div className="container" style={{ 
        marginBottom: '4rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        flexWrap: 'wrap', 
        gap: '2rem' 
      }}>
        <div style={{ maxWidth: '600px' }}>
          <span className="eyebrow">Áreas de Práctica</span>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Nuestras <span style={{ color: 'var(--accent-sage)', fontStyle: 'italic' }}>Especialidades</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Soluciones integrales diseñadas para enfrentar los desafíos más complejos del mercado dominicano e internacional.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => scroll('left')}
            className="btn btn-secondary" 
            style={{ width: '56px', height: '56px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Anterior"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="btn btn-primary" 
            style={{ width: '56px', height: '56px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Siguiente"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div style={{ 
        paddingLeft: 'max(1.5rem, calc((100vw - var(--container-max)) / 2))', 
        paddingRight: '1.5rem' 
      }}>
        <div 
          ref={scrollRef}
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            gap: '2rem', 
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            paddingBottom: '3rem',
            paddingTop: '1rem'
          }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(index, 3) * 0.1 }}
              style={{ 
                flex: '0 0 auto',
                width: 'calc(100vw - 3rem)',
                maxWidth: '420px',
                scrollSnapAlign: 'start',
                backgroundColor: service.dark ? 'var(--bg-dark)' : 'var(--surface)',
                color: service.dark ? 'var(--text-light)' : 'var(--text-primary)',
                borderRadius: '2rem',
                padding: '3rem 2.5rem',
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
                width: '250px', 
                height: '250px', 
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
                  fontSize: '3.5rem', 
                  color: service.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  lineHeight: 0.8,
                  fontWeight: 700
                }}>
                  {service.id}
                </span>
              </div>
              
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '1rem', position: 'relative', zIndex: 10 }}>
                {service.title}
              </h3>
              
              <p style={{ fontSize: '1rem', color: service.dark ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)', marginBottom: '2.5rem', position: 'relative', zIndex: 10, flexGrow: 1 }}>
                {service.description}
              </p>
              
              <div style={{ borderTop: `1px solid ${service.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1.5rem', position: 'relative', zIndex: 10 }}>
                <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '1rem' }}>
                  Especialidades
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ 
                        color: service.dark ? 'var(--accent-gold)' : 'var(--accent-sage)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <ChevronRight size={14} />
                      </div>
                      <span style={{ fontSize: '0.95rem', fontWeight: 500, color: service.dark ? 'rgba(255,255,255,0.9)' : 'var(--text-primary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2.5rem', position: 'relative', zIndex: 10 }}>
                <a href="#contacto" className={`btn ${service.dark ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', padding: '0.875rem' }}>
                  Solicitar Consulta
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Services;
