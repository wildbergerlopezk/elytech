import { Mail, MapPin, Clock } from 'lucide-react';
import SectionHeader from '../../ui/SectionHeader';
import './ContactSection.css'
import '../style.css'

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <SectionHeader 
              badge="Contacto" 
              title={
                <>¿Listo para transformar tu <span className="gradient-text">idea en realidad</span>?</>
              }
              description="Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución para tu negocio."
            />
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>elytechsys@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Villarrica, Paraguay</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Respuesta</h4>
                  <p>Menos de 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
