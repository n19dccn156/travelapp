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
import { BackgroundImage } from 'react-native-elements/dist/config';
import { ScrollView } from 'react-native-gesture-handler';
import store from '../../../../redux/store';
import COLORS from '../../consts/colors';
import MyOrderWaitConfirmCard from './MyOrderWaitConfirmCard';
import { connect } from 'react-redux';
function OrderWaitConfirmScreen(props) {
    const navigation = props.navigation;
    const idState = props.route.params.idState;

    const listOrder = props.list.listOrder.filter((element) => {
        return element.idState == idState;
    });
    // let check = true;
    const footerComponent = () => {
        <View>
            <ActivityIndicator size="large" color={COLORS.primary} animating={true} />
        </View>;
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View>
                    <Text style={{ color: COLORS.primary, fontWeight: 'bold', margin: 10 }}>
                        {idState == 'XACNHAN' ? 'Danh sách chờ xác nhận' : ''}
                        {idState == 'THANHCONG' ? 'Danh sách đã xác nhận' : ''}
                        {idState == 'DAHUY' ? 'Danh sách đã hủy' : ''}
                        {idState == 'HOANTHANH' ? 'Danh sách đã hoàn thành' : ''}
                    </Text>
                </View>
                <View>
                    <BackgroundImage
                        source={{
                            uri: `https://media.glamour.com/photos/6178677a1d7a08b9c1cc4c62/16:9/w_1280,c_limit/Holiday%20Sites%20with%20Fastest%20Shipping%20Times.jpg`,
                        }}
                        style={{ height: 100 }}
                    ></BackgroundImage>
                </View>
                <ActivityIndicator size="large" color={COLORS.primary} animating={false} />
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
                                    idState: idState,
                                }}
                                navigation={navigation}
                            />
                        )}
                        ListFooterComponent={footerComponent}
                    />
                </View>
            </ScrollView>
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
export default connect((state) => {
    return {
        list: state,
    };
})(OrderWaitConfirmScreen);
