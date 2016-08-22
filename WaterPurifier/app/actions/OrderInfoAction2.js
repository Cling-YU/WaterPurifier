/**
 * Created by cmcc on 16/8/18.
 */
/*
{'配送方式':[['邮寄到家','上门安装']],
    '订单明细':{'公司':'墨顿','产品1':{'名称':'产品1','单价':123,'个数':3},'运费':10,'上门服务费':20,'合计':3},
    '支付方式':[['支付宝支付','微信支付','货到付款']]};
 */
 import * as types from './actionTypes';
 export function saveOrderInfoToStore2(productsList) {
     return dispatch=>{
        dispatch(init(productsList));
     }

 }

 export function addOrderInfo2(productsList,sectionid,index) {//更改数组index对应的个数
     return dispatch=>{
        dispatch(add(productsList,sectionid,index));
     }
 }

 export function minusOrderInfo2(productsList,sectionid,index) {//更改数组index对应的个数
     return dispatch=>{
        dispatch(minus(productsList,sectionid,index));

     }
 }

function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

 function init(productsList){
     return {
             type:types.SAVEORDERINFOTOSTORE,
             productsList:productsList,

    };
 }

 function add(productsList,sectionid,index){
     var productlist = new Map();
     console.log('                         add');
     productlist = objToStrMap(productsList);
     let productInfo = productsList[sectionid];
     let product = productsList[sectionid][index];
     product['个数']++;
     var key = index;

     productlist.set(key,product);
     let totalMoney = productInfo['合计'];
     totalMoney += product['单价'];
     productInfo['合计']=totalMoney;
     productlist.set('合计',productInfo);
     return{
         type: types.ADDORDERINFO,
         productsList:productsList,
     };

 }

 function minus(productsList,sectionid,index){
     var productlist = new Map();
     console.log('                         minus');
     productlist = objToStrMap(productsList);
     let productInfo = productsList[sectionid];
     let product = productsList[sectionid][index];
     product['个数']--;
     var key = index;

     productlist.set(key,product);
     let totalMoney = productInfo['合计'];
     totalMoney -= product['单价'];
     productInfo['合计']=totalMoney;
     productlist.set('合计',productInfo);
     return{
         type: types.ADDORDERINFO,
         productsList:productsList,
     };

 }



