import { EVENTS } from "./consts"

export function navigate(href){
    window.history.pushState({},'',href)
    //crear evento personalizado para avisar que hemos cambiado la url
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
  
    window.dispatchEvent(navigationEvent)
}

export function Link({target, to, ...props}){

    const handleClick = (event) => {
        const isMainEvent = event.button == 0 // comprueba que sea el botón primario
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey // Verifica si se están presionando teclas modificadoras
        const isManageableEvent = target == undefined || target == 'self' // Verifica si el enlace se manejará dentro de la misma ventana

        if(isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault()
            navigate(to)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props}></a>
}