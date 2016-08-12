import {
    Dimensions
} from 'react-native';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

let windowScale = {
    widthScale: Dimensions.get('window').width / 375.0,
    heightScale: Dimensions.get('window').height / 667.0
}

export default {
    window:window,
    windowScale:windowScale
}