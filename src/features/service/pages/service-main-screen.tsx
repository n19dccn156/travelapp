import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


export function ServiceScreen({navigation}: {navigation: any}) {

    return(
        <View>
            <Button title="Go to Service Detail" onPress={() => navigation.navigate('ServiceDetailScreen')}/>
            {/* <Ionicons name="cloudy-outline" size={30}/> */}
        </View>
    );
}