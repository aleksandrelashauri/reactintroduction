import {SET_USER} from "../user/userActionConst";

const initialState = {
    products: {},
    isLogginIn: false,
}


export default function productsReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER:{

        }
        default:
            return state
    }
}