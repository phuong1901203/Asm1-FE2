import { instance } from "../axios/config"

export const fetchProducts = () => async (dispatch:any) => {
        dispatch({type:"products/fetching"})
        try {
                const data = await instance.get("/products")
                dispatch({type:"products/fetchingSucess",payload:data})
        } catch (error:any) {
                dispatch({type:"products/fetchingFaild",payload:error.message})
                
        }
}

export const addProduct= (product:any)=>async (dispatch:any)=>{
        try {
                const data = await instance.post("/products",product)
                dispatch({type:"products/addProduct",payload:data})
                
        } catch (error:any) {
                console.log(error.message);
        
        } finally{
                
        }
        }
export const removeProduct = (id:number)=>async (dispatch:any)=>{
        try {
                await instance.delete(`/products/${id}`)
                dispatch({type:"products/removeProduct", payload:id})
        } catch (error) {
                
        }
        }
export   const updateProduct =  (product:any)=>async (dispatch:any)=>{
        try {
                const data = await instance.patch(`/products/${product.id}`,product)
                dispatch({type:"products/productUpdate",payload:data})
                
        } catch (error) {
                
        }
        }