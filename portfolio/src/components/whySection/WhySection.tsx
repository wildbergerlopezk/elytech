import SectionHeader from '../../ui/SectionHeader';
import '../style.css'
import './WhySection.css'
const WhySection: React.FC = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-content">
          <div className="why-text">
            <SectionHeader
              badge="Por qué Elytech"
              title={
                <>Mientras para otros eres un número más, <span className="gradient-text">para nosotros eres fundamental</span></>
              }
            />
            <p className="lead">
              En Elytech, cada cliente cuenta. Trabajamos con dedicación extrema
              porque tu proyecto no es solo un trabajo más, es una oportunidad
              que valoramos al máximo.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div className="feature-content">
                <h4>Atención 100% personalizada</h4>
                <p>Comunicación directa y constante con nuestro equipo para entender y ejecutar tus necesidades sin intermediarios.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="feature-content">
                <h4>Tiempos realistas y cumplidos</h4>
                <p>Planificación detallada y compromiso firme para entregarte resultados en los plazos acordados, sin sorpresas.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
              </div>
              <div className="feature-content">
                <h4>Adaptabilidad total</h4>
                <p>Nos ajustamos a tu presupuesto y requerimientos, garantizando soluciones flexibles y efectivas para tu proyecto.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div className="feature-content">
                <h4>Equipo joven y dinámico</h4>
                <p>Profesionales apasionados y enfocados en resultados, impulsando tu proyecto con energía y visión innovadora.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;