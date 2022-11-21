import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import ListButtonCategory from '../Home/ListButtonCategory';
import ListServiceForType from '../Home/ListServiceForType';
import AntDesign from 'react-native-vector-icons/AntDesign';
function ListServiceScreen({ navigation, route }) {
    const listCategory = route.params.listCategory;
    const listServiceForType = route.params.listServiceForType;
    const setlistServiceForType = route.params.setlistServiceForType;
    const getServiceOfType = route.params.getServiceOfType;
    // //load list service for type
    // const [listServiceForType, setlistServiceForType] = useState([]);

    // const getServiceOfType = (type) => {
    //     getServiceOfCaterogy(type)
    //         .then(function (res) {
    //             setlistServiceForType([...res.data.content]);
    //         })
    //         .catch((err) => {
    //             console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
    //         });
    // };
    // useEffect(() => {
    //     getServiceOfType(listCategory[0].id);
    // }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={style.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('ProfileSceen')}
                />
                <Text style={style.headerTitle}>Quản lý loại dịch vụ</Text>
                <View style={{ marginTop: 10 }}>
                    <AntDesign
                        name="pluscircleo"
                        size={20}
                        color={COLORS.white}
                        onPress={() => setModalVisible(true)}
                    />
                </View>
            </View>
            <ScrollView>
                {/* list category for all type */}
                <ListButtonCategory
                    navigation={navigation}
                    route={{ listCategory: listCategory, getServiceOfType: getServiceOfType }}
                />
                {/* list service of type */}
                <ListServiceForType navigation={navigation} route={{ listServiceForType: listServiceForType }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ListServiceScreen;
