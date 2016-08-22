/**
 * Created by cmcc on 16/8/16.
 */
/**
 * Created by cmcc on 16/8/16.
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
import ProductComponentContainer from '../../containers/ProductInfoContainer'
import ProductComponent from './ProductInfo'
import {
    saveOrderInfoToStore,

} from '../../app/actions/OrderInfoAction'
import {
    saveOrderInfoToStore2,

} from '../../app/actions/OrderInfoAction2'

export default class OrderInfoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded : false,
            dataSource : new ListView.DataSource({
                rowHasChanged           : (row1, row2) =>{ row1 !== row2},
                sectionHeaderHasChanged : (s1, s2) => s1 !== s2
            }),

        };
    }
    componentWillMount() {
        var dataBlob ={'配送方式':[['邮寄到家','上门安装']],
            '订单明细':{'公司':'墨顿','1':{'名称':'产品1','单价':123,'个数':1},'运费':10,'上门服务费':10,'合计':143},
            '支付方式':[['支付宝支付','微信支付','货到付款']]};
        const {dispatch} = this.props;
        dispatch(saveOrderInfoToStore2(dataBlob));
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData () {
        this.setState({
            dataSource : this.state.dataSource.cloneWithRowsAndSections(this.props.OrderInfo.productsList2),
            loaded     : true
        });
    }

    render() {

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return this.renderListView();
    }

    renderLoadingView() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>User List</Text>
                <View style={styles.container}>
                    <ActivityIndicatorIOS
                        animating={!this.state.loaded}
                        style={[styles.activityIndicator, {height: 80}]}
                        size="large"
                    />
                </View>
            </View>
        );
    }

    renderListView() {
        const {OrderInfo} = this.props;
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.dataSource.cloneWithRowsAndSections(this.props.OrderInfo.productsList2)}
                    renderRow  = {this.renderRow.bind(this)}
                    renderSectionHeader = {this.renderSectionHeader}
                    renderSeparator={this._renderSeperator}
                    initialListSize ={100}
                />
                <Text>{this.props.OrderInfo.productsList2['订单明细']['合计']}</Text>
            </View>
        );
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text style={styles.text}>{sectionID}</Text>
            </View>
        );
    }
    renderRow(rowData, sectionID, rowID){
        const {OrderInfo} = this.props;
        switch (sectionID){
            case '配送方式':return (
                <DeliveryMethod rowData = {rowData} name = '配送方式'/>
            );
            case '支付方式':return (
                <DeliveryMethod rowData = {rowData} name = '支付方式'/>
            );
            case '订单明细':
                switch (rowID){
                case '公司':return (
                    <View style = {styles.CompanyContatiner}>
                        <Text style={styles.rowText}>{rowData}</Text>
                    </View>
                );
                case '运费':return (
                    <View style = {styles.CompanyContatiner}>
                        <Text style={styles.rowText}>{rowData}</Text>
                    </View>
                );
                case '上门服务费':return (
                    <View style = {styles.CompanyContatiner}>
                        <Text style={styles.rowText}>{rowData}</Text>
                    </View>
                );
                case '合计':return (
                    <View style = {styles.CompanyContatiner}>
                        <Text style={styles.rowText}>{rowData}</Text>
                    </View>
                );
                default:return (
                    <View>
                        <ProductComponentContainer productname = {rowData['名称']}  number= {rowData['单价']}
                                          index= {rowID} secoinID ={sectionID} />
                    </View>
                );


            }
        }

    }
    _renderSeperator (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? 'gray' : '#CCCCCC',
        }}
            />
        );
    }
}

class DeliveryMethod extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btn1Disabled : true,
            btn2Disabled : false,
            btn3Disabled : false,

        };
    }

    render(){
        if(this.props.name == '配送方式'){
            return(
                <View style = {styles.DeliveryMethodView}>
                    <TouchableOpacity
                        disabled={this.state.btn1Disabled}
                        style = {this.state.btn1Disabled ?
                             styles.DeliveryMethodBtnDisable:
                             styles.DeliveryMethodBtnEnable}
                        onPress={()=>{
                        postType = 0;
                        console.log(postType);
                        this.setState({btn1Disabled:!this.state.btn1Disabled});
                        this.setState({btn2Disabled:!this.state.btn2Disabled});
                    }}
                    >
                        <Image style={styles.DeliveryMethodBtnImg} source={require('../../Source/A1_login_phone.png')}/>
                        <Text style ={this.state.btn1Disabled ?
                                  styles.DeliveryMethodBtnTextDisalbe:
                                  styles.DeliveryMethodBtnTextEnalbe
                                  }
                        >
                            {this.props.rowData[0]}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {this.state.btn2Disabled ?
                             styles.DeliveryMethodBtnDisable:
                             styles.DeliveryMethodBtnEnable}
                        disabled={this.state.btn2Disabled}
                        onPress={()=>{
                        this.setState({btn1Disabled:!this.state.btn1Disabled});
                        this.setState({btn2Disabled:!this.state.btn2Disabled});
                    }}
                    >
                        <Image style={styles.DeliveryMethodBtnImg} source={require('../../Source/A1_login_phone.png')}/>
                        <Text style = {this.state.btn2Disabled ?
                                  styles.DeliveryMethodBtnTextDisalbe:
                                  styles.DeliveryMethodBtnTextEnalbe
                                  }

                        >
                            {this.props.rowData[1]}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }


        else if(this.props.name == '支付方式') {
            return(
                <View style = {styles.DeliveryMethodView}>
                    <TouchableOpacity
                        disabled={this.state.btn1Disabled}
                        style = {this.state.btn1Disabled ?
                             styles.DeliveryMethodBtnDisable:
                             styles.DeliveryMethodBtnEnable}
                        onPress={()=>{
                        this.setState({btn1Disabled:true});
                        this.setState({btn2Disabled:false});
                        this.setState({btn3Disabled:false});
                    }}
                    >
                        <Image style={styles.DeliveryMethodBtnImg} source={require('../../Source/A1_login_phone.png')}/>
                        <Text style ={this.state.btn1Disabled ?
                                  styles.DeliveryMethodBtnTextDisalbe:
                                  styles.DeliveryMethodBtnTextEnalbe
                                  }
                        >
                            {this.props.rowData[0]}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {this.state.btn2Disabled ?
                             styles.DeliveryMethodBtnDisable:
                             styles.DeliveryMethodBtnEnable}
                        disabled={this.state.btn2Disabled}
                        onPress={()=>{
                        this.setState({btn1Disabled:false});
                        this.setState({btn2Disabled:true});
                        this.setState({btn3Disabled:false});
                    }}
                    >
                        <Image style={styles.DeliveryMethodBtnImg} source={require('../../Source/A1_login_phone.png')}/>
                        <Text style = {this.state.btn2Disabled ?
                                  styles.DeliveryMethodBtnTextDisalbe:
                                  styles.DeliveryMethodBtnTextEnalbe
                                  }

                        >
                            {this.props.rowData[1]}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {this.state.btn3Disabled ?
                             styles.DeliveryMethodBtnDisable:
                             styles.DeliveryMethodBtnEnable}
                        disabled={this.state.btn3Disabled}
                        onPress={()=>{
                        this.setState({btn1Disabled:false});
                        this.setState({btn2Disabled:false});
                        this.setState({btn3Disabled:true});
                    }}
                    >
                        <Image style={styles.DeliveryMethodBtnImg} source={require('../../Source/A1_login_phone.png')}/>
                        <Text style = {this.state.btn3Disabled ?
                              styles.DeliveryMethodBtnTextDisalbe:
                              styles.DeliveryMethodBtnTextEnalbe
                              }
                        >
                            {this.props.rowData[2]}
                        </Text>

                    </TouchableOpacity>
                </View>
            )
        }

    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor:'transparent',
    },
    activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        paddingTop: 25
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    text: {
        color: 'black',
        paddingHorizontal: 8,
        fontSize: 16*WindowScale.windowScale.heightScale,
    },
    rowStyle: {
        paddingVertical: 20,
        paddingLeft: 16,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderWidth: 1
    },

    subText: {
        fontSize: 14,
        color: '#757575'
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 8,
        backgroundColor: 'transparent'
    },

    DeliveryMethodView:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:WindowScale.window.width,
        height:60*WindowScale.windowScale.heightScale,
        backgroundColor:'white',
    },
    DeliveryMethodBtnDisable:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:110*WindowScale.windowScale.widthScale,
        height:30*WindowScale.windowScale.heightScale,
        borderRadius:5,
        borderWidth:1,
        borderColor:'gray',
        backgroundColor:'gray',
    },
    DeliveryMethodBtnEnable:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:110*WindowScale.windowScale.widthScale,
        height:30*WindowScale.windowScale.heightScale,
        borderRadius:5,
        borderWidth:1,
        borderColor:'blue',
        backgroundColor:'blue',
    },
    DeliveryMethodBtnImg:{
        width:20*WindowScale.windowScale.widthScale,
        height:20*WindowScale.windowScale.heightScale,
    },
    CompanyContatiner:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 8,
        backgroundColor:'white',
        height:45*WindowScale.windowScale.heightScale,
    },

    rowText:{
        color: 'black',
        fontSize: 15*WindowScale.windowScale.heightScale,
        fontWeight: 'bold',
        textAlign:'center',
    },
    DeliveryMethodBtnTextDisalbe:{
        color: 'black',
        fontSize: 15*WindowScale.windowScale.heightScale,
        fontWeight: 'bold',

    },
    DeliveryMethodBtnTextEnalbe:{
        color: 'white',
        fontSize: 15*WindowScale.windowScale.heightScale,
        fontWeight: 'bold',
    },

    DeliveryMethodBtnTextView:{
        width:70*WindowScale.windowScale.widthScale,
        height:20*WindowScale.windowScale.heightScale,
    },


});