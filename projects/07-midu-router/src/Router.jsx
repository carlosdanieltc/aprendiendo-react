import { Children, useEffect, useState } from "react"
import { EVENTS } from "./consts"
import { match } from 'path-to-regexp'
import { getCurrentPath } from "./utils"

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath())
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange) //popstate es el evento lanzado al regresar a la pagina anterior por medio del mismo navegador
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
  
      }
    },[])
    
    let routeParams = {}

    //añadimos las rutas que provienen del children <Route /> components
    const routesFromChildren = Children.map(children, ({props, type}) => {
      const {name} = type
      const isRoute = name == 'Route'

      return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    const Page = routesToUse.find(({path}) => {
      if ( path == currentPath) return true

      //Hemos usado path-to-regexp para poder detectar rutas dinamicas como por 
      //ejemplo /search/:query   <-- :query es una ruta dinamica
      const matcherUrl = match(path, {decode: decodeURIComponent})
      const matched = matcherUrl(currentPath)
      if(!matched) return false


      //Aqui guardamos los parametros de la url que eran dinamicos y que hemos extraido
      //con path-to-regexp. Por ejemplo, si la ruta es /search/:query y la url
      //es /search/javascript 
      //matched.params.query == 'javascript' 
      routeParams = matched.params
      return true

    })?.Component

    return Page ? <Page routeParams={routeParams}/> 
    : <DefaultComponent routeParams={routeParams}/>
  }