import { FiCoffee, FiShoppingBag, FiBriefcase, FiHome, FiTool, FiArrowUpRight } from 'react-icons/fi'

const audiences = [
  { icon: <FiCoffee />, title: 'Restaurantes y cafeterías', text: 'Menús digitales, reservas y organización de pedidos.' },
  { icon: <FiShoppingBag />, title: 'Tiendas y comercios', text: 'Catálogos, información de productos y seguimiento de clientes.' },
  { icon: <FiBriefcase />, title: 'Emprendimientos', text: 'Herramientas iniciales para organizar y presentar el negocio.' },
  { icon: <FiTool />, title: 'Empresas de servicios', text: 'Gestión de solicitudes, agenda y comunicación con clientes.' },
  { icon: <FiHome />, title: 'Pequeñas empresas locales', text: 'Organización documental, respaldos y procesos internos.' },
]

export default function TargetAudience() {
  return (
    <section className="section audience-section">
      <div className="container">
        <div className="section-heading section-heading--center reveal">
          <div className="eyebrow"><span className="eyebrow-dot" /> A QUIÉNES NOS DIRIGIMOS</div>
          <h2>Negocios distintos. <em>Necesidades particulares.</em></h2>
          <p>La propuesta está pensada para empresas que quieren ordenar su operación y aprovechar mejor los recursos digitales.</p>
        </div>
        <div className="audience-grid">
          {audiences.map((item, index) => (
            <article className="audience-card reveal" key={item.title} style={{ '--delay': `${index * 65}ms` }}>
              <div className="audience-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="audience-arrow"><FiArrowUpRight /></span>
            </article>
          ))}
        </div>
        <div className="audience-note reveal"><span className="audience-note-line" /> La solución se define según el tamaño, la actividad y los recursos de cada negocio.</div>
      </div>
    </section>
  )
}
