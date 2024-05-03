import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './Router'
import Page404 from './pages/404'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: ({routeParams}) => <h1>Has buscado {routeParams.query}</h1>
  }
]


function App() {
  

  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}></Router>
    </main>
  )
}

export default App
