import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {   
            totalProducts: 0,
            totalValue: 0,
            products: []
        
    },
    reducers: {
        addToCart: (state, data) => {
            let itemIndex = state.products.findIndex(x => x.id == data.id)
            console.log(data); // data is also called as action which will have what method is used and what data the payload is having
            let totalProducts = state.totalProducts + 1;
            let products =[...state.products,data.payload];
            let totalValue = products.map(x => x.price).reduce((x, y) => {
                return x + y
            });
            
            return{...state,totalProducts,totalValue,products}
        },
        removeFromCart: (state, data) => {

        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;