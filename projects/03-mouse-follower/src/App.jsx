import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  const toggleEnabled = () => {
    setEnabled(!enabled)
  }

  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup
    // se ejecuta cuando el componente se desmonta
    // o cuando cambian las dependencias antes de ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} 
      />
      <button onClick={toggleEnabled} > 
        {enabled ? 'Desactivar' : 'Activar'} seguimiento de puntero
      </button>
    </main>
    )
}

export default App
