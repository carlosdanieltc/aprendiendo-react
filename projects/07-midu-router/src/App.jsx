import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange) //popstate es el evento lanzado al regresar a la pagina anterior por medio del mismo navegador

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)

    }
  },[])

  return (
    <main>
      {currentPath == '/' && <HomePage/>}
      {currentPath == '/about' && <AboutPage/>}
    </main>
  )
}

export default App
