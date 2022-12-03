import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text, View } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

function AllTypeServices({ navigation, route }) {
    console.log('route', route);
    const categoryIcons = [
        <Ionicons name="boat" size={25} color={COLORS.primary} />,
        <Fontisto name="photograph" size={25} color={COLORS.primary} />,
        <FontAwesome5 name="fish" size={25} color={COLORS.primary} />,
        <Ionicons name="help-buoy-outline" size={25} color={COLORS.primary} />,
        <FontAwesome5 name="tshirt" size={25} color={COLORS.primary} />,
    ];
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
            {/* <ScrollView showsHorizontalScrollIndicator={false}>
                <ListCategories navigation={navigation} route={{ listCategory: route.params }} />
            </ScrollView> */}
            <FlatList
                horizontal={false}
                numColumns={4}
                data={route.params}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                            navigation.navigate('ServiceScreenForOneType', { category: item });
                        }}
                    >
                        <View style={styles.iconContainer}>
                            <View>{categoryIcons[index % 5]}</View>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
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
    iconContainer: {
        height: 80,
        width: 80,
        backgroundColor: COLORS.secondarry,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
    },
});

export default AllTypeServices;
