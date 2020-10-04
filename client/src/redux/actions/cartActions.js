import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from './../constants/cartContants'

export const addToCart = (id,qty) => async(dispatch,getState) =>{
    
    const {data} = await axios.get(`/api/products/${id}`)
    if(qty >= data.countInStock) {
        qty = data.countInStock
    }
    console.log(getState().cart.cartItems)
    if(qty === 0) {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: id
        })
        localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

    }else {
        dispatch({
            type: CART_ADD_ITEM,
            payload : {
                product: data._id,
                name : data.name,
                image: data.image,
                price : data.price,
                countInStock : data.countInStock,
                qty
            }
    
        })

    }




    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
    
}

export const removeCart = (id) => (dispatch,getState ) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}