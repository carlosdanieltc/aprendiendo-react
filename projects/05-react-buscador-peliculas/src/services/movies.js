const API_KEY= '36364b7f'

export const searchMovies = async ({search}) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    }catch(e){
        throw new Error('Error searching movies')
    }
}

// if (search) {
//     //setResponsiveMovies(withResults)
//     return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
//       .then(res => res.json())
//       .then(json => setResponsiveMovies(json))
//   } else {
//     return setResponsiveMovies(withoutResults)
//   }