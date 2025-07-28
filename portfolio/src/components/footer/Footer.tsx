import '../style.css'
import './Footer.css'

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/_elytech/" },
    { name: "Tik Tok", icon: "tiktok", url: "https://www.tiktok.com/@elytech_?_t=ZM-8yPpkNJKBfy&_r=1" },
    { name: "Linkedin", icon: "linkedin", url: "https://www.linkedin.com" },
    { name: "Whatsapp", icon: "whatsapp", url: "https://wa.me/" },
    { name: "Github", icon: "github", url: "https://github.com" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/ElytechBlancoRecortado.png"
              alt="Elytech Logo"
            />
            <p className="footer-slogan">
              Transformamos tu visión en soluciones digitales reales
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#servicios">Desarrollo Web</a></li>
                <li><a href="#servicios">Sistemas a Medida</a></li>
                <li><a href="#servicios">Tiendas Online</a></li>
                <li><a href="#servicios">Aplicaciones Móviles</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Nosotros</h4>
              <ul>
                <li><a href="#nosotros">¿Quiénes somos?</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#inicio">Inicio</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Redes</h4>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 <strong>Elytech Software & Solutions</strong>. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;