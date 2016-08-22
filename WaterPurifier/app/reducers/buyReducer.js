import * as types from '../actions/actionTypes';

const initalState = {
    listViewData:[],
    money:0,
    chooseNumber:0,
    isLoading:true,
    rowNumber:0,
    isDefault:false
}

let buyReducer = (state = initalState,action) => {
    console.log('buyReducer更新'+action.type);
    switch (action.type){
        //初始化本地数据
        case types.ListView_defult:
            console.log('数据数据');
            if (state.isDefault){
                return state;
            }else {
                state.isDefault = true;
                let data = action.listViewData;
                let money = state.money;
                let num = state.chooseNumber;

                data.map((listDict)=>{
                    if (listDict.money && listDict.number){
                        money+=listDict.money * listDict.number,
                            num += listDict.number
                    }
                })

                return Object.assign({},state,{
                    listViewData:action.listViewData,
                    money:money,
                    chooseNumber:num,
                    isLoading:false
                })
            }



        //增加商品时
        case types.ListView_fileterAdd:
            let number = state.chooseNumber;
            number++;

            let money_add = state.money;
            let dict_add = state.listViewData[action.rowNumber];
            money_add += dict_add.money;
            return Object.assign({},state,{
                listViewData:action.listViewData,
                chooseNumber:number,
                money:money_add
            })

        //减少商品
        case types.ListView_fileterDel:
            let number2 = state.chooseNumber;
            number2--;
            let money_del = state.money;
            let dict_del = state.listViewData[action.rowNumber];
            money_del -= dict_del.money;
            return Object.assign({},state,{
                listViewData:action.listViewData,
                chooseNumber:number2,
                money:money_del
            })

        case types.ListView_isLoading:
            return Object.assign({},state,{
                isLoading:true
            })

        default:
            return state
    }
}

export default buyReducer;