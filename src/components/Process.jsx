import { FiSearch, FiBarChart2, FiFileText, FiTool, FiLifeBuoy } from 'react-icons/fi'

const steps = [
  { n: '01', icon: <FiSearch />, title: 'Diagnóstico', text: 'Conocemos las necesidades, actividades y dificultades que presenta la empresa.' },
  { n: '02', icon: <FiBarChart2 />, title: 'Análisis', text: 'Revisamos los procesos e identificamos oportunidades de mejora y herramientas posibles.' },
  { n: '03', icon: <FiFileText />, title: 'Propuesta', text: 'Presentamos una alternativa tecnológica con alcance y objetivos acordes al negocio.' },
  { n: '04', icon: <FiTool />, title: 'Implementación', text: 'Desarrollamos o configuramos la solución que se haya definido con la empresa.' },
  { n: '05', icon: <FiLifeBuoy />, title: 'Acompañamiento', text: 'Orientamos al equipo para facilitar el uso y la apropiación de la solución.' },
]

export default function Process() {
  return (
    <section className="section process-section section-anchor" id="proceso">
      <div className="container">
        <div className="section-heading section-heading--split reveal">
          <div>
            <div className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> NUESTRA FORMA DE TRABAJAR</div>
            <h2>Un proceso claro, <em>de principio a fin.</em></h2>
          </div>
          <p>Antes de recomendar una herramienta, buscamos entender la operación. Así cada propuesta parte de una necesidad concreta y no de una tecnología elegida al azar.</p>
        </div>

        <div className="process-track">
          {steps.map((step, index) => (
            <article className="process-step reveal" key={step.n} style={{ '--delay': `${index * 90}ms` }}>
              <div className="process-step-top">
                <div className="process-icon">{step.icon}</div>
                <span>{step.n}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="process-bottom"><span /> Cada etapa se ajusta al alcance acordado con la empresa.</div>
      </div>
    </section>
  )
}
