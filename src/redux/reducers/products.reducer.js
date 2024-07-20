import { createSlice } from "@reduxjs/toolkit";


export const productsSlice = createSlice({
    name : 'products',
    initialState : {
        isLoading : false,
        products : []
    },
    reducers:{
        saveAllProducts:(state , action) => {
            return {
                ...state,
                products : action.payload.products
            }
        },
        decrementStock: (state, action) => {
            const { id } = action.payload;
            const productIndex = action.payload.products.products.findIndex(product => product.id === id);
            if (productIndex !== -1) {
                state.products[productIndex].stock -= 1;
            }
        },
        incrementStock: (state, action) => {
            const { id } = action.payload;
            const productIndex = action.payload.products.products.findIndex(product => product.id === id);
            if (productIndex !== -1) {
                state.products[productIndex].stock += 1;
            }
        }
    }
})

export const { saveAllProducts , decrementStock , incrementStock } = productsSlice.actions;
export default productsSlice.reducer;