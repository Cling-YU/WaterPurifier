/**
 * Created by cmcc on 16/8/11.
 */
import * as types from './actionTypes';

export function getUserName(username) {
    return {
        type: types.USERNAME,
        username:username,

    };
}

export function getPhone(phone) {
    return {
        type: types.PHONE,
        phone:phone,
    };
}

export function getAddr(address) {
    return {
        type: types.ADDR,
        addr:address,
    };
}
