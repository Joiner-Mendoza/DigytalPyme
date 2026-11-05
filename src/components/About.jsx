import { FiCompass, FiTarget, FiEye, FiLayers } from 'react-icons/fi'

const pillars = [
  {
    icon: <FiTarget />,
    title: 'Nuestra misión',
    text: 'Proponer soluciones digitales que ayuden a las pymes a ordenar su operación, aprovechar mejor sus recursos y atender sus necesidades tecnológicas.',
  },
  {
    icon: <FiEye />,
    title: 'Nuestra visión',
    text: 'Ser una alternativa de consultoría cercana para los negocios que buscan incorporar tecnología de forma práctica y acorde con su crecimiento.',
  },
  {
    icon: <FiLayers />,
    title: 'Nuestro enfoque',
    text: 'Entender primero cómo funciona cada negocio y, a partir de ese diagnóstico, recomendar herramientas que tengan sentido para su operación.',
  },
]

export default function About() {
  return (
    <section className="section section--soft section-anchor" id="nosotros">
      <div className="container">
        <div className="section-heading section-heading--split reveal">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> CONÓCENOS</div>
            <h2>La tecnología debe <em>adaptarse al negocio,</em> no al contrario.</h2>
          </div>
          <p>
            DigitalPyme Consultores es una propuesta de consultoría tecnológica
            dirigida a pequeñas y medianas empresas de Barranquilla y su área de influencia.
            Buscamos acercar herramientas digitales a negocios que desean mejorar la forma
            en que trabajan.
          </p>
        </div>

        <div className="about-intro reveal">
          <div className="about-symbol"><FiCompass /></div>
          <div>
            <span className="mini-label">QUIÉNES SOMOS</span>
            <p>Un equipo de consultoría enfocado en identificar oportunidades de mejora y plantear soluciones digitales claras, útiles y ajustadas a los recursos de cada empresa.</p>
          </div>
        </div>

        <div className="about-pillars">
          {pillars.map((item, index) => (
            <article className="pillar-card reveal" key={item.title} style={{ '--delay': `${index * 90}ms` }}>
              <div className="pillar-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
