import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
<<<<<<< HEAD:src/features/food/styles/styles-header.js
import COLORS from '../../tour/consts/colors';
=======
import COLORS from '../../../service/consts/colors';
>>>>>>> refs/remotes/origin/master:src/features/food/styles/styleHome/styles-header.js
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
    color: COLORS.primary,
    fontSize:20
  },
});
export {styleIcon,styleText};
