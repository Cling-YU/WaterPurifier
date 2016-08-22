/**
 * Created by cmcc on 16/8/17.
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
    ActivityIndicatorIOS,
    PixelRatio,
} from 'react-native';
import WindowScale from '../../Common/Util';
import{
    addOrderInfo,
    minusOrderInfo,
} from '../../app/actions/OrderInfoAction';
import{
    addOrderInfo2,
    minusOrderInfo2,
} from '../../app/actions/OrderInfoAction2';
export default class ProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number : 0,

        };
    }
    componentWillMount(){
        this.setState({
            number:this.props.number,
        });
    }
    render() {
        const {dispatch,OrderInfo} = this.props;
        var product = OrderInfo.productsList2[this.props.secoinID][this.props.index];
         return(
             <View style= {styles.ViewContainer}>
                 <Image style = {styles.LeftImg} source={require('../../Source/C3_delete.png')}/>
                 <View style ={styles.SubContainer}>
                     <View style={styles.ProductNameContainer}>
                         <Text style = {styles.ProductName}>
                             {this.props.productname}
                         </Text>
                     </View>
                     <View style={styles.ProductNameContainer}>
                         <Text style={styles.PriceSytle}>{'¥'+product['单价']}
                             <Text style={styles.PriceSytle1}>{'/支'}</Text>
                         </Text>
                     </View>
                 </View>
                 <TouchableOpacity
                     style = {styles.LeftRightMinusBtn}
                     disabled = {product['个数']<=1}
                     onPress= {()=>{
                        dispatch(minusOrderInfo2(OrderInfo.productsList2,this.props.secoinID,this.props.index));
                     }
                     }
                 >
                     <Image style = {styles.LeftMinusBtn} source={require('../../Source/C3_delete.png')}/>
                 </TouchableOpacity>
                 <View style = {styles.LeftRightMinusBtn}>
                     <Text style={{textAlign:'center'}}>{product['个数']}</Text>
                 </View>

                 <TouchableOpacity
                     style = {styles.LeftRightMinusBtn}
                     onPress= {()=>{
                         dispatch(addOrderInfo2(OrderInfo.productsList2,this.props.secoinID,this.props.index));
                     }}
                 >
                 <Image source={require('../../Source/C3_delete.png')}/>
                 </TouchableOpacity>
             </View>
         );
    }
}

var styles = StyleSheet.create(
    {
        ViewContainer:{
            width:WindowScale.window.width,
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            backgroundColor:'white',

        },
        LeftImg:{
            padding:5,
            width:80*WindowScale.windowScale.widthScale,
            height:80*WindowScale.windowScale.heightScale,
        },
        SubContainer:{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'flex-start',
        },
        ProductNameContainer:{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'flex-start',
            height:45*WindowScale.windowScale.heightScale,
            width:150*WindowScale.windowScale.widthScale,
        },
        LeftRightMinusBtn:{
            marginLeft:10,
            justifyContent:'center',
            width:25*WindowScale.windowScale.widthScale,
            height:25*WindowScale.windowScale.heightScale,
        },
        ProductName:{
            color: 'black',
            fontSize: 15*WindowScale.windowScale.heightScale,
            fontWeight: 'bold',
            padding:10,
            textAlign:'center',
        },
        PriceContainer:{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
        },
        PriceSytle:{
            color: 'red',
            fontSize: 15*WindowScale.windowScale.heightScale,
            fontWeight: 'bold',
            padding:10,
            width:150*WindowScale.windowScale.widthScale,
            height:45*WindowScale.windowScale.heightScale,
        },
        PriceSytle1:{
            color: 'gray',
            fontSize: 15*WindowScale.windowScale.heightScale,
            fontWeight: 'bold',
            padding:5,
            width:180*WindowScale.windowScale.widthScale,
            height:45*WindowScale.windowScale.heightScale,
        },

    }
);
