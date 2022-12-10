import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';

function MyButton({ navigation, route }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: route.selectedShedule == route.shedule.id ? COLORS.primary : COLORS.white,
                borderWidth: 2,
                borderColor: COLORS.primary,
                margin: 5,
                borderRadius: 20,
                flexDirection: 'row',
                padding: 5,
            }}
            activeOpacity={0.8}
            key={route.shedule.id}
            onPress={() => {
                route.setSelectedShedule(route.shedule.id);
            }}
        >
            <View
                style={{
                    margin: 5,
                    padding: 5,
                    borderRadius: 20,
                    backgroundColor: route.selectedShedule == route.shedule.id ? COLORS.primary : COLORS.white,
                    maxHeight: 40,
                    size: '14',
                }}
            >
                <Text style={{ color: route.selectedShedule == route.shedule.id ? COLORS.white : COLORS.primary }}>
                    {route.shedule.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;
