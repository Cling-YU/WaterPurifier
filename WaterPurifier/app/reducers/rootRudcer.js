/**
 * Created by cmcc on 16/8/11.
 */
import { combineReducers } from 'redux';
import User from './userReducer';
import BuyReducer from './buyReducer';
import OrderInfo2 from './orderInfoReducer2';
export default rootReducer = combineReducers({
    User,
    BuyReducer,
    OrderInfo2
})