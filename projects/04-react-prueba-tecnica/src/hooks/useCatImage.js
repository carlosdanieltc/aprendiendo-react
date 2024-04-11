import { useEffect, useState } from "react"

export function useCatImage({fact}){
    const [imageUrl, setImageUrl] = useState()
    
    //Efecto para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return
        console.log("entra custon")
        //const firstWord = fact.split(' ')[0]
        const threeFirstWords = fact.split(' ',3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
            .then(res => res)
            .then(response => {
                const {url} = response
                setImageUrl(url)
            })
    },[fact])

    return {imageUrl};
}