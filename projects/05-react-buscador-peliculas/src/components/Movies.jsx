/* eslint-disable react/prop-types */

function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {
        movies.map(({id, title, year, poster}) => (
          <li className="movie" key={id}>
            <h3>{title}</h3>
            <p>{year}</p>
            <img src={poster} alt={`Poster of ${title}`} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults() {
  return (
    <p>No se encontraron resultados</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}