import {
  FiRepeat, FiMonitor, FiUsers, FiCloud, FiShield,
  FiGrid, FiMessageCircle, FiArrowUpRight,
} from 'react-icons/fi'

const services = [
  {
    number: '01',
    icon: <FiRepeat />,
    title: 'Automatización de procesos',
    description: 'Proponemos herramientas para simplificar tareas repetitivas, gestionar reservas y organizar solicitudes del día a día.',
    tags: ['Reservas', 'Flujos de trabajo'],
  },
  {
    number: '02',
    icon: <FiMonitor />,
    title: 'Desarrollo de páginas web',
    description: 'Diseñamos sitios web claros y adaptables para presentar la empresa, sus productos o sus servicios en internet.',
    tags: ['Sitios corporativos', 'Presencia digital'],
  },
  {
    number: '03',
    icon: <FiUsers />,
    title: 'Gestión de clientes (CRM)',
    description: 'Planteamos formas de centralizar los datos de clientes y llevar un seguimiento ordenado de las interacciones comerciales.',
    tags: ['Contactos', 'Seguimiento'],
  },
  {
    number: '04',
    icon: <FiCloud />,
    title: 'Almacenamiento en la nube',
    description: 'Organizamos espacios digitales para guardar documentos y facilitar el acceso a la información desde distintos dispositivos.',
    tags: ['Documentos', 'Acceso compartido'],
  },
  {
    number: '05',
    icon: <FiShield />,
    title: 'Copias de seguridad',
    description: 'Orientamos la configuración de respaldos periódicos para reducir el riesgo de pérdida de información empresarial.',
    tags: ['Respaldo', 'Recuperación'],
  },
  {
    number: '06',
    icon: <FiGrid />,
    title: 'Soluciones con códigos QR',
    description: 'Creamos accesos rápidos a catálogos, menús, formularios, información de productos y otros recursos digitales.',
    tags: ['Catálogos', 'Formularios'],
  },
  {
    number: '07',
    icon: <FiMessageCircle />,
    title: 'Integración de WhatsApp Business',
    description: 'Configuramos el perfil y herramientas de atención para facilitar la comunicación con clientes y organizar consultas.',
    tags: ['Atención', 'Mensajes'],
  },
]

export default function Services() {
  return (
    <section className="section section-anchor" id="servicios">
      <div className="container">
        <div className="section-heading section-heading--center reveal">
          <div className="eyebrow"><span className="eyebrow-dot" /> QUÉ PODEMOS HACER</div>
          <h2>Soluciones digitales para <em>necesidades reales.</em></h2>
          <p>Servicios que pueden combinarse según los procesos, objetivos y recursos de cada empresa.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.number}>
              <div className="service-card-top">
                <div className="service-icon">{service.icon}</div>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href="#contacto" className="service-link" aria-label={`Consultar por ${service.title}`}>
                Consultar servicio <FiArrowUpRight />
              </a>
            </article>
          ))}
        </div>
        <div className="services-footnote reveal">
          <span className="footnote-mark">i</span>
          <p>El alcance y las herramientas se definen después de conocer las condiciones y necesidades de cada negocio.</p>
        </div>
      </div>
    </section>
  )
}
