import React from 'react';
import {
    Image,
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import {addFilter,deleteFilter} from '../actions/buyAction';
class AddView extends React.Component{

    constructor(props){
        super(props);
        this.state={
            rowID:this.props.row
        }
    }

    render(){
        const {BuyReducer} = this.props;
        let Data = BuyReducer.listViewData;
        let dic = Data[this.state.rowID];
        let num = dic.number;
        console.log('num'+num);
        return(
            num > 0 ?
                this._choosed(num,this.state.rowID,Data):
                this._defult(this.state.rowID,Data)
        )
    }

    _defult(row,data){
        const {dispatch} = this.props;
        return(
            <View style={styles.bgView}>
                <TouchableOpacity
                    style={styles.rightAction_defult}
                    onPress={()=>{
                        dispatch(addFilter(row,data))
                    }}
                >
                    <Image style={styles.rightImage_defult} source={require('../../Source/filter.png')}></Image>
                </TouchableOpacity>
            </View>

        )
    }

    _choosed(num,row,data){
        const {dispatch} = this.props;
        return(
            <View style={styles.bgView}>
                <TouchableOpacity
                    style={styles.leftAction}
                    onPress={()=>{
                        dispatch(deleteFilter(row,data))
                    }}
                >
                    <Image style={styles.leftImage_choose} source={require('../../Source/filter.png')}></Image>
                </TouchableOpacity>

                <Text style={styles.textView}>{num}</Text>

                <TouchableOpacity
                    style={styles.rightAction_choose}
                    onPress={()=>{
                        dispatch(addFilter(row,data))
                    }}
                >
                    <Image style={styles.rightImage_choose} source={require('../../Source/top.png')}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    bgView:{
        flexDirection:'row',
        alignItems:'center'
    },
    rightAction_defult:{
        width:25,
        height:25,
        borderRadius:12.5,
        marginLeft:65
    },
    rightAction_choose:{
        width:25,
        height:25,
        borderRadius:12.5,
    },
    rightImage_defult:{
        width:25,
        height:25,
        borderRadius:12.5,
    },
    rightImage_choose:{
        width:25,
        height:25,
        borderRadius:12.5,
    },
    leftImage_choose:{
        width:25,
        height:25,
        borderRadius:12.5,
    },
    leftAction:{
        width:25,
        height:25,
        borderRadius:12.5,
    },

    textView:{
        width:40,
        textAlign:'center',
        color:'gray'
    }
})

export default AddView;