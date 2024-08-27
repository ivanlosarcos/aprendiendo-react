import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    const [state, setState] = useState(true)

    const fetchNewFact = () => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
                
                const firstWord = fact.split(' ', 3).join(' ')

                const url = `https://cataas.com/cat/says/${firstWord}?size=50&color=red`
                setImageUrl(url)
            })
    }


    useEffect(() => {
        fetchNewFact()
    }, [])

    return (
        <main>
            <h1>App de gatitos tontitos</h1>
            <footer>
                <button onClick={fetchNewFact}>Next Fact</button>
            </footer>
            <section>
                { fact && <p>{ fact }</p>}
                {imageUrl && <img src={imageUrl} alt='cat' />}
            </section>
        </main>
   )
}