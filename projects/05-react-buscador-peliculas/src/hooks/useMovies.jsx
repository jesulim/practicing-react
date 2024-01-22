import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(({imdbID, Title, Year, Poster}) => ({
    id: imdbID,
    title: Title,
    year: Year,
    poster: Poster,
  }))

  const getMovies = () => {
    if (search) {
      fetch(`https://www.omdbapi.com/?apikey=8d9bb82a&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(withoutResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
