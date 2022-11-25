import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text, View } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import COLORS from '../consts/colors';
import places from '../consts/places';
import style from '../style/Home/style';
import MyCard from './Home/MyCard';

function ServiceScreen({ navigation }) {
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
                <Text style={style.headerTitle}>Dịch vụ</Text>
                <Icon
                    name="search"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('SearchScreen')}
                />
            </View>

            <ScrollView>
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

export default ServiceScreen;
