import { useEffect, useState } from "react"
import { EVENTS } from "./consts"

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
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
  
    const Page = routes.find(({path}) => path == currentPath)?.Component
    return Page ? <Page/> : <DefaultComponent/>
  }