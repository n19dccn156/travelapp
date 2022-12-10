import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export function HotelDetailScreen({navigation}) {

    return(
        <View>
            <Button title="Go to Order Hotel" onPress={() => navigation.navigate('HotelOrderScreen')}/>
            {/* <Ionicons name="cloudy-outline" size={30}/> */}
        </View>
    );
}