import { createContext,useState } from "react";

//1. Crear el contexto
export const CartContext = createContext()

//2. Crear provider
export function CartProvider ({children}){
    const [cart, setCart] = useState([])

    const addToCart = product => {

        //Chequear si le producto está ya en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0 ){
            //Una forma sería usando structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        // si el producto no está en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart= product => {
        setCart(prevState => prevState.filter(item => item.id != product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value = {{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}