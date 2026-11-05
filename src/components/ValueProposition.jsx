import { FiSliders, FiFolder, FiCpu, FiHeart, FiTrendingUp } from 'react-icons/fi'

const benefits = [
  { icon: <FiSliders />, title: 'A la medida del negocio', text: 'Las recomendaciones parten de la forma de trabajar y las prioridades de cada empresa.' },
  { icon: <FiFolder />, title: 'Información organizada', text: 'Buscamos que los datos y documentos estén mejor estructurados y sean más fáciles de consultar.' },
  { icon: <FiCpu />, title: 'Tecnología accesible', text: 'Consideramos herramientas conocidas y alternativas que se ajusten a los recursos disponibles.' },
  { icon: <FiHeart />, title: 'Acompañamiento cercano', text: 'La orientación no termina con la configuración: también importa que el equipo pueda usarla.' },
  { icon: <FiTrendingUp />, title: 'Crecimiento gradual', text: 'Las soluciones pueden implementarse por etapas, de acuerdo con las necesidades del negocio.' },
]

export default function ValueProposition() {
  return (
    <section className="section value-section">
      <div className="container value-layout">
        <div className="value-copy reveal">
          <div className="eyebrow"><span className="eyebrow-dot" /> POR QUÉ DIGITALPYME</div>
          <h2>Una solución útil empieza por <em>entender tu negocio.</em></h2>
          <p>No todas las empresas necesitan lo mismo. Nuestra propuesta es orientar cada decisión tecnológica para que responda a una situación concreta y pueda mantenerse en el tiempo.</p>
          <a href="#contacto" className="text-link">Hablemos de tu empresa <span>↗</span></a>
        </div>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <article className="benefit-item reveal" key={benefit.title} style={{ '--delay': `${index * 70}ms` }}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
              <span className="benefit-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
