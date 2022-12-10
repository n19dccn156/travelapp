import { Avatar, Icon, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../common/constants/colors";

export function OrderHistoryMainScreen({navigation} : {navigation:any}) {

    return(
        <View>
            <Button title="Go to Order History Order" onPress={() => navigation.navigate('OrderDetailScreen')}/>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')}/>
            {/* <Button title="Go to Login FaceBook" onPress={() => navigation.navigate('LoginFacebook')}/> */}

        </View>

    );
}