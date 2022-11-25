import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';

function MyButton({ navigation, route }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                margin: 5,
                borderRadius: 20,
                flexDirection: 'row',
                padding: 5,
            }}
            activeOpacity={0.8}
            key={route.categories.id}
            // onPress={() => navigation.navigate('ServiceScreen')}
            onPress={() => route.getServiceOfType(route.categories.id)}
        >
            <View
                style={{
                    margin: 5,
                    padding: 5,
                    borderRadius: 20,
                    backgroundColor: COLORS.primary,
                    maxHeight: 40,
                    size: '14',
                }}
            >
                <Text style={{ color: COLORS.white }}>{route.categories.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;
