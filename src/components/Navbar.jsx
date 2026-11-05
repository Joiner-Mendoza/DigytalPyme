import { useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const links = [
  ['Inicio', '#inicio'],
  ['Nosotros', '#nosotros'],
  ['Servicios', '#servicios'],
  ['Cómo trabajamos', '#proceso'],
  ['Contacto', '#contacto'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegación principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="DigitalPyme Consultores, inicio">
          <span className="brand-mark"><span /><span /><span /></span>
          <span className="brand-name">digitalpyme<span>consultores</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-content ${menuOpen ? 'nav-content--open' : ''}`}>
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
          </div>
          <a className="button button--small button--nav" href="#contacto" onClick={closeMenu}>
            Solicitar asesoría <FiArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  )
}
