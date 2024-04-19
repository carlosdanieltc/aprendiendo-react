import { useState } from 'react'
import './Filters.css'

export function Filters ({onChange}){

    const [minPrice, setMinPrice] = useState(0)

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
                <label htmlFor="price">Precio mínimo:</label>
                <input 
                    type="range"
                    id="price"
                    min='0'
                    max='1000' 
                    onChange={handleChangeMinPrice}
                />
                <span>$ {minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Móviles</option>
                </select>
            </div>
        </section>
    )
}