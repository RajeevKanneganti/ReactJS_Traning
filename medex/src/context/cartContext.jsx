import { createContext } from "react";

export const CartContext = createContext({//createContext is the predefined method/API
    cartItemCount: 0,
    setCartItem: () => { //Medthod to update the cart count

    }
})