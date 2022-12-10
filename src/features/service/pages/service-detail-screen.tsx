import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


export function ServiceDetailScreen({navigation}: {navigation: any}) {

    return(
        <View>
            <Button title="Go to Service Order" onPress={() => navigation.navigate('ServiceOrderScreen')}/>
            {/* <Ionicons name="cloudy-outline" size={30}/> */}
        </View>
    );
}