import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const StyleImagesDish = StyleSheet.create({
    img_dish: {
        width: windowWidth,
        height:  windowWidth/1.6,   
        position: 'absolute'  ,
    }

});
const StyleViewDish = StyleSheet.create({
    info:{
        flex:1,
        top:0,
        marginTop:20,
        marginLeft:20
    },
    relate:{

    }
})
export {StyleImagesDish,StyleViewDish};