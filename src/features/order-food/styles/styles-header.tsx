import { StyleSheet, TextStyle, ViewStyle, ImageStyle} from "react-native";
type IconStyle={
    icon_close: TextStyle,
};
const styleIcon = StyleSheet.create<IconStyle>({
    icon_close: {
        marginLeft:10
    }
});
export {styleIcon};