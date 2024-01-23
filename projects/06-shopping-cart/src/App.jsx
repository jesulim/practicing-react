import { products } from './mocks/products.json'
import { Products } from "./components/Products"

function App() {
  return (
    <div className='bg-gray-800 text-center text-white'>
      <Products products={products} />
    </div>
  )
}

export default App

