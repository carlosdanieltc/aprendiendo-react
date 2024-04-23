import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters (){

    const {filters, setFilters} = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const cayegoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        
        setFilters( prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters( prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio mínimo:</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000' 
                    value={filters.minPrice}
                    onChange={handleChangeMinPrice}
                />
                <span>$ {filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={cayegoryFilterId}>Categoría</label>
                <select id={cayegoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Móviles</option>
                </select>
            </div>
        </section>
    )
}