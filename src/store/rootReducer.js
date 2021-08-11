import { combineReducers } from 'redux';
import user from './user/userReducer'
import products from './products/productsReducer'

const appReducer = combineReducers({
    user,
    products,
});


export default appReducer;
