/**
 * Created by cmcc on 16/8/18.
 */
import * as types from '../actions/actionTypes';
const NUM = types.NUM;
const PRICE = types.PRICE;
const initialState = {
    productsList2:[],//eg:{'产品':{'num':1,'price':22}}
};

let OrderInfoReducer2 = (state = initialState, action) => {

    switch (action.type) {
        case types.SAVEORDERINFOTOSTORE:
            return  Object.assign({}, state, {
                productsList2:action.productsList,
            })
        case types.ADDORDERINFO:
            return {
                productsList2:action.productsList,
            }
        case types.MINUSORDERINFO:
            return {
                productsList2:action.productsList,
            }
        default:
            return state;
    }
}



export default OrderInfoReducer2;