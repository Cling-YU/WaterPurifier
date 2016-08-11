import React from 'react';
import {
    Image,
    Text,
    StyleSheet,
    View
} from 'react-native';

class AddView extends React.Component{

    constructor(props){
        super(props);
        this.state={
            chooseNumber:0
        }
    }

    render(){
        let num = this.state.chooseNumber;
        return(
            <View style={styles.bgView}>
                {
                    this._defult()
                }

            </View>
        )
    }

    _defult(){
        return(
            <Image style={styles.rightImage} source={require('../Source/filter.png')}></Image>
        )
    }

    _choosed(){

    }
}


const styles = StyleSheet.create({
    bgView:{
        flexDirection:'row',
        alignItems:'center'
    },
    rightImage:{
        width:30,
        height:30,
        borderRadius:15
    },
    leftImage:{
        width:30,
        height:30,
        borderRadius:15
    },
    textView:{
        width:40,
        height:40,
        textAlign:'center',
        color:'gray'
    }

})

export default AddView;