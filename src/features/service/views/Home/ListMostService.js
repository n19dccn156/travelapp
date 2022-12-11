import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import { getListServicesForPage, getServiceOfCaterogy } from '../../services/getData';
import ListButtonCategory from './ListButtonCategory';
import ListServiceForType from './ListServiceForType';

function ListMostService({ navigation, route }) {
    const [serviceType, setServiceType] = useState('');
    const [showedButtonCategory, setShowedButtonCategory] = useState(true);
    const [showedListService, setShowedListService] = useState(true);
    const [page, setPage] = useState(0);

    const listCategory = route.params;
    //load list service for type
    const [listServiceForType, setlistServiceForType] = useState([]);

    let listTempServiceForType = listTempServiceForType;

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
        setServiceType(listCategory[0].id);
    }, []);

    const getMoreData = () => {
        if (listServiceForType.length != 0) {
            setShowedListService(true);
            setPage(page + 1);
            console.log('page: ' + page);
            setShowedListService(false);
            // getListServicesForPage(page)
            //     .then(function (res) {
            //         listTempServiceForType.push([...res.data.content]);
            //         setlistServiceForType(listCategory);
            //         setShowedListService(false);
            //     })
            //     .catch((err) => {
            //         setlistServiceForType([]);
            //         setShowedListService(false);
            //         console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            //     });
        }
    };

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
                            <Text>{console.log('listTempServiceForType', listTempServiceForType)}</Text>
                            {/* list service of type */}
                            <ListServiceForType
                                navigation={navigation}
                                route={{ listServiceForType: listServiceForType, getMoreData: getMoreData }}
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

export default ListMostService;
