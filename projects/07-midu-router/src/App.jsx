import { Component, lazy, Suspense } from 'react'
import './App.css'
import { Router } from './Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './Route'

const LazyAboutPage = lazy (() => import('./pages/About')) //import dinámico (Mejor opción para rendimiento)
const LazyHomePage = lazy (() => import('./pages/Home')) //import dinámico (Mejor opción para rendimiento)

// const routes = [
//   {
//     path: '/',
//     Component: HomePage
//   },
//   {
//     path: '/about',
//     Component: AboutPage
//   },
//   {
//     path: '/search/:query',
//     Component: SearchPage
//   }
// ]

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]


function App() {

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage}></Route>
          <Route path='/about' Component={LazyAboutPage}></Route>
        </Router>
      </Suspense>
    </main>
  )
}

export default App
