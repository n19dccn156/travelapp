import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';

function MyButton({ navigation, route }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: route.serviceType == route.categories.id ? COLORS.primary : COLORS.white,
                borderWidth: 2,
                borderColor: COLORS.primary,
                margin: 5,
                borderRadius: 20,
                flexDirection: 'row',
                padding: 5,
            }}
            activeOpacity={0.8}
            key={route.categories.id}
            // onPress={() => navigation.navigate('ServiceScreen')}
            onPress={() => {
                // handleClick();
                route.setShowedListService(true);
                route.getServiceOfType(route.categories.id);
                route.setServiceType(route.categories.id);
            }}
        >
            <View
                style={{
                    margin: 5,
                    padding: 5,
                    borderRadius: 20,
                    backgroundColor: route.serviceType == route.categories.id ? COLORS.primary : COLORS.white,
                    maxHeight: 40,
                    size: '14',
                }}
            >
                <Text style={{ color: route.serviceType == route.categories.id ? COLORS.white : COLORS.primary }}>
                    {route.categories.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;
