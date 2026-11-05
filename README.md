# DigitalPyme Consultores

Prototipo institucional académico para una propuesta B2B de consultoría en automatización de procesos y arquitectura digital para pequeñas y medianas empresas.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará la dirección local para abrir el sitio en el navegador.

## Compilar para producción

```bash
npm run build
npm run preview
```

## Tecnologías

- React
- Vite
- JavaScript
- CSS3
- React Icons

## Estructura

```text
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Process.jsx
│   ├── Services.jsx
│   ├── TargetAudience.jsx
│   └── ValueProposition.jsx
├── styles/
│   ├── components.css
│   └── global.css
├── App.jsx
└── main.jsx
```

## Consideraciones del prototipo

- El formulario realiza validaciones HTML y muestra una confirmación local. No envía datos a un servidor.
- El correo y el número de WhatsApp son datos ficticios de demostración. Deben reemplazarse antes de cualquier uso real.
- El contenido describe una propuesta académica; no afirma que la empresa tenga clientes, contratos o proyectos ejecutados.
- Los iconos se cargan desde `react-icons`.
- La tipografía se importa desde Google Fonts; si no hay conexión, se aplican fuentes alternativas.
