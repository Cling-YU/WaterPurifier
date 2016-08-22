/**
 * Created by cmcc on 16/8/12.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    TouchableHighlight,
    InteractionManager,
    Animated,
    StatusBar,
    TextInput,
} from 'react-native';
import WindowScale from '../../Common/Util';
import {connect} from 'react-redux';
import {
    getUserName,
    getPhone,
    getAddr
} from '../../app/actions/userAction';
import NavigatorBarByMyself from './NavigatorBar'
var IS = [
    'http://down1.sucaitianxia.com/ai/26/ai5854.jpg',
    'http://www.qqmofasi.com/data/attachments/2014/09/02/158_P7Z4uU4tmcT129vrt4S9_large.jpg',
    'http://p1.so.qhmsg.com/t011f432cd519a2e4b1.jpg',
    'http://www.qqmofasi.com/data/attachments/2014/09/02/158_jbbx9DUBNu19bkkVVadd_large.jpg',
    'http://p3.so.qhmsg.com/t013e9a55d6c5ee5c1d.jpg',
    'http://p3.so.qhmsg.com/t01d2ff3a31358baaa8.jpg'];
var listDataHeader = [];
var placeHoderArr = ['请填写收货人姓名','请填写联系方式','请填写收货地址'];
export default class DeliveryInfo extends React.Component {
    constructor(props) {
        super(props);

    }

    writeDataToStore() {
        if(listDataHeader.length<=0){
            alert('待保存的数据为空,请仔细查看!');
            return;
        }
        for(let i=0;i<listDataHeader.length;i++){
            if(listDataHeader[i].length<=0){
                alert('请检查是否有数据为空,保存失败!');
                return;
            }
        }
        const dispatch = this.props.diapatchTest;
        dispatch(getUserName(listDataHeader[0]));
        dispatch(getPhone(listDataHeader[1]));
        dispatch(getAddr(listDataHeader[2]));
        alert('保存成功!');
    }

    componentWillMount() {
        console.log('DeliveryInfo' + this.props);
    }

    render() {
        let _this = this;
        return (
            <View style={{backgroundColor:'white'}}>
                <StatusBar
                    barStyle="default"
                    //style = {styles.statusBar}
                    hidden={false}
                />
                <NavigatorBarByMyself
                    leftNavButtonText='后退'
                    rightNavButtonText='保存'
                    title="收货信息"
                    onSave={()=>{
                    this.writeDataToStore()
                    }

            }

                    {...this.props}
                />
                <View style={styles.UserInfo}>
                    <View style={styles.view1}>
                        <Image style={styles.img} source={{uri:IS[0]}}/>
                        <TextInput
                            style={styles.textInputStyle2Others}
                            placeholder={placeHoderArr[0]}
                            placeholderTextColor={"rgba(198,198,204,1)"}
                            onChange={(event) => {
                                    console.log(event.nativeEvent.text);
                                    listDataHeader[0]= event.nativeEvent.text;
                            }}
                            onSubmitEditing={(event) => {
                                    console.log(event.nativeEvent.text);
                                    listDataHeader[0]= event.nativeEvent.text;

                                    }}
                        />
                    </View>
                    <View style={styles.view1}>
                        <Image style={styles.img} source={{uri:IS[1]}}/>
                        <TextInput
                            style={styles.textInputStyle2Others}
                            placeholder={placeHoderArr[1]}
                            placeholderTextColor={"rgba(198,198,204,1)"}
                            onChange={(event) => {
                                    console.log(event.nativeEvent.text);
                                    listDataHeader[1]= event.nativeEvent.text;
                            }}
                            onSubmitEditing={(event) => {
                                    console.log(event.nativeEvent.text);
                                    listDataHeader[1]= event.nativeEvent.text;

                                    }}
                        />
                    </View>
                    <View style={styles.view2}>
                        <Image style={styles.img} source={{uri:IS[2]}}/>
                        <TextInput
                            style={styles.textInputStyle2}
                            placeholder={placeHoderArr[2]}
                            placeholderTextColor={"rgba(198,198,204,1)"}
                            multiline={true} //代表可以输入多行
                            onChange={(event) => {
                                    console.log(event.nativeEvent.text);
                                    listDataHeader[2]= event.nativeEvent.text;
                            }}
                            onSubmitEditing={(event) => {
                                    listDataHeader[2] = event.nativeEvent.text;
                                    }}
                        />
                    </View>
                </View>

            </View>
        );

    }

}

var styles = StyleSheet.create({

    rightBtn:{
        marginTop:20,
        backgroundColor:'transparent',
    },
    rightBtnText:{
        color: 'black',
        fontSize: 15*WindowScale.windowScale.heightScale,
        fontWeight: 'bold',
    },
    UserInfo:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        height:300
    },
    view1:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        height:70
    },
    view2:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        height:110
    },
    img:{
        marginTop:10,
        width:25,
        height:25,
        backgroundColor:'transparent'
    },
    textInputStyle2:{
        marginTop:10,
        width:(WindowScale.window.width-110)*WindowScale.windowScale.heightScale,
        height:90*WindowScale.windowScale.widthScale,
        backgroundColor:'white',
        fontSize:16,
        marginLeft:10,
    },
    textInputStyle2Others:{
        marginTop:10,
        width:(WindowScale.window.width-110)*WindowScale.windowScale.heightScale,
        height:50,
        backgroundColor:'white',
        fontSize:16,
        marginLeft:10,
    }

});
