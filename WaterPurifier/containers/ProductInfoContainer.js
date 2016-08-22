/**
 * Created by cmcc on 16/8/18.
 */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


import {connect} from 'react-redux';
import ProductComponent from '../pages/ConfirmOrder/ProductInfo'
class ProductInfoContainer extends React.Component {
    render() {
        return (

            <View style={{backgroundColor:'transparent'}}>
                <ProductComponent {...this.props}/>
            </View>
        )
    }
}

export default connect((state) => {
    const {OrderInfo} = state.OrderInfo2;
    return {
        OrderInfo:state.OrderInfo2,
    }
})(ProductInfoContainer);