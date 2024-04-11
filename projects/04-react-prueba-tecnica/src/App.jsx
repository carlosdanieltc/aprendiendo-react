import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"


//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${FirstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App(){

    const [fact, setFact] = useState()
    const {imageUrl} = useCatImage({fact})

    //Efecto para recuperar la cita al cargar la página
    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    const handleClick = async () =>{
        const newFact = await getRandomFact()
        setFact(newFact)
    }
    

    return (
        <main>
            <h1>TituGat</h1>

            <button onClick={handleClick}>Get new Fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
        </main>
    )
}