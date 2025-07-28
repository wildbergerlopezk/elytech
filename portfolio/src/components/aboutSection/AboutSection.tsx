import * as React from 'react';
import SectionHeader from '../../ui/SectionHeader';
import './AboutSection.css'
import '../style.css'

const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        <SectionHeader 
          badge="Quiénes somos" 
          title={
            <>Una startup paraguaya con <span className="gradient-text">visión global</span></>
          }
        />
        
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              En <strong>ELYTECH SOFTWARE AND SOLUTIONS</strong> creemos en el
              poder de la tecnología para transformar realidades. Nacimos en
              Paraguay con una idea clara: impulsar a empresas y emprendedores
              con soluciones digitales de primer nivel.
            </p>
            <p>
              No solo desarrollamos software. Escuchamos, entendemos y diseñamos
              soluciones a medida que generan resultados reales. Somos un equipo
              joven, apasionado y ambicioso que trabaja con estándares globales,
              pero sin perder el trato humano y cercano que nos diferencia.
            </p>
          </div>

          <div className="about-metrics">
            <div className="metric">
              <h3>Nuestra Visión</h3>
              <p>
                Ser reconocidos como una empresa líder en desarrollo de software
                en Latinoamérica, impulsando la innovación y el crecimiento
                sostenible de nuestros clientes.
              </p>
            </div>
            <div className="metric">
              <h3>Nuestra Misión</h3>
              <p>
                Diseñar y desarrollar soluciones digitales con alto impacto,
                combinando tecnología de punta, creatividad y excelencia
                operativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;