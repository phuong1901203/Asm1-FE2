import { produce } from 'immer'
import {createContext, useReducer} from 'react'
import { ProductReducer } from '../reducers/ProductReducer'

export const ProductContext = createContext({} as any)
const initState = {
        products:[],
        isLoading:false,
        error:""
}
const ProductProvider = ({children}:any)=>{
        const [state,dispatch] = useReducer(produce(ProductReducer),initState)
        return (
                <ProductContext.Provider value={{state,dispatch}}>
                        {children}
                </ProductContext.Provider>
        )
}
export default ProductProvider