import React, { useEffect, useState } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import styles from "../styles/styles-modal-component";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
export default function ModalFood(props) {
  const visibleModal = props.visible;
  const info = props.info;
  console.log(info)
  return (
    <Modal
      animationType="slide"
      visible={visibleModal}
      onRequestClose={props.callbackClose}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{ left: -110 }}
              onPress={props.callbackClose}
            >
              <Ionicons name="close" size={35} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Thêm món</Text>
          </View>
          <View style={styles.info}>
            <Text>hihi</Text>
          </View>
          <KeyboardAvoidingView style={styles.note} behavior={"padding"}>
            <TextInput
              contextMenuHidden={true}
              placeholder="Nhập ghi chú cho chủ quán..."
              underlineColorAndroid={"rgba(0, 0, 0, 0.05)"}
            />
          </KeyboardAvoidingView>
          <View style={styles.options}>
            <ScrollView>
            <Text style={{fontSize:40}}>options</Text>
            <Text style={{fontSize:40}}>options</Text>
            <Text style={{fontSize:40}}>options</Text>
            <Text style={{fontSize:40}}>options</Text>
            <Text style={{fontSize:40}}>options</Text>
            <Text style={{fontSize:40}}>options</Text> 
            </ScrollView>
          </View>
          <View style={styles.amount}>
            <View style={styles.quantity}>
            <Text>-</Text>
            <Text>5</Text>
            <Text>+</Text>
            </View>
            <View style={styles.buttonbuy}>
           <TouchableOpacity><Text>Chọn mua</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
