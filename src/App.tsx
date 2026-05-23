import { Card } from './animation-tineline-scroll/Card'
import {
  MdPalette, MdAutoAwesome, MdTouchApp, MdWidgets, MdStyle,
  MdVisibility, MdCode, MdBolt, MdAccessibility, MdPhoneAndroid,
  MdTimer, MdTune, MdLoop, MdEco, MdRocket
} from 'react-icons/md'
import './App.css'

function App() {
  return (
    <>
      <section className="hero">
        <h1>Timeline Scroll Animation</h1>
        <p>Scrollea para ver la animación</p>
        <span className="arrow">↓</span>
      </section>

      <div className="cards-grid">
        <Card title="Diseño de interfaces" subtitle="Creá experiencias visuales que conecten con los usuarios desde el primer vistazo." icon={MdPalette} tag="Design" delay={0} />
        <Card title="Animaciones fluidas" subtitle="Movimiento con propósito: cada transición guía la atención sin distraer." icon={MdAutoAwesome} tag="Motion" delay={50} />
        <Card title="Scroll reveal" subtitle="Los elementos aparecen en el momento justo, acompañando el ritmo de lectura." icon={MdTouchApp} tag="UX" delay={100} />
        <Card title="Componentes React" subtitle="Bloques reutilizables que escalan sin perder coherencia ni performance." icon={MdWidgets} tag="React" delay={150} />
        <Card title="CSS Modules" subtitle="Estilos encapsulados por componente, sin conflictos ni clases globales." icon={MdStyle} tag="CSS" delay={200} />
        <Card title="Intersection Observer" subtitle="Detecta visibilidad de forma nativa y eficiente, sin librerías externas." icon={MdVisibility} tag="API" delay={250} />
        <Card title="TypeScript" subtitle="Tipos estáticos que previenen errores y mejoran la experiencia de desarrollo." icon={MdCode} tag="Types" delay={300} />
        <Card title="Performance" subtitle="Animaciones con transform y opacity para no afectar el layout ni el paint." icon={MdBolt} tag="Perf" delay={350} />
        <Card title="Accesibilidad" subtitle="Respeta prefers-reduced-motion y mantiene el contenido siempre legible." icon={MdAccessibility} tag="a11y" delay={400} />
        <Card title="Responsive" subtitle="Grid adaptable que funciona desde mobile hasta pantallas ultrawide." icon={MdPhoneAndroid} tag="Layout" delay={450} />
        <Card title="Delay en cascada" subtitle="Cada card espera su turno, creando una secuencia visual armoniosa." icon={MdTimer} tag="Timing" delay={500} />
        <Card title="Threshold 15%" subtitle="La animación se dispara cuando el 15% del elemento entra al viewport." icon={MdTune} tag="Config" delay={550} />
        <Card title="Reutilizable" subtitle="Un solo componente Card que acepta cualquier contenido y configuración." icon={MdLoop} tag="DX" delay={600} />
        <Card title="Sin dependencias" subtitle="Solo React y CSS nativo. Sin librerías de animación externas." icon={MdEco} tag="Minimal" delay={650} />
        <Card title="Listo para prod" subtitle="Código limpio, tipado y optimizado para salir a producción hoy mismo." icon={MdRocket} tag="Ready" delay={700} />
      </div>
    </>
  )
}

export default App
