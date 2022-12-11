import React from 'react';
import { Image, Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

function MyCard({ navigation }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.grey,
                margin: 5,
                borderRadius: 10,
                flexDirection: 'row',
                padding: 10,
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailsScreen')}
        >
            <View
                style={{
                    color: COLORS.grey,
                    backgroundColor: COLORS.grey,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                }}
            >
                <Text>Sửa thông tin cá nhân</Text>
                <AntDesign name="right" size={20} />
            </View>
        </TouchableOpacity>
    );
}

export default MyCard;
