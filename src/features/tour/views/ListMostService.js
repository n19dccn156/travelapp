import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../consts/colors';
import places from '../consts/places';
import style from '../style/Home/style';
import MyButton from './Home/MyButton';
import MyCard from './Home/MyCard';

function ListMostService({ navigation }) {
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
                <Text style={style.headerTitle}>Dịch vụ phổ biến nhất</Text>
                <Icon
                    name="search"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('SearchScreen')}
                />
            </View>

            <ScrollView>
                <View style={{ justifyContent: 'center' }}>
                    <FlatList
                        contentContainerStyle={{ margin: 10 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <MyButton categories={item} />}
                    />
                </View>
                <View>
                    <FlatList
                        contentContainerStyle={{ paddingLeft: 20 }}
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <MyCard place={item} navigation={navigation} />}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ListMostService;
