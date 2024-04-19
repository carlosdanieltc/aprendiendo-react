import { useState, useId } from 'react'
import './Filters.css'

export function Filters ({onChange}){

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const cayegoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        //POR REVISAR
        setMinPrice(event.target.value)
        onChange( prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        //REVISAR
        onChange( prevState => ({
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
                    onChange={handleChangeMinPrice}
                />
                <span>$ {minPrice}</span>
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