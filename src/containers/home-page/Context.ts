import React from 'react'

type TContext = {
    products : any[],
    setProducts : (value:any[]) => void
} 

export const Context = React.createContext<TContext>({
     products:[],
     setProducts : (value:any[]) => {}
})
export const Provider = Context.Provider
