import {createSlice} from '@reduxjs/toolkit'
import { use } from 'react';

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        loading:false,
        error:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setloadin:(state,action)=>{
            state.loading=action.payload
        },
        setError:(state,action)=>{
            state.error=action.payload
        }

    }
})

export const{setUser,setloadin,setError}=authSlice.actions
export default authSlice.reducer
