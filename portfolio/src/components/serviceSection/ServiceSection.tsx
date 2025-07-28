import Card from '../../ui/Card';
import SectionHeader from '../../ui/SectionHeader';
import { Globe, Settings, ShoppingCart, Smartphone, Cpu, Paintbrush } from 'lucide-react';
import '../style.css';
import './ServiceSection.css'

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    featured?: boolean;
}

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            icon: <Globe size={32} strokeWidth={2} />,
            title: "Desarrollo Web",
            description: "Sitios modernos, veloces y centrados en conversión.",
            features: ["Diseño responsive", "SEO & Performance", "Hosting & Dominio"],
        },
        {
            icon: <Settings size={32} strokeWidth={2} />,
            title: "Sistemas a Medida",
            description: "Digitalizamos y optimizamos tus procesos internos.",
            features: ["CRM / ERP personalizados", "Control de stock, ventas y más", "Accesible desde cualquier lugar"]
        },
        {
            icon: <ShoppingCart size={32} strokeWidth={2} />,
            title: "Tiendas Online",
            description: "Comercio electrónico listo para vender 24/7.",
            features: ["Pasarelas de pago", "Gestión de productos e inventario", "Panel administrativo"]
        },
        {
            icon: <Smartphone size={32} strokeWidth={2} />,
            title: "Aplicaciones Móviles",
            description: "Apps nativas y multiplataforma para escalar tu idea.",
            features: ["iOS y Android", "Flutter y React Native", "Diseño UX/UI profesional"]
        },
        {
            icon: <Cpu size={32} strokeWidth={2} />,
            title: "Automatización Inteligente",
            description: "Procesos automáticos que te ahorran tiempo y dinero.",
            features: ["Automatización de tareas", "Dashboards personalizados", "Integración con APIs"]
        },
        {
            icon: <Paintbrush size={32} strokeWidth={2} />,
            title: "Diseño y Branding",
            description: "Tu marca necesita presencia, estilo y coherencia visual.",
            features: ["Identidad visual", "Diseño de logos", "Manual de marca"]
        }
    ];

    return (
        <section id="servicios" className="services-section">
            <div className="container">
                <SectionHeader
                    badge="Nuestros servicios"
                    title={
                        <>Soluciones que <span className="gradient-text">impulsan tu negocio</span></>
                    }
                    center
                    description="En Elytech diseñamos soluciones digitales a medida que potencian tus ingresos, optimizan tu operación y te hacen destacar frente a tu competencia."
                />

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className={`service-card ${service.featured ? 'featured' : ''}`}
                        >
                            <div className="service-header">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
