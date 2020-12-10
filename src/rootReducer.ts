import { combineReducers } from '@reduxjs/toolkit'
import { cartReducer, userReducer } from './reducers'

const rootReducer = combineReducers({
    cart:cartReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer