/**
 * Created by cmcc on 16/8/17.
 */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


import {connect} from 'react-redux';
import OrderInfoPage from '../pages/ConfirmOrder/OrderInfoPage'
class OrderInfoContainer extends React.Component {
    render() {
        console.log(OrderInfoPage);
        return (

            <View style={{backgroundColor:'transparent'}}>
                <OrderInfoPage {...this.props}/>
            </View>
        )
    }
}

export default connect((state) => {
    return {
        OrderInfo:state.OrderInfo2,
    }
})(OrderInfoContainer);