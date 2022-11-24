import COLORS from "../const/colors";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        width: '100%',
        height: '10%',
        paddingHorizontal:10,

    },
    searchInputContainer: {
        height: 40,
        width: '95%',
        backgroundColor: COLORS.light,
        marginTop: 5,
        marginLeft: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10
    },
    categoryListText: {
        flexDirection: 'column',
        fontSize: 17,
        fontWeight: 'bold'
    },
    card: {
        height: 280,
        width: '90%',
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    cardImage: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    },
    saleTag: {
        height: 40,
        width: 60,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        zIndex: 1,
        top: 10,
        right: 10,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default style;
