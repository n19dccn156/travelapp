import { ImageStyle, StyleSheet, ViewStyle } from "react-native"
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const StyleImages = StyleSheet.create({
    img_avatar: {
        width: windowWidth,
        height:  windowWidth/1.6,
        aspectRatio: 1,
        position: 'absolute',
        elevation:0,
        top:-10
    }
});
const StyleViews = StyleSheet.create({
    container: {
        top: 0,
        left:0,
        right:5,
        margin: 0,
        height:'100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent:'flex-start',
        flex:1,
    },
    header:{
        flexDirection: 'row',
        height:240
    }
})
export {StyleImages,StyleViews};
