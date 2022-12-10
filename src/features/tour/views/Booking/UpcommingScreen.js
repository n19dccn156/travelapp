import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import places from '../../consts/places';
import MyCard from '../Home/MyCard';


function UpcommingScreen({ navigation, route }) {
    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{ paddingLeft: 20 }}
                vertical
                showsVerticalScrollIndicator={false}
                data={places}
                renderItem={({ item }) => <MyCard service={item} navigation={navigation} />}
            />
        </SafeAreaView>
    );
}

export default UpcommingScreen;
