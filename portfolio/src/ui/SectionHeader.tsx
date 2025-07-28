import {type ReactNode } from "react";
import '../components/style.css'

interface SectionHeaderProps {
  badge: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  badge, 
  title, 
  description,
  center = false 
}) => {
  return (
    <div className={`section-header ${center ? 'center' : ''}`}>
      <span className="section-badge">{badge}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

export default SectionHeader;