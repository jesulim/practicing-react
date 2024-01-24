import { AddToCartIcon } from './Icons'

export function Products({ products }) {
  return (
    <main>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2'>
        {
          products.slice(0, 10).map(product => (
            <li key={product.id} className='flex flex-col gap-2 rounded-md bg-gray-900 p-2'>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='rounded-sm w-full aspect-video block object-contain'
              />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button className='rounded-md p-2 bg-gray-700'>
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