import { StyleSheet, TextStyle, ViewStyle, ImageStyle} from "react-native";
type StyleText ={
    header: TextStyle,
    name_shop: TextStyle,
    adress: TextStyle,
    time_delivery: TextStyle,
    distance: TextStyle,
}
type StyleView = {
    item: ViewStyle,
    item_info: ViewStyle,
    item_info_delivery: ViewStyle,
}
type StyleImg ={
    avatarShop : ImageStyle,
}
const stylesText = StyleSheet.create<StyleText>({
    header:{
        fontSize: 9,
    },
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
const stylesView= StyleSheet.create<StyleView>({
    item: {
        margin: 7,
        marginRight: 10,
        flexDirection : "row"  ,
        flex:1,
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
const stylesImg = StyleSheet.create<StyleImg>({
    avatarShop: {
        height: 90,
        width: 120,
        borderRadius : 12,
    }
})
export {stylesText,stylesView,stylesImg};