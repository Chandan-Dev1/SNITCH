import {setUser,setloadin,setError} from '../state/auth.slice.js'
import {register}from '../service/auth.api.js'
import{useDispatch}  from 'react-redux'



export const useAuth =()=>{
    const dispatch = useDispatch()
 async function handleRegiter({email,contact,password,fullname,isSeller=false}) {
        const data = await register({email,contact,password,fullname,isSeller})
        dispatch(setUser(data.user ))
    }
    return {handleRegiter}
}
