import React from 'react';
import { Text, View } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';

function MyButton({ categories }) {
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
            key={categories.id}
            onPress={() => navigation.navigate('DetailsScreen', categories)}
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
                <Text style={{ color: COLORS.white }}>{categories.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;
