import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts } = useFilters()
  
  const filteredProducts = filterProducts(products)

  return (
    <div>
      <Header/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </div>
  )
}

export default App

