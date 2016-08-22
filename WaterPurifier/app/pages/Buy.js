import React from 'react';
import {
    View,
    StyleSheet,
    ListView,
    Image,
    Text,
    TouchableOpacity,
    InteractionManager
} from 'react-native';
import {connect} from 'react-redux';
import Loading from '../Common/Loading';
import ConfirmOrder from '../containers/ConfirmOrderContainer';
import Util from '../Common/Util';
import AddView from './AddView';
import {getDefaultDataSource} from '../actions/buyAction';


import {
    saveOrderInfoToStore2,

} from '../actions/OrderInfoAction2';

export default class Buy extends React.Component{

    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            const {dispatch} = this.props;
            dispatch(getDefaultDataSource());
        })
    }

    constructor(props){
        super(props);
        this.state={
            dataSource: new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            }),
            filterNumber:5
        }
    }

    objToStrMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }

    render(){
        const {BuyReducer} = this.props;
        const {dispatch} = this.props;
        let data = BuyReducer.listViewData;
        let chooseNumber = BuyReducer.chooseNumber;
        let money = BuyReducer.money;
        let loading = BuyReducer.isLoading;

        var dataBlob ={'配送方式':[['邮寄到家','上门安装']],
            '订单明细':{'公司':'墨顿','运费':10,'上门服务费':10,'合计':143},
            '支付方式':[['支付宝支付','微信支付','货到付款']]};
        let aaa = this.objToStrMap(dataBlob['订单明细']);
        console.log('aaa'+JSON.stringify(aaa));
        let  i =0;
        BuyReducer.listViewData.map((dic)=>{
            if(dic.number !== 0){
                i++;
                let choose = {'名称':dic.title,'单价':dic.money,'个数':dic.number};
                aaa.set(i,choose);
            }
        });

        dataBlob.订单明细 = aaa;
        return(
            <View style={styles.bgView}>
                <Image style = {styles.topImage} source={require('../../Source/top.png')} />
                <Text style={styles.filterText}>{'  '+'净水器适用滤芯  共'+this.state.filterNumber + '种'}</Text>
                {
                    loading ?
                        <Loading/>:
                        <ListView
                            style={styles.listView}
                            dataSource={this.state.dataSource.cloneWithRows(data)}
                            renderRow={this._renderRow.bind(this)}
                            bounces={true}
                            enableEmptySections={true}
                        />
                }


                <View style={styles.bottomView}>
                    <View style={styles.cartView}>
                        <Image style={styles.cartImage} source={require('../../Source/filter.png')}/>
                        {
                            chooseNumber > 0 ?
                                <Text style={styles.redPoint}>{chooseNumber}</Text> :
                                <Text/>
                        }
                    </View>
                    <View style={styles.bottomTextView}>
                        <Text style={{position:'absolute',bottom:10,color:'gray'}}>合计:</Text>
                        <Text style={{position:'absolute',bottom:10,color:'red',fontSize:22,marginLeft:50}}>{'¥'+money}</Text>

                    </View>
                    <TouchableOpacity style={styles.chooseAction}
                        onPress={()=>{
                            console.log('选好了'+JSON.stringify(dataBlob)+JSON.stringify(aaa));
                            dispatch(saveOrderInfoToStore2(dataBlob));
                            this.props.navigator.push({
                                component:ConfirmOrder,
                            })
                        }}
                    >
                        <View style={styles.chooseBgView}>
                            <Text style={{color:'white',fontSize:22}}>选好了</Text>

                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    _renderRow(rowData, sectionID, rowID){

        return(
            <View style={styles.row}>
                <Image style={styles.rowImage} source={require('../../Source/image/D05_address@2x.png')} />
                <View style={styles.titleView}>
                    <Text style={styles.rowTitle}>{rowData.title}</Text>
                    <View style={styles.subTitleView}>
                        <Text style={styles.rowMoneyText}>{'¥'+rowData.money}</Text>
                        <Text style={styles.rowUnit}>/支</Text>
                    </View>
                </View>
                <AddView style={styles.addView} row={rowID} {...this.props}>
                </AddView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bgView:{
        backgroundColor:'white',
        marginTop:44,
    },
    topImage:{
        height:200,
        width:Util.window.width
    },
    filterText:{
        backgroundColor:'gray',
        height:20,
        fontSize:12,
        color:'white'
    },
    listView:{
        flex:1,
        height:Util.window.height - 64 - 200 - 50
    },
    row:{
        flexDirection:'row',
        height:80,
        backgroundColor:'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    titleView:{
        marginLeft:10,
        width:195
    },
    subTitleView:{
        flexDirection:'row',
        alignItems:'flex-end'
    },
    rowImage:{
        width:60,
        height:60,
        marginTop:10,
        marginLeft:10
    },
    rowTitle:{
        fontSize:16,
        marginTop:10,
        height:30,
        color:'black'
    },
    rowMoneyText:{
        fontSize:24,
        color:'red',
        textAlign:'center'
    },
    rowUnit:{
        fontSize:15,
        color:'gray',
        textAlign:'center'
    },
    addView:{
        flexDirection:'row',
        width:100
    },
    bottomView:{
        flexDirection:'row',
        alignItems:'center',
        height:50
    },
    cartView:{
        width:80,
        height:50
    },
    cartImage:{
        width:30,
        height:30,
        marginTop:10,
        marginLeft:15
    },
    redPoint:{
        width:25,
        height:15,
        borderRadius:4,
        color:'white',
        backgroundColor:'red',
        top:5,
        fontSize:13,
        left:25,
        textAlign:'center',
        position:'absolute'//相对父视图布局
    },
    bottomTextView:{
        flexDirection:'row',
        width:Util.window.width - 80 - 120,
        height:50,
    },
    chooseAction:{
        width:120,
        height:50
    },
    chooseBgView:{
        width:120,
        backgroundColor:'red',
        height:50,
        alignItems:'center',
        justifyContent:'center'
    }
})
