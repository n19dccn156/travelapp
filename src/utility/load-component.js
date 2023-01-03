import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
export default function LoadComponent(props) {
  return (
    <AnimatedLoader
      visible={props.visible}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={0.6}
      source={require("../animated/gray-loading-three-dots.json")}>
      <Text style={styles.textLoad} >Đang tải</Text>
    </AnimatedLoader>
  );
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
  textLoad:{
    fontSize: 18
  }
});