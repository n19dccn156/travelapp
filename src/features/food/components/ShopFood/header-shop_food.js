import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { variables } from "../../../../common/constants/const";
import COLORS from "../../../service/consts/colors";
import { styleIcon } from "../../styles/styleHome/styles-header";
import { StyleImages, StyleViews } from "../../styles/styleShop/styles-shop-food";
export function HeaderShopFood({data}) {
  console.log()
  return (
    <View style={StyleViews.header}>
      <Image
        style={StyleImages.img_avatar}
        source={{ uri: `${data.avatar}` }}
      />
    </View>
  );
}
