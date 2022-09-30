import React, { useEffect, useState } from "react";
import { Modal, Text, View,StyleSheet, TouchableOpacity } from "react-native";
export default function ModalFood(props){
    const visibleModal = props.visible;
    return (
        <Modal
        animationType="slide"
        visible={visibleModal}
        onRequestClose={props.callbackClose}
        transparent={true}
      >
        <View style={styles.centeredView}>
        <TouchableOpacity style={[styles.button,styles.buttonClose]}onPress={props.callbackClose}><Text>Close</Text></TouchableOpacity>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
          </View>
        </View>
      </Modal>
    )  
}
const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "flex-end",
      alignItems:'center',
      position:'absolute',
      bottom:10,
      marginTop:30
    },
    modalView: {
      minWidth:'100%',
      minHeight:'100%',
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    }
  });