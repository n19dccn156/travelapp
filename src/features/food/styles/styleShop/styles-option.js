import {StyleSheet} from "react-native";
import { textSize } from "../../../../common/constants/const";
const StyleOption = StyleSheet.create({
    container:{
     height: 30,
     borderWidth: 1,
     marginRight: 10,
     alignItems:"center",
     justifyContent:'center',
     borderRadius:10,
     paddingHorizontal:6,
    },
    text:{
        fontSize:textSize.normal,
        fontWeight:'600'
    },
});
export default StyleOption;