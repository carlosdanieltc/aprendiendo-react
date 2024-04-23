import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts} from './mocks/products'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"

function App() {

  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header></Header>
      <Products products={filteredProducts}/>
      <Footer></Footer>
    </>
  )
}

export default App
