import React from 'react';
import {
    View,
    StyleSheet,
    ListView,
    Image,
    Text
} from 'react-native';

import Util from '../Common/Util';

const localData = [
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
        money:1188,
        number:5
    }
]

class Buy11 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            dataSource: new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            }),
            filterNumber:5
        }
    }




    render(){
        return(
            <View style={styles.bgView}>
                <Image style = {styles.topImage} source={require('../Source/top.png')} />
                <Text style={styles.filterText}>{'  '+'净水器适用滤芯  共'+this.state.filterNumber + '种'}</Text>
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource.cloneWithRows(localData)}
                    renderRow={this._renderRow.bind(this)}
                    bounces={false}
                />
            </View>
        )
    }

    _renderRow(data){
        return(
            <View style={styles.row}>
                <Image style={styles.rowImage} source={require('../Source/filter.png')} />
                <View style={styles.titleView}>
                    <Text style={styles.rowTitle}>{data.title}</Text>
                    <View style={styles.subTitleView}>
                        <Text style={styles.rowMoneyText}>{'¥'+data.money}</Text>
                        <Text style={styles.rowUnit}>/支</Text>
                    </View>
                </View>
                <View style={styles.addView}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bgView:{
        backgroundColor:'white',
        marginTop:44,
        height:Util.window.height - 64
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
        marginBottom:50,
    },
    row:{
        flexDirection:'row',
        height:80,
        backgroundColor:'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    titleView:{
        marginLeft:15,
        marginRight:100
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
        // marginBottom:10
    },
    rowUnit:{
        fontSize:15,
        color:'gray',
        textAlign:'center'
        // marginTop:8
    },
    addView:{
        flexDirection:'row',
        justifyContent:'center'
    }
})

export default Buy1;
