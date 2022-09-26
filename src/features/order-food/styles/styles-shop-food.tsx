import { ImageStyle, StyleSheet, ViewStyle } from "react-native"
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
type imageStyles = {
    img_avatar: ImageStyle
};
type viewStyles ={
    container: ViewStyle
}
const StyleImages = StyleSheet.create<imageStyles>({
    img_avatar: {
        width: windowWidth,
        height:  windowWidth/1.6,
        aspectRatio: 1,
        position: 'absolute',
        elevation:0,
        top:-10
    }
});
const StyleViews = StyleSheet.create<viewStyles>({
    container: {
        top: 0,
        left:0,
        right:0,
        margin: 0,
        height:'100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent:'flex-start'
    }
})
export {StyleImages,StyleViews};
