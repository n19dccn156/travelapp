import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text, View } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../consts/colors';
import style from '../style/Home/style';
import ListCategories from './Home/ListCategories';

function AllServices({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('HomeScreen')}
                />
                <Text style={style.headerTitle}>Tất cả dịch vụ</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <ListCategories />
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
    },
});

export default AllServices;
