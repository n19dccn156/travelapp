import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { variables } from "../../../common/constants/const";
import COLORS from "../../tour/consts/colors";
import { styleIcon } from "../styles/styles-header";
import { StyleImages, StyleViews } from "../styles/styles-shop-food";
export function HeaderShopFood({ navigation }) {
  return (
    <View style={StyleViews.header}>
      <View style={{ flex: 7,zIndex:2}}>
        <TouchableOpacity
          style={{ zIndex: 2 }}
          onPress={() => {
            navigation.navigate("HomeOrderFood");
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={30}
            style={{ color: COLORS.dark }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <TouchableOpacity
          style={{
            zIndex: 2
          }}
          onPress={() => {
            navigation.navigate("HomeOrderFood");
          }}
        >
          <Ionicons
            name="search-outline"
            size={30}
            style={{ color: COLORS.dark }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            zIndex: 2
          }}
          onPress={() => {
            navigation.navigate("HomeOrderFood");
          }}
        >
          <Ionicons
            name="share-social-outline"
            size={30}
            style={{ color: COLORS.dark }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              zIndex: 2
            }
          ]}
          onPress={() => {
            navigation.navigate("HomeOrderFood");
          }}
        >
          <Ionicons
            name="information-circle"
            size={30}
            style={{ color: COLORS.dark }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri:
            "https://cdn.tgdd.vn/2021/05/CookProduct/Banh-Mi-Bo-Nuong-Sa-(Vietnamese-Beef-Banh-Mi)-6-5-screenshot-1200x676.jpg"
        }}
        style={StyleImages.img_avatar}
        //source={{ uri: `${item.avatar}` }}
      />
    </View>
  );
}
