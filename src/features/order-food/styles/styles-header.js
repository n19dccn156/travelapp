import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';

const styleIcon = StyleSheet.create({
  icon_close: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  icon_cart:{
    marginRight: 10,
    justifyContent: 'center',
  }
});
const styleText = StyleSheet.create({
  header: {
    marginTop: 12,
    fontWeight:'bold',
    color: 'red',
    fontSize:20
  },
});
export {styleIcon,styleText};
