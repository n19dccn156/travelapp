import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { StyleImages, StyleViews } from "../../styles/styleShop/styles-shop-food";
export function HeaderShopFood({data}) {
  return (
    <View style={StyleViews.header}>
      <Image
        style={StyleImages.img_avatar}
        source={{ uri: `${data.avatar}` }}
      />
    </View>
  );
}
