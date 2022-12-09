import React, { useState, useEffect, useContext } from 'react';
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
    Modal,
    Alert,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { Text } from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import { getOrderByIdAndState, getOrderByIdUserAndState } from '../../services/Order/getData';
import MyOrderWaitConfirmCard from './MyOrderWaitConfirmCard';

function OrderWaitConfirmScreen({ navigation, route }) {
    const [listOrder, setListOrder] = useState([]);
    const idState = route.params.idState;
    // const [showed, setShowed] = useState(route.params.showed);
    const showed = route.params.showed;
    const setShowed = route.params.setShowed;

    const [showedCancel, setShowedCancel] = useState(route.params.showedCancel);
    console.log('showedCancel OrderWaitConfirmScreen', showedCancel);
    const getOrderByIdUserAndStateAgain = (id) => {
        getOrderByIdUserAndState(id, idState)
            .then(function (res) {
                setListOrder([...res.data.content]);
                setShowed(false);
            })
            .catch((err) => {
                setListOrder([]);
                setShowed(false);

                console.log('🚀 ~ file: getOrderByIdAndState-screen ~ line 17 ~ error', err);
            });
    };

    useEffect(() => {
        getOrderByIdUserAndStateAgain(route.params.idUser);
    }, [showed]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View>
                <ScrollView>
                    <View style={{ borderBottomWidth: 10 }}>
                        <Text style={{ color: COLORS.primary, fontWeight: 'bold', margin: 10 }}>
                            {idState == 'XACNHAN' ? 'Danh sách chờ xác nhận' : ''}
                            {idState == 'THANHCONG' ? 'Danh sách đã xác nhận' : ''}
                            {idState == 'DAHUY' ? 'Danh sách đã hủy' : ''}
                            {idState == 'HOANTHANH' ? 'Danh sách đã hoàn thành' : ''}
                        </Text>
                    </View>
                    <ActivityIndicator size="large" color={COLORS.primary} animating={showed} />
                    {!showed || (!showedCancel && idState == 'DAHUY') ? (
                        <View>
                            <FlatList
                                contentContainerStyle={{
                                    flexDirection: 'column',
                                }}
                                horizontal
                                showsHorizontalScrollIndicator={true}
                                data={listOrder}
                                renderItem={({ item }) => (
                                    <MyOrderWaitConfirmCard
                                        route={{
                                            order: item,
                                            getOrderByIdUserAndStateAgain: getOrderByIdUserAndStateAgain,
                                            idState: idState,
                                            showedCancel: route.params.showedCancel,
                                            setShowedCancel: route.params.setShowedCancel,
                                        }}
                                    />
                                )}
                            />
                        </View>
                    ) : (
                        ''
                    )}
                </ScrollView>
            </View>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: COLORS.dark,
        opacity: 0.9,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
export default OrderWaitConfirmScreen;
