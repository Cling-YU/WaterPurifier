/**
 * Created by cmcc on 16/8/11.
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


import {connect} from 'react-redux';
import ConfirmOrder from '../pages/ConfirmOrder/ConfirmOrder'
class ConfirmOrderContainer extends React.Component {
    render() {
        console.log(ConfirmOrderContainer);
        this.props.navigator.navigationBarHidden = true;

        return (

        <View style={{backgroundColor:'white'}}>
            <ConfirmOrder {...this.props}/>
        </View>
    )
    }
}

export default connect((state) => {
    const {User} = state;
    return {
        User,

    }
})(ConfirmOrderContainer);
