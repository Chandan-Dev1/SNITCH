import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../features/auth/state/auth.slice.js'
import ProductReducer from '../features/products/state/product.slice.js'
import cartReducer  from '../features/cart/state/cart.slice.js'

export const store = configureStore({
    reducer:{
        auth:AuthReducer,
         product:ProductReducer,
        cart:cartReducer
    }
})