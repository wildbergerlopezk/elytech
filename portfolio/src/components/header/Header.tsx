import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import '../style.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && <div className="sidebar-overlay" onClick={closeMenu} />}

      <header className="header">
        <nav className="nav">
          <div className="nav-container">
            <div className="logo-container">
              <img
                className="logo"
                src="ElytechBlancoRecortado.png"
                alt="Elytech Logo"
              />
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <a href="#inicio" onClick={closeMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" onClick={closeMenu}>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={closeMenu}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={closeMenu}>
                  Contacto
                </a>
              </li>
            </ul>

            <button
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
