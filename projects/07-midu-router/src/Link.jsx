import { EVENTS } from "./consts"

export function navigate(href){
    window.history.pushState({},'',href)
    //crear evento personalizado para avisar que hemos cambiado la url
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
  
    window.dispatchEvent(navigationEvent)
  }