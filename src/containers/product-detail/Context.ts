import React from 'react'
import { Product } from '../../types'


type TContext = {
    product:Product
    setProduct: (value:Product) => void
}

export const Context  = React.createContext<TContext>({
    product:<Product>{},
    setProduct: (value:Product) =>{}
})
export const Provider = Context.Provider