const API_KEY = '8d9bb82a'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(({ imdbID, Title, Year, Poster }) => ({
      id: imdbID,
      title: Title,
      year: Year,
      poster: Poster,
    }))
  }
  catch (e) {
    throw new Error('Error searching movies')
  }

}