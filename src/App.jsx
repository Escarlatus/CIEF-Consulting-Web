import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Process from './components/sections/Process'
import Newsletter from './components/sections/Newsletter'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="servicios">
          <Services />
        </section>
        
        <section id="nosotros">
          <About />
        </section>
        
        <Process />
        
        <section id="contacto">
          <Newsletter />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
