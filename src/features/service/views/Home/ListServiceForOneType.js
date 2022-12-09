import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Image, ActivityIndicator } from 'react-native';
import { Text, View } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';

import places from '../../consts/places';
import { getServiceOfCaterogy } from '../../services/getData';
import style from '../../style/Home/style';
import MyCard from './MyCard';

function ListServiceForOneType({ navigation, route }) {
    const [listService, setListService] = useState('');
    const [showed, setShowed] = useState(true);

    useEffect(() => {
        getServiceOfCaterogy(route.params.category.id)
            .then(function (res) {
                setListService([...res.data.content]);
                setShowed(false);
            })
            .catch((err) => {
                setListService([]);
                setShowed(false);
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    }, []);

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
                <Text style={style.headerTitle}>Dịch vụ {route.params.category.name}</Text>
                <Icon
                    name="search"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('SearchScreen')}
                />
            </View>

            <ActivityIndicator size="large" color={COLORS.primary} animating={showed} />
            {/* <ScrollView> */}
            {!showed ? (
                <View>
                    {listService.length != 0 ? (
                        <FlatList
                            contentContainerStyle={{ paddingLeft: 20 }}
                            vertical
                            showsVerticalScrollIndicator={false}
                            data={listService}
                            renderItem={({ item }) => <MyCard service={item} navigation={navigation} />}
                        />
                    ) : (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/khongtimthay.png')}
                                style={{ opacity: 0.3, borderRadius: 200, height: 300, width: 300, marginTop: 100 }}
                            />
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.primary }}>
                                Không tìm thấy dữ liệu!
                            </Text>
                        </View>
                    )}
                </View>
            ) : (
                ''
            )}

            {/* </ScrollView> */}
        </SafeAreaView>
    );
}

export default ListServiceForOneType;
