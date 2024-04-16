import { useState } from 'react'
import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies({search}) {
  const [responseMovies, setResponsiveMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      //setResponsiveMovies(withResults)
      fetch(`https://www.omdbapi.com/?apikey=36364b7f&s=${search}`)
        .then(res => res.json())
        .then(json => setResponsiveMovies(json))
    } else {
      setResponsiveMovies(withoutResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}