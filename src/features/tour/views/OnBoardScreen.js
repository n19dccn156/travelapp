import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, Text, TouchableOpacity } from 'react-native';
import COLORS from '../consts/colors';

const OnBoardScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} backgroundColor="rgb(0,0,0)" />
            <ImageBackground style={{ flex: 1 }} source={require('../assets/backgroundOnBoard.jpg')}>
                <View style={style.details}>
                    <Text style={{ color: COLORS.white, fontSize: 35, fontWeight: 'bold' }}>Kham pha</Text>
                    <Text style={{ color: COLORS.white, fontSize: 35, fontWeight: 'bold' }}>Phu Quy voi chung toi</Text>
                    <Text style={{ color: COLORS.white, lineHeight: 25, marginTop: 15 }}>
                        Phú Quý là một huyện đảo thuộc tỉnh Bình Thuận, Duyên hải Nam Trung Bộ, Việt Nam và là một quần
                        đảo gồm 12 đảo lớn nhỏ, nằm ngoài cùng hệ thống đảo ở cực Nam Trung Bộ.
                    </Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen')}>
                        <View style={style.btn}>
                            <Text style={{ fontWeight: 'bold' }}>Bat dau thoi nao</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const style = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    },
    btn: {
        height: 50,
        width: 120,
        backgroundColor: COLORS.white,
        marginTop: 20,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default OnBoardScreen;
