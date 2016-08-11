import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Buy from './Buy';
import {onPress1} from './Buy';
class Home extends React.Component{

    render(){
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.buyStyle}
                    onPress={()=>{
                        console.log('跳转');
                        this.props.navigator.push({
                            name:'Buy',
                            component:Buy,
                            title:'购买滤芯',
                        })
                    }}
                >
                    <Text style={styles.text}>{'购买滤芯'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    buyStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        height:40,
        width:80,
        backgroundColor: 'rgb(245, 246, 247)',
        marginTop:100,
        marginLeft:50
    },

    text:{
        textAlign:'center',
        height:40,
        width:80,
        padding:10
    }
})

export default Home;