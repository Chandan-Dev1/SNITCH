import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../features/auth/state/auth.slice.js'
import ProductReducer from '../features/products/state/product.slice.js'

export const store = configureStore({
    reducer:{
        auth:AuthReducer,
         product:ProductReducer,
    }
})