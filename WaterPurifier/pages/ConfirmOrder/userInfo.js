/**
 * Created by cmcc on 16/8/11.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    InteractionManager,
    Animated,
    PixelRatio,
} from 'react-native';
import WindowScale from '../../Common/Util';
import DeliveryInfo from './DeliveryInfo';
export default class userInfo extends React.Component {
    render() {
        return (

            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.userInfo}
                {...this.props}
                onPress={()=>{
                    this.props.navigator.push(
                    {
                       component:DeliveryInfo,
                       passProps:{
                         diapatchTest:this.props.dispatch,
                         name:this.props.userName,
                         phone:this.props.phone,
                         address:this.props.address,
                       }
                    }

                    );
                }}
            >
                <View style={styles.compareCell}>
                    <View style={styles.upContainer}>
                        <Image style={styles.userNameImg} resizeMode='cover' source = {require('../../Source/A1_login_phone.png')}/>
                        <Text style={styles.userName}>{this.props.userName}</Text>
                        <Image style={styles.phoneImg} source = {require('../../Source/A1_login_phone.png')}/>
                        <Text style={styles.userName}>{this.props.phone}</Text>
                    </View>
                    <View style={styles.downContainer}>
                        <Image style={styles.addressImg} source = {require('../../Source/A1_login_phone.png')}/>
                        <View style={styles.addressContainer}>
                            <Text numberOfLines={2} style= {styles.address}>{this.props.address}</Text>
                        </View>
                    </View>
                </View>
                <Image style={styles.rightArrow} source={require('../../Source/C3_delete.png')}/>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create(
{
    userInfo:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        backgroundColor:'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        height:85*WindowScale.windowScale.heightScale,
    },
    compareCell: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor:'white',
        width:(WindowScale.window.width-100)*WindowScale.windowScale.heightScale,
    },

    upContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:5,
        backgroundColor:'white',
        height:80/3*WindowScale.windowScale.heightScale,

    },
    userName:{
        color: 'black',
        fontSize: 15*WindowScale.windowScale.heightScale,
        fontWeight: 'bold',
        marginLeft:5,
        width:110*WindowScale.windowScale.heightScale,
    },
    userNameImg:{
        padding:5/3*WindowScale.windowScale.heightScale,
        height:70/3*WindowScale.windowScale.heightScale,
        width:70/3*WindowScale.windowScale.heightScale,
        marginLeft:10,
    },
    phoneImg:{
        padding:5,
        marginLeft:30,
        height:(70/3)*WindowScale.windowScale.heightScale,
        width:70/3*WindowScale.windowScale.heightScale,

    },
    downContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:0,
        backgroundColor:'white',
        height:160/3*WindowScale.windowScale.heightScale,
    },
    addressContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        height:160/3*WindowScale.windowScale.heightScale,

    },
    address:{
        color: 'black',
        fontSize: 15*WindowScale.windowScale.heightScale,
        fontWeight: 'bold',
        marginLeft:5,
        textAlign:'left',
    },
    addressImg:{
        marginLeft:10,
        height:70/3*WindowScale.windowScale.heightScale,
        width:70/3*WindowScale.windowScale.heightScale,

    },
    rightArrow: {
        marginLeft:30,
        height:80/3*WindowScale.windowScale.heightScale,
        width:80/3*WindowScale.windowScale.heightScale,
    },



})