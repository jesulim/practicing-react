import Filters from './Filters'

export function Header({ changeFilters }) {
  return (
    <header>
      <h1 className='text-3xl'>React Shop 🛒</h1>
      <Filters onChange={changeFilters}/>
    </header>
  )
}