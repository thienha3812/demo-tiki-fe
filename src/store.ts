import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import { useDispatch } from 'react-redux'

import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
})

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   })
// }

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store