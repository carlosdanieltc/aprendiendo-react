import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './Router'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]


function App() {
  

  return (
    <main>
      <Router routes={routes}></Router>
    </main>
  )
}

export default App
