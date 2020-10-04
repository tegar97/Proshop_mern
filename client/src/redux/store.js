import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from './reducers/productReducers'
import {CartReducer} from './reducers/cartReducers'
import { userReducer } from './reducers/userReducer'
const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : CartReducer,
    user : userReducer
})

const CartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cart : {cartItems : CartItemFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store