import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import ListButtonCategory from '../Home/ListButtonCategory';

import ListService from './ListService';
import { getServiceOfCaterogy } from '../../services/getData';
import ListServiceForOrder from './ListServiceForOrder';

function ListServiceForOrderScreen({ navigation, route }) {
    const [showedButtonCategory, setShowedButtonCategory] = useState(true);
    const [showedListService, setShowedListService] = useState(true);
    console.log('call list service')
    const listCategory = route.params.listCategory;

    const [serviceType, setServiceType] = useState(listCategory[0].id);
    //load list service for type
    const [listServiceForType, setlistServiceForType] = useState([]);

    const getServiceOfType = (type) => {
        getServiceOfCaterogy(type)
            .then(function (res) {
                setlistServiceForType([...res.data.content]);
                setShowedButtonCategory(false);
                setShowedListService(false);
            })
            .catch((err) => {
                setlistServiceForType([]);
                setShowedButtonCategory(false);
                setShowedListService(false);
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };
    useEffect(() => {
        getServiceOfType(listCategory[0].id);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('ManageScreen')}
                />
                <Text style={style.headerTitle}>Quản lý đơn đặt</Text>
            </View>
            <ActivityIndicator size="large" color={COLORS.primary} animating={showedButtonCategory} />
            {!showedButtonCategory ? (
                <View>
                    {/* list category for all type */}
                    <ListButtonCategory
                        navigation={navigation}
                        route={{
                            listCategory: listCategory,
                            getServiceOfType: getServiceOfType,
                            serviceType: serviceType,
                            setServiceType: setServiceType,
                            setShowedListService: setShowedListService,
                        }}
                    />
                    <ActivityIndicator size="small" color={COLORS.primary} animating={showedListService} />
                    {!showedListService ? (
                        <View>
                            {/* list service of type */}
                            <ListServiceForOrder
                                navigation={navigation}
                                route={{ listServiceForType: listServiceForType, listCategory: listCategory }}
                            />
                        </View>
                    ) : (
                        ''
                    )}
                </View>
            ) : (
                ''
            )}
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
export default ListServiceForOrderScreen;
