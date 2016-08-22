/**
 * Created by cmcc on 16/8/11.
 */
/**
 * Created by ljunb on 16/6/2.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    InteractionManager,
    Animated,
} from 'react-native';

import {
    getUserName,
    getPhone,
    getAddr
} from '../../actions/userAction';
import UserInfo from './userInfo';
import NavigatorBarByMyself from './NavigatorBar'
import OrderInfoContainer from '../../containers/OrderInfoContainer'
import WindowScale from '../../Common/Util';
export default class ConfirmOrder extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            dispatch(getUserName('zhangyuan'));
        })
    }

    componentWillUnmount() {
        // 退出时重置foodsListReducer状态

    }


    render() {
        const {User,dispatch} = this.props;

        return (
            <View style={styles.ConfirmOrderContainer}>
                <NavigatorBarByMyself
                    title = '确认订单'
                    {...this.props}
                />
                <UserInfo
                    userName = {User.userName}
                    phone = {User.phone}
                    address = {User.address}
                    {...this.props}
                />
                <OrderInfoContainer/>
            </View >
        )
    }


}

var styles = StyleSheet.create(
    {
        ConfirmOrderContainer:{
            flex: 1,
            backgroundColor: 'gray',
            width:WindowScale.window.width,
            height:WindowScale.window.height,
        }
    }
)

