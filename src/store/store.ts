import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from '../store/reducers/cartSlice'

export const store = configureStore({
    reducer:{
        cartReducer:cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>