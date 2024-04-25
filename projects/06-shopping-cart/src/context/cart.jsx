import { createContext,useReducer,useState } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

//1. Crear el contexto
export const CartContext = createContext()

//2. Crear provider
export function CartProvider ({children}){
    const [state, dispatch] =  useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch ({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({type: 'CLEAR_CART'})

    return (
        <CartContext.Provider value = {{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}