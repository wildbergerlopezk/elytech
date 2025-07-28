import Card from '../../ui/Card';
import SectionHeader from '../../ui/SectionHeader';
import { Handshake, Rocket, Gem, Zap, Ear, BarChart2 } from 'lucide-react';
import '../style.css';
import './ValuesSection.css'

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValuesSection: React.FC = () => {
  const values: Value[] = [
    {
      icon: <Handshake size={32} strokeWidth={2} />,
      title: "Compromiso Inquebrantable",
      description: "Cada proyecto es una prioridad. Asumimos la responsabilidad total desde el primer día."
    },
    {
      icon: <Rocket size={32} strokeWidth={2} />,
      title: "Innovación Estratégica",
      description: "Adoptamos tecnologías de vanguardia para ofrecer soluciones que generen impacto real."
    },
    {
      icon: <Gem size={32} strokeWidth={2} />,
      title: "Transparencia Total",
      description: "Creemos en relaciones claras, honestas y sin letra chica. Siempre sabés en qué etapa estamos."
    },
    {
      icon: <Zap size={32} strokeWidth={2} />,
      title: "Velocidad con Precisión",
      description: "Ejecutamos con rapidez sin comprometer la calidad. Resultados sólidos en menos tiempo."
    },
    {
      icon: <Ear size={32} strokeWidth={2} />,
      title: "Escucha Inteligente",
      description: "Primero entendemos a fondo tu visión. Luego la transformamos en soluciones funcionales."
    },
    {
      icon: <BarChart2 size={32} strokeWidth={2} />,
      title: "Orientación a Resultados",
      description: "No solo creamos software. Creamos herramientas que mueven métricas, aumentan ingresos y potencian tu negocio."
    }
  ];

  return (
    <section className="values-section">
      <div className="container">
        <SectionHeader 
          badge="Nuestros valores" 
          title={
            <>Lo que realmente <span className="gradient-text">nos distingue</span></>
          }
          center
        />
        
        <div className="values-grid">
          {values.map((value, index) => (
            <Card key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
