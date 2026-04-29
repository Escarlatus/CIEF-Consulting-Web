import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      // Here you would connect to a real form service
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative shapes */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'var(--accent-sage)', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.1 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'var(--accent-gold)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '4rem',
          alignItems: 'center'
        }} className="contact-grid">
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>Contáctenos</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--text-light)', lineHeight: 1.1 }}>
              Hablemos de su próxima decisión estratégica.
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '480px' }}>
              Nuestro equipo de consultores está listo para analizar sus desafíos y estructurar soluciones financieras de alto impacto.
            </p>
            
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, color: 'var(--text-light)', marginBottom: '0.5rem' }}>Escríbanos</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--accent-gold)' }}>info@cief.com.do</div>
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, color: 'var(--text-light)', marginBottom: '0.5rem' }}>Llámenos</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--accent-gold)' }}>+1 809-540-5466</div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', borderRadius: '1rem', overflow: 'hidden', height: '200px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <iframe 
                src="https://maps.google.com/maps?q=18.4781411,-69.951194&hl=es&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="CIEF Consulting Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              backgroundColor: 'var(--surface-dark)',
              borderRadius: '1.5rem',
              padding: '3rem',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-light)' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--accent-sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Send size={32} color="white" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Mensaje Enviado</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Gracias por contactarnos. Un consultor se comunicará con usted a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      color: 'white',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '1rem',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      color: 'white',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '1rem',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>¿Cómo podemos ayudarle?</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      color: 'white',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
                  Enviar Mensaje
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Newsletter; // keeping the same export name to avoid changing App.jsx imports
