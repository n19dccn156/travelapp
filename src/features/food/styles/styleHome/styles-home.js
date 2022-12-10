import { StyleSheet, TextStyle, ViewStyle, ImageStyle} from "react-native";
const stylesText = StyleSheet.create({
    header:{
        fontSize: 9,
    },
    title: {},

    name_shop:{
        fontSize: 17,
        color: 'black',
        textTransform:'capitalize'
    },
    time_delivery:{
        fontWeight: 'bold'
    },
    distance:{
        right:0
    },
    adress: {
      paddingTop:5
    }
});
const stylesView= StyleSheet.create({
    item: {
        marginRight: 10,
        flexDirection : "row"  ,
        flex:1,
        overflow: 'hidden',
        borderBottomWidth:0.5,
        borderStyle:  'solid',
        borderBottomColor: "rgba(0,0,0,0.2)",
    },
    item_content: {
        height: '80%',
        margin: 7,
        borderRadius : 4 ,
        justifyContent:'space-between'
    },
    item_rate:{

    },
    item_info:
    {   paddingLeft:10,
        flexDirection: 'column',
    }

})
const stylesImg = StyleSheet.create({
    avatarShop: {
        height: 90,
        width: 90,
        borderRadius : 12,
        margin:10
    }
})
export {stylesText,stylesView,stylesImg};