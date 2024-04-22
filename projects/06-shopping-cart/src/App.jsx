import { useContext, useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts} from './mocks/products'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { FiltersContext } from "./context/filters"

function useFilters(){

  const {filters, setFilters} = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category == 'all' || 
          product.category == filters.category
        )
      )
    })
  }

  return {filters, filterProducts, setFilters}
}

function App() {

  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}></Header>
      <Products products={filteredProducts}/>
      <Footer filters={filters}></Footer>
    </>
  )
}

export default App
