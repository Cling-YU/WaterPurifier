import * as types from './actionTypes';

export function getDefaultDataSource() {
    return dispatch => {
        dispatch(defult())
    }
}

export function addFilter(row,data) {
    return dispatch => {
        dispatch(add(row,data))
    }
}

let add = (row,data)=>{
    let dic = data[row];
    dic.number++;
    data[row] = dic;
    return{
        type:types.ListView_fileterAdd,
        listViewData:data,
        rowNumber:row
    }
}

export function deleteFilter(row,data) {
    return dispatch => {
        dispatch(del(row,data))
    }
}

let del = (row,data)=> {
    let dic = data[row];
    dic.number--;
    data[row] = dic;
    return{
        type:types.ListView_fileterDel,
        listViewData:data,
        rowNumber:row
    }
}

let defult = ()=>{
    return{
        type:types.ListView_defult,
        listViewData:[
            {
                title:'滤芯1号',
                isOuttime:false,
                isColseTime:true,
                money:88,
                number:1
            },
            {
                title:'滤芯2号',
                isOuttime:true,
                isColseTime:false,
                money:188,
                number:0
            },
            {
                title:'滤芯3号',
                isOuttime:false,
                isColseTime:false,
                money:150,
                number:0
            },
            {
                title:'滤芯4号',
                isOuttime:false,
                isColseTime:false,
                money:288,
                number:3
            },
            {
                title:'滤芯5号',
                isOuttime:false,
                isColseTime:false,
                money:118,
                number:4
            }
        ],
        chooseNumber:8
    }
}

