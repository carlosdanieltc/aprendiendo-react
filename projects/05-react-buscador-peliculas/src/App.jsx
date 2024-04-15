import './App.css'
import withResults from './mocks/with-results.json'
import withoutResults from './mocks/with-results.json'
import {Movies} from './components/Movies'

function App() {

  const movies = withResults.Search

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input type="text" placeholder='Avengers, Star Wars, Matrix...'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>  
      </main>
    </div>
  )
}

export default App
