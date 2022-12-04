import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import ListButtonCategory from '../Home/ListButtonCategory';

import ListService from './ListService';
import { getServiceOfCaterogy } from '../../services/getData';
import ListServiceForOrder from './ListServiceForOrder';

function ListServiceForOrderScreen({ navigation, route }) {
    console.log('route ListServiceScreen', route);

    const listCategory = route.params.listCategory;

    const [serviceType, setServiceType] = useState(listCategory[0].id);
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
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={style.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('ManageScreen')}
                />
                <Text style={style.headerTitle}>Quản lý đơn đặt</Text>
            </View>

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
            <ListServiceForOrder
                navigation={navigation}
                route={{ listServiceForType: listServiceForType, listCategory: listCategory }}
            />
        </SafeAreaView>
    );
}

export default ListServiceForOrderScreen;
