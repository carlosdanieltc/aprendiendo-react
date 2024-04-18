import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts} from './mocks/products'


function App() {

  const [products] = useState(initialProducts)

  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  // const filterProducts = (products) => {
  //   return products.filter(product => {
  //     return 
  //   })
  // }

  return (
    <>
      <h1>Shopping cart 🛒</h1>
      <Products products={products}/>
    </>
  )
}

export default App
