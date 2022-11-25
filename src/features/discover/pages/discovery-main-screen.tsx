import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

type objCheckin = {
    address: string,
    id: number
    imgUrl: string,
    name: string
};

export function DiscoverScreen({navigation}: {navigation: any}) {

    return(
        <View>
            <Button title="Go to Discovery Detail" onPress={() => navigation.navigate('DiscoveryDetailScreen')}/>
            {/* <Ionicons name="cloudy-outline" size={30}/> */}
        </View>
    );
}