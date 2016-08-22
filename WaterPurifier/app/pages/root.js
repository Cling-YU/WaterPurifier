import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Navigator
} from 'react-native';
import StatusBarIOS from './StatusBarIOS';
import Util from '../Common/Util';
import Home from './Home';

class Root extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'white',height:Util.window.height}}>
                <Navigator
                    initialRoute={{name:'Home',component:Home,title:'首页'}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps}/>
                        )
                    }}
                    navigationBar={<Navigator.NavigationBar
                        style={{backgroundColor:'gray'}}
                        routeMapper={NavigationBarRouteMapper}
                    />}
                />
            </View>
        )
    }
}

// 导航栏的Mapper
let NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {if (index > 0) {navigator.pop()}}}>
                        <Text style={styles.leftNavButtonText}>
                            后退
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        console.log(route);
        if (route.title === '购买滤芯')
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        onPress={() =>{
                            console.log('点击右侧');
                        }}>
                        <Text style={styles.rightNavButtonText}>
                            {route.rightText || '右键'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>
                    {route.title}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    leftNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 13
    },
    // 右面导航按钮
    rightNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginRight: 13
    },
    // 标题
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flex: 1                //Step 3
    },
    // 导航栏
    navContainer: {
        backgroundColor: 'gray',
        paddingTop: 12,
        paddingBottom: 10,
    },
})
export default Root;