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
import { getOrderByIdAndState } from '../../services/Order/getData';
import MyOrderWaitConfirmCard from './MyOrderWaitConfirmCard';

function ManageOrderWaitConfirm({ navigation, route }) {
    const [listOrder, setListOrder] = useState([]);
    const [showed, setShowed] = useState(true);

    const getOrderByIdAndStateAgain = (id) => {
        getOrderByIdAndState(id, 'XACNHAN')
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
    console.log('ManageOrderWaitConfirm route', route);
    // const getOrderByIdAndStateAgain = route.params.getOrderByIdAndStateAgain;

    useEffect(() => {
        getOrderByIdAndStateAgain(route.params.id);
    }, []);

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <View>
                    <View>
                        <Text style={{ color: COLORS.primary, fontWeight: 'bold', margin: 10 }}>
                            Danh sách chờ xác nhận
                        </Text>
                    </View>
                    <ActivityIndicator size="large" color={COLORS.primary} animating={showed} />
                    {!showed ? (
                        <View>
                            <FlatList
                                contentContainerStyle={{
                                    flexDirection: 'column',
                                }}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={listOrder}
                                renderItem={({ item }) => (
                                    <MyOrderWaitConfirmCard
                                        route={{ order: item, getOrderByIdAndStateAgain: getOrderByIdAndStateAgain }}
                                    />
                                )}
                            />
                        </View>
                    ) : (
                        ''
                    )}
                </View>
            </SafeAreaView>
        </ScrollView>
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
export default ManageOrderWaitConfirm;
