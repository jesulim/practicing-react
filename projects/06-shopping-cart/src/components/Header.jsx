import Filters from './Filters'

export function Header() {
  return (
    <header>
      <h1 className='text-3xl'>React Shop 🛒</h1>
      <Filters />
    </header>
  )
}