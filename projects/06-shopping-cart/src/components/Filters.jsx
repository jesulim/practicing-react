import { useState, useId } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filters() {
  const { setFilters } = useFilters
  
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="flex items-center justify-around text-sm my-4">
      <div className="flex gap-2">
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span className="w-20">${minPrice}</span>
      </div>

      <div className="flex gap-2">
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} className="text-black" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}

export default Filters