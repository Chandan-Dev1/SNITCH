import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../features/state/auth.slice.js'

export const store = configureStore({
    reducer:{
        auth:AuthReducer,
    }
})