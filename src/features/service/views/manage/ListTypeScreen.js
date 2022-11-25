import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, TouchableOpacity, View, Alert, StyleSheet, Modal } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getAllCaterogy, getServiceOfCaterogy } from '../../services/getData';
import ListType from './ListType';
import { TextInput } from 'react-native-gesture-handler';

function ListTypeScreen({ navigation, route }) {
    console.log('route', route);
    const [modalVisible, setModalVisible] = useState(false);
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

            <View>
                <ListType
                    navigation={navigation}
                    route={{
                        listCategory: route.params.listCategory,
                        getServiceOfType: route.params.getServiceOfType,
                        setListCategory: route.params.setListCategory,
                        setlistServiceForType: route.params.setlistServiceForType,
                    }}
                />
                {/* modal them loai */}
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10, fontSize: 18 }}>
                                    Thêm loại dịch vụ
                                </Text>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>
                                    Tên loại dịch vụ
                                </Text>
                                <TextInput
                                    placeholder="Nhập tên loại dịch vụ"
                                    style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                                />
                            </View>
                            <View>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Chọn icon</Text>
                                <TextInput
                                    placeholder="Nhập số điện thoại vào đây"
                                    style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
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
                                    onPress={() => navigation.navigate('DetailsScreen')}
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
            </View>
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
export default ListTypeScreen;
