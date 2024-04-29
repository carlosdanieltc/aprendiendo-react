import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate(href){
  window.history.pushState({},'',href)
  //crear evento personalizado para avisar que hemos cambiado la url
  const navigationEvent = new Event(NAVIGATION_EVENT)

  window.dispatchEvent(navigationEvent)
}

function HomePage(){
  return (
    <>
      <h1>Home Page</h1>
      <p>Esto es el ejercicio 07 de React!</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}

function AboutPage(){
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://media.licdn.com/dms/image/D4D03AQGD-Ukdl5UKDQ/profile-displayphoto-shrink_200_200/0/1688576569361?e=2147483647&v=beta&t=PXRYGlMXzOLK1coNQURn5-hQUFydnSiZ7Y2_QTnsN_8" alt="Foto de Carlos" />
        <p>Hola! Me llamo Carlos Tabares</p>
      </div>
      <button onClick={() => navigate('/')}>Ir a la home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
