import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text, View } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import TopTabNavigation from '../../navigations/TopTabNavigation';
import style from '../../style/Home/style';

function BookingScreen({ navigation, route }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={style.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('HomeScreen')}
                />
                <Text style={style.headerTitle}>Trang đặt</Text>
                <Icon
                    name="search"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('SearchScreen')}
                />
            </View>
            <TopTabNavigation />
        </SafeAreaView>
    );
}

export default BookingScreen;
