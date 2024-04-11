import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${FirstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App(){

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    //Efecto para recuperar la cita al cargar la página
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
            })
    }, [])

    //Efecto para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return

        //const firstWord = fact.split(' ')[0]
        const threeFirstWords = fact.split(' ',3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
            .then(res => res)
            .then(response => {
                const {url} = response
                setImageUrl(url)
            })
    },[fact])
    

    return (
        <main>
            <h1>TituGat</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
        </main>
    )
}