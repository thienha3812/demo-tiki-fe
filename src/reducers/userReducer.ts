
import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        isLogged:false,
        account_info  : {

        },
        token : null
    },
    reducers:{
        setUser: (state,action) => {
            state.isLogged = true
            state.account_info = action.payload.account_info
            state.token = action.payload.token
            localStorage.setItem('token',action.payload.token)
        },
        logout : state=> {
            state.isLogged  = false
            state.account_info  = {}
            localStorage.removeItem('token')
        }
    }
})
export const userSelector = (state:any) => state.user
export const userReducer = user.reducer
export const {setUser,logout} = user.actions