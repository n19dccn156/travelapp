import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { StatusBar } from "react-native";
import { colors } from "../../../common/constants/colors";
import { styleView } from "../styles/styleIndex";
export function ManageShopFood({ navigation }) {
  return (
    <View style={styleView.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={"light-content"}
        hidden={false}
      />
      <View style={styleView.item} />
      <View />
    </View>
  );
}
