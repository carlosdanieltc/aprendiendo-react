import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="" />
            <div>
                <strong>Iphone</strong> - $500
            </div>
            <footer>
            <small>
                Qty: 1
            </small>
            <button>+</button>
        </footer>
          </li>
        </ul>

        <button>
            <ClearCartIcon></ClearCartIcon>
        </button>
      </aside>
    </>
  )
}