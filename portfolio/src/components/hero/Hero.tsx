import Button from "../../ui/Button";
import '../style.css'
import './Hero.css'

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Startup Paraguaya · Soluciones Personalizadas
                    </div>
                    <h1 className="hero-title">
                        Transformamos tu <span className="gradient-text">idea</span> en una
                        <span className="gradient-text"> solución de software</span> real y
                        rentable
                    </h1>
                    <p className="hero-description">
                        Desarrollo de software personalizado, ágil y profesional que impulsa
                        el crecimiento de tu negocio. No solo escribimos código, construimos
                        el futuro de tu empresa.
                    </p>

                    <div className="hero-cta">
                        <Button variant="primary" href="#contacto">
                            <span>Solicitar Presupuesto</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M6 12L10 8L6 4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                        <Button variant="secondary" href="#nosotros">
                            Conocer más
                        </Button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Proyectos entregados</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">24h</span>
                            <span className="stat-label">Tiempo de respuesta</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">Paraguay</span>
                            <span className="stat-label">Innovación local</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;