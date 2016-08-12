import React from 'react';
import {
    Image,
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

class AddView extends React.Component{

    constructor(props){
        super(props);
        this.state={
            chooseNumber:this.props.number
        }
    }

    render(){
        let num = this.state.chooseNumber;
        return(
            this.state.chooseNumber > 0 ?
                this._choosed():
                this._defult()
        )
    }

    _defult(){
        return(
            <View style={styles.bgView}>
                <TouchableOpacity
                    style={styles.rightAction_defult}
                    onPress={()=>{
                        console.log('+++'+this.state.chooseNumber+this.props.number);
                        this.state.chooseNumber++
                        this.setState({
                            chooseNumber:this.state.chooseNumber
                        })

                    }}
                >
                    <Image style={styles.rightImage_defult} source={require('../../Source/filter.png')}></Image>
                </TouchableOpacity>
            </View>

        )
    }

    _choosed(){
        return(
            <View style={styles.bgView}>
                <TouchableOpacity
                    style={styles.leftAction}
                    onPress={()=>{
                        this.state.chooseNumber--;
                        console.log('-'+'   '+this.state.chooseNumber);
                        this.setState(
                            {chooseNumber:this.state.chooseNumber}
                        )
                    }}
                >
                    <Image style={styles.leftImage_choose} source={require('../../Source/filter.png')}></Image>
                </TouchableOpacity>

                <Text style={styles.textView}>{this.state.chooseNumber}</Text>

                <TouchableOpacity
                    style={styles.rightAction_choose}
                    onPress={()=>{
                        this.state.chooseNumber++;
                        console.log('+'+'   '+this.state.chooseNumber+this.props.number);
                        this.setState(
                            {chooseNumber:this.state.chooseNumber}
                        )
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