import { produce } from "immer"

const initState = {
        products:[],
        isLoading:false,
        error:""
}as { products: any[], isLoading: boolean, error: string }

export const ProductReducer = (state = initState , action:any)=>{
        return produce(state, drafState =>{
                switch(action.type){
                        case "products/fetching":
                                drafState.isLoading = true
                                break
                        
                        case "products/fetchingSucess":
                                drafState.products = action.payload
                                drafState.isLoading = false
                                break 
                        case "products/fetchingFaild":
                                drafState.error = action.payload
                                break
                        case "products/fetchingFinally":
                                drafState.isLoading = false
                                break
                        case "products/addProduct":
                                drafState.products.push(action.payload)
                                break
                        case "products/removeProduct":
                                const id = action.payload
                                drafState.products =  state.products.filter((product:any)=>product.id != id)
                                break
                        case "products/productUpdate":
                                const product = action.payload
                                drafState.products = state.products.map((item:any)=> item.id == product.id ? product : item)
                                break
                        default:
                                return state
                }
        })
        

}