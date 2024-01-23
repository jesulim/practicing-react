/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products({ products }) {
  return (
    <main>
      <ul className='grid '>
        {
          products.map(product => (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button className='rounded-md p-2 bg-gray-900'>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}