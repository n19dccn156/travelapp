import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { getAllCaterogy } from '../../services/getData';
import RadioButtonRN from 'radio-buttons-react-native';
import style from '../../style/Home/style';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../consts/colors';
import MyButton from './MyButton';

function ListSheduleForService({ navigation, route }) {
    return (
        <View>
            <FlatList
                contentContainerStyle={{ margin: 10 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={route.listShedule}
                renderItem={({ item }) => (
                    <MyButton
                        navigation={navigation}
                        route={{
                            shedule: item,
                            selectedShedule: route.selectedShedule,
                            setSelectedShedule: route.setSelectedShedule,
                        }}
                    />
                )}
            />
        </View>
    );
}

export default ListSheduleForService;
