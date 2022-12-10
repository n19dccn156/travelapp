import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

function MyButtonType({ navigation, route }) {
    const [categories, setCategories] = useState(route.categories);
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                margin: 5,
                borderRadius: 15,
                flexDirection: 'row',
                padding: 5,
                flex: 1,
            }}
            activeOpacity={0.8}
            key={route.categories.id}
            onPress={() =>
                navigation.navigate('EditTypeScreen', {
                    categories: route.categories,
                    setListCategory: route.setListCategory,
                    listCategory: route.listCategory,
                    getAllCaterogyAgain: route.getAllCaterogyAgain,
                })
            }
            // onPress={() => route.getServiceOfType(route.categories.id)}
        >
            <View
                style={{
                    margin: 5,
                    padding: 5,
                    borderRadius: 20,
                    backgroundColor: COLORS.primary,
                    maxHeight: 40,
                    size: '14',
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}
            >
                <Text style={{ color: COLORS.white }}>{route.categories.name}</Text>
                <AntDesign name="right" size={20} color={COLORS.white} />
            </View>
        </TouchableOpacity>
    );
}

export default MyButtonType;
