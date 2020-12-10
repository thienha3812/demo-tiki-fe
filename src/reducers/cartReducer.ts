import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";




const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers:{
        addItem : (state,action) => {
            let indexItemInCart = state.cart.findIndex((item:any) => item.id === action.payload.id)
            if( indexItemInCart === -1){
                state.cart.push(action.payload as never) 
            }else{
                state.cart[indexItemInCart] = action.payload as never
            }

        },
        removeItem : (state,action) => console.log(action.payload)
    }
})
export const cartReducer = cart.reducer
export const cartSelector = (state:any) => state.cart
export const {addItem,removeItem } = cart.actions