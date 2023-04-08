import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat?json=true'

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(data.fact)

        const firstWord = fact.split(' ')[0]
        // const tresPrimerasPalabras = fact.split(' ').slice(0, 3).join(' ')
        const tresPrimerasPalabras = fact.split(' ', 3)
        console.log(tresPrimerasPalabras)
      })

    // async function getRandomFact () {
    //   const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //   const json = await res.json()
    //   setFact(json.fact)
    // }

    // getRandomFact()
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
