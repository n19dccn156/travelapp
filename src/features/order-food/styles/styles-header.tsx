import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
type iconStyle = {
  icon_close: TextStyle,
  icon_cart: TextStyle
};
type textStyle = {
  header: TextStyle;
};
const styleIcon = StyleSheet.create<iconStyle>({
  icon_close: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  icon_cart:{
    marginRight: 10,
    justifyContent: 'center',
  }
});
const styleText = StyleSheet.create<textStyle>({
  header: {
    marginTop: 12,
    fontWeight:'bold',
    color: 'red',
    fontSize:20
  },
});
export {styleIcon,styleText};
