import { useRef, useState, useMemo, useEffect } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)

      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  // const sortedMoviesByYear = sort 
  //   ? [...movies].sort((a,b) => b.year - a.year)
  //   : movies

  // const sortedMoviesByTtitle = sort 
  //   ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
  //   : movies //localeCompare sirve para comparar aunque existan acentos, colocando por ejemplo una "a" junto a una "á"

  const sortedMovies = useMemo(() => {
    return sort 
       ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
       : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}