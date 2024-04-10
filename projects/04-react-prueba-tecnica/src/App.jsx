import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${FirstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App(){

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)

                const firstWord = fact.split(' ')[0]
                const threeFirstWords = fact.split(' ',3).join(' ')
                fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
                    .then(res => res)
                    .then(response => {
                        const {url} = response
                        setImageUrl(url)
                    })
            })
    }, [])
    
    return (
        <main>
            <h1>TituGat</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
        </main>
    )
}