import { useState } from 'react'
import { FiArrowUpRight, FiMail, FiMapPin, FiMessageCircle, FiCheckCircle } from 'react-icons/fi'

const initialForm = { name: '', company: '', email: '', service: '', message: '' }
const COOKIE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeT1Vo2WKXW4RzmfV0AJQYLpcCzEhf-a-3oiCFCOz0vo_gevw/viewform?usp=header'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const openCookieForm = () => {
    window.open(COOKIE_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSending(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'edb688b1-9d7c-4922-bf19-067823601611',
          subject: `Nueva asesoría: ${form.service} (${form.company})`,
          from_name: 'DigitalPymes Web',
          Nombre: form.name,
          Empresa: form.company,
          Correo: form.email,
          Servicio: form.service,
          Mensaje: form.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setForm(initialForm)
      } else {
        alert('No se pudo enviar el correo.')
      }
    } catch (error) {
      alert('Error de conexión al intentar enviar el mensaje.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact-section section-anchor" id="contacto">
      <div className="container">
        <div className="contact-heading reveal">
          <div className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> HABLEMOS DE TU NEGOCIO</div>
          <h2>¿Qué proceso te gustaría <em>mejorar?</em></h2>
          <p>Cuéntanos brevemente qué necesita tu empresa. Podemos explorar qué tipo de solución tendría sentido para tu caso.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info reveal">
            <div className="contact-info-block">
              <span className="mini-label mini-label--light">INFORMACIÓN DEMOSTRATIVA</span>
              <h3>Conversemos sobre una posible solución.</h3>
              <p>Los siguientes datos son ficticios y se incluyen únicamente para mostrar el funcionamiento del prototipo académico.</p>
            </div>
            <div className="contact-detail"><span><FiMail /></span><div><small>Correo de ejemplo</small><strong>contacto@digitalpyme.com.co</strong></div></div>
            <div className="contact-detail"><span><FiMapPin /></span><div><small>Ubicación de referencia</small><strong>Barranquilla, Atlántico, Colombia</strong></div></div>
            <a className="whatsapp-demo" href="https://wa.me/573000000000" target="_blank" rel="noreferrer">
              <FiMessageCircle /> WhatsApp  <FiArrowUpRight />
            </a>
            <small className="demo-caption">Número: +57 300 9483046</small>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-title"><h3>Solicita una asesoría</h3><span>Todos los campos son obligatorios</span></div>
            <div className="form-row">
              <label>Nombre completo<input name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" required minLength="2" /></label>
              <label>Empresa<input name="company" value={form.company} onChange={handleChange} placeholder="Nombre de tu empresa" required minLength="2" /></label>
            </div>
            <label>Correo electrónico<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="nombre@empresa.com" required /></label>
            <label>Servicio de interés
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="">Selecciona un servicio</option>
                <option>Automatización de procesos</option>
                <option>Desarrollo de páginas web</option>
                <option>Gestión de clientes (CRM)</option>
                <option>Almacenamiento en la nube</option>
                <option>Copias de seguridad</option>
                <option>Soluciones con códigos QR</option>
                <option>Integración de WhatsApp Business</option>
                <option>Necesito orientación</option>
              </select>
            </label>
            <label>Cuéntanos sobre tu necesidad<textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe brevemente qué te gustaría mejorar..." rows="4" required minLength="10" /></label>
            <button className="button button--primary form-submit" type="submit" disabled={sending}>
              {sending ? 'Enviando...' : 'Enviar consulta de demostración'} <FiArrowUpRight />
            </button>
            {submitted && (
              <div className="form-success" role="status">
                <FiCheckCircle />
                <span><strong>Validación completada</strong>Se ha enviado un mensaje a DigitalPymes</span>
              </div>
            )}
            <p className="form-disclaimer">Tu negocio siempre conectado</p>
          </form>
        </div>

        <button
          className="button-cok button-green form-submit-green"
          type="button"
          onClick={openCookieForm}
        >
          Gana una galleta <FiArrowUpRight />
        </button>
      </div>
    </section>
  )
}
