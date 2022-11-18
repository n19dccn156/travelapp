import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import COLORS from '../../tour/consts/colors';
const styleIcon = StyleSheet.create({
  icon_close: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  icon_cart:{
    marginRight: 10,
    justifyContent: 'center',
  },
  icon:{
    backgroundColor: COLORS.dark
  },
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
