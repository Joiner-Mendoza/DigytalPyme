import { FiArrowRight, FiCheck, FiCloud, FiDatabase, FiLayers  } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="hero section-anchor" id="inicio">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> CONSULTORÍA DIGITAL PARA PYMES</div>
          <h1>Tu empresa tiene potencial. <em>La tecnología ayuda a llevarlo más lejos.</em></h1>
          <p className="hero-description">
            Ayudamos a pequeñas y medianas empresas a organizar sus procesos,
            optimizar sus actividades y aprovechar mejor las herramientas digitales.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#servicios">Conoce nuestros servicios <FiArrowRight /></a>
            <a className="button button--ghost" href="#contacto">Contáctanos</a>
          </div>
          <div className="hero-note"><FiCheck /> Soluciones pensadas para la realidad de cada negocio</div>
        </div>

        <div className="hero-visual" aria-label="Ilustración conceptual de procesos empresariales conectados">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-center">
            <div className="visual-center-icon"><FiLayers  /></div>
            <span>Tu negocio</span>
            <strong>Conectado</strong>
          </div>
          <div className="float-card float-card--top">
            <span className="float-icon float-icon--blue"><FiDatabase /></span>
            <span><strong>Información</strong><small>Organizada</small></span>
            <i className="status-dot" />
          </div>
          <div className="float-card float-card--right">
            <span className="float-icon float-icon--cyan"><FiCloud /></span>
            <span><strong>En la nube</strong><small>Acceso centralizado</small></span>
          </div>
          <div className="float-card float-card--bottom">
            <span className="float-icon float-icon--green"><FiCheck /></span>
            <span><strong>Procesos</strong><small>Más simples</small></span>
          </div>
          <div className="visual-caption"><span /> TECNOLOGÍA CON PROPÓSITO</div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>CONSULTORÍA</span><span className="hero-bottom-line" /><span>AUTOMATIZACIÓN</span><span className="hero-bottom-line" /><span>ARQUITECTURA DIGITAL</span>
      </div>
    </section>
  )
}
