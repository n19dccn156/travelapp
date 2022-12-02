import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import ListButtonCategory from '../Home/ListButtonCategory';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import ListService from './ListService';
import { getServiceOfCaterogy } from '../../services/getData';
function ListServiceScreen({ navigation, route }) {
    const listCategory = route.params.listCategory;
    const listServiceForType = route.params.listServiceForType;
    const setlistServiceForType = route.params.setlistServiceForType;
    const getServiceOfType = route.params.getServiceOfType;
    const [modalVisible, setModalVisible] = useState(false);
    // //load list service for type
    // const [listServiceForType, setlistServiceForType] = useState(route.params.listServiceForType);

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
                <Text style={style.headerTitle}>Quản lý dịch vụ</Text>
                <View style={{ marginTop: 10 }}>
                    <AntDesign
                        name="pluscircleo"
                        size={20}
                        color={COLORS.white}
                        onPress={() => setModalVisible(true)}
                    />
                </View>
            </View>
            {/* <ScrollView> */}
            {/* list category for all type */}
            <ListButtonCategory
                navigation={navigation}
                route={{
                    listCategory: listCategory,
                    getServiceOfType: getServiceOfType,
                    serviceType: route.params.serviceType,
                    setServiceType: route.params.setServiceType,
                }}
            />
            {/* list service of type */}
            <ListService navigation={navigation} route={{ listServiceForType: listServiceForType }} />

            {/* modal them loai */}
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10, fontSize: 18 }}>
                                Thêm loại dịch vụ
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Tên dịch vụ</Text>
                            <TextInput
                                placeholder="Nhập mã loại dịch vụ vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                            />
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Mô tả</Text>
                            <TextInput
                                placeholder="Nhập mã loại dịch vụ vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                            />
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Giá</Text>
                            <TextInput
                                placeholder="Nhập mã loại dịch vụ vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                            />
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Hình minh họa</Text>
                            <TextInput
                                placeholder="Nhập mã loại dịch vụ vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.primary,
                                    margin: 20,
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                    padding: 10,
                                    justifyContent: 'center',
                                }}
                                activeOpacity={0.8}
                                onPress={() => addType(id, name)}
                            >
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Lưu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.primary,
                                    margin: 20,
                                    borderRadius: 15,
                                    flexDirection: 'row',
                                    padding: 10,
                                    justifyContent: 'center',
                                }}
                                activeOpacity={0.8}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Hủy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
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
export default ListServiceScreen;
