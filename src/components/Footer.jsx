import { FiArrowUpRight } from 'react-icons/fi'

const serviceLinks = [
  ['Automatización', '#servicios'],
  ['Páginas web', '#servicios'],
  ['Gestión de clientes', '#servicios'],
  ['Nube y respaldos', '#servicios'],
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-col">
            <a className="brand brand--footer" href="#inicio">
              <span className="brand-mark"><span /><span /><span /></span>
              <span className="brand-name">digitalpyme<span>consultores</span></span>
            </a>
            <p>Consultoría en automatización de procesos y arquitectura digital para pequeñas y medianas empresas.</p>
            <span className="footer-demo-label">Propuesta académica · Empresa ficticia</span>
          </div>
          <div className="footer-column">
            <h4>Navegación</h4>
            <a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#proceso">Cómo trabajamos</a><a href="#contacto">Contacto</a>
          </div>
          <div className="footer-column">
            <h4>Servicios</h4>
            {serviceLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
          <div className="footer-cta">
            <span className="mini-label mini-label--light">¿TIENES UNA IDEA?</span>
            <h3>Hagamos que la tecnología trabaje para tu negocio.</h3>
            <a href="#contacto">Cuéntanos tu necesidad <FiArrowUpRight /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DigitalPyme Consultores. Todos los derechos reservados.</span>
          <span>Prototipo institucional con fines académicos.</span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  )
}
