import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import { getServiceOfCaterogy } from '../../services/getData';
import ListButtonCategory from './ListButtonCategory';
import ListServiceForType from './ListServiceForType';

function ListMostService({ navigation, route }) {
    const [serviceType, setServiceType] = useState('');

    const listCategory = route.params;
    //load list service for type
    const [listServiceForType, setlistServiceForType] = useState([]);

    const getServiceOfType = (type) => {
        getServiceOfCaterogy(type)
            .then(function (res) {
                setlistServiceForType([...res.data.content]);
            })
            .catch((err) => {
                setlistServiceForType([]);
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };
    useEffect(() => {
        getServiceOfType(listCategory[0].id);
        setServiceType(listCategory[0].id);
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
                <Text style={style.headerTitle}>Dịch vụ phổ biến nhất</Text>
                <Icon
                    name="search"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('SearchScreen')}
                />
            </View>
            {/* <ScrollView> */}
            {/* list category for all type */}
            <ListButtonCategory
                navigation={navigation}
                route={{
                    listCategory: listCategory,
                    getServiceOfType: getServiceOfType,
                    serviceType: serviceType,
                    setServiceType: setServiceType,
                }}
            />
            {/* list service of type */}
            <ListServiceForType navigation={navigation} route={{ listServiceForType: listServiceForType }} />
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}

export default ListMostService;
