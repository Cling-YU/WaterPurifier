/**
 * Created by cmcc on 16/8/15.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    StatusBar,
} from 'react-native';
import WindowScale from '../../Common/Util';
export default class NavigatorBarByMySelf extends Component{

   render(){
       console.log('NavigatorBarByMySelf'+this.props.leftNavButtonText+this.props.navigator+this.props.onSave);
       return(
       <View style={styles.NavigatorBarAndStatusBarContainer}>
           <StatusBar {...this.props} />
           <View style={styles.statusBar} />
           <View style={styles.NavigatorBarContainer}>
               <TouchableOpacity
                   style = {styles.leftNavBtnContainer}
                   onPress={() => {this.props.navigator.pop()}}>
                   <Text style={styles.leftNavButtonText}>
                       {this.props.leftNavButtonText}
                   </Text>
               </TouchableOpacity>
               <Text style={styles.title}>{this.props.title}</Text>
               <TouchableOpacity
                   style = {styles.rightNavBtnContainer}
                   onPress={() => {this.props.onSave()}}>
                   <Text style={styles.rightNavButtonText}>
                       {this.props.rightNavButtonText}
                   </Text>
               </TouchableOpacity>
           </View>
       </View>

       );
   }
};
var styles = StyleSheet.create(
    {
        NavigatorBarAndStatusBarContainer:{
            borderBottomColor: '#ccc',
            borderBottomWidth: 2,
            backgroundColor:'white',
        },
        statusBar:{
            flex:1,
            height:20,
        },
        NavigatorBarContainer:{
            height:44,
            flexDirection:'row',
            justifyContent:'space-between',

        },
        leftNavBtnContainer: {
            paddingTop: 12,
            paddingBottom: 10,
            paddingLeft:0
        },
        leftNavButtonText: {
            color: '#000000',
            fontSize: 18*WindowScale.windowScale.heightScale,
            marginLeft: 13,
            textAlign:'center'
        },
        rightNavBtnContainer: {
            paddingTop: 12,
            paddingBottom: 10,
            marginRight:13,
        },
        rightNavButtonText:{
            color: '#000000',
            fontSize: 18*WindowScale.windowScale.heightScale,
            marginRight: 13,
            textAlign:'center'
        },

        // 标题
        title: {
            fontSize: 20*WindowScale.windowScale.heightScale,
            color: '#000000',
            paddingTop: 10,
            paddingBottom: 10,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            flex: 1                //Step 3
        },

    }
);

