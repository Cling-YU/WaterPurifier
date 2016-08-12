/**
 * Created by cmcc on 16/8/11.
 */
import * as types from '../actions/actionTypes';
const initialState = {
    userName:'NIHAO',
    phone:undefined,
    address:undefined,
};

let userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.USERNAME:
            return {
                ...state,
                userName:action.username
            }
        case types.PHONE:
            return {
                ...state,
                phone:action.phone
            }
        case types.ADDR:
            return {
                ...state,
                address:action.addr
            }
        default:
            return state;
    }
}
export default userReducer;