import { StyleSheet, TextStyle, ViewStyle, ImageStyle} from "react-native";
const stylesText = StyleSheet.create({
    header:{
        fontSize: 9,
    },
    title: {},

    name_shop:{
        fontSize: 17,
        fontWeight: '900',
        color: 'black',
    },
    time_delivery:{
        fontWeight: 'bold'
    },
    distance:{
        marginLeft: 10
    },
    adress: {
      paddingTop:5
    }
});
const stylesView= StyleSheet.create({
    item: {
        margin: 7,
        marginRight: 10,
        flexDirection : "column"  ,
        flex:1,
        borderColor: 'black',
        borderStyle:'dashed',
        overflow: 'hidden',
    },
    item_info: {
        height: '100%',
        margin: 7,
        borderRadius : 4 ,
    },
    item_info_delivery:
    {    paddingTop:10,
        flexDirection: 'row',
    }

})
const stylesImg = StyleSheet.create({
    avatarShop: {
        height: 120,
        width: 214,
        borderRadius : 12,
    }
})
export {stylesText,stylesView,stylesImg};