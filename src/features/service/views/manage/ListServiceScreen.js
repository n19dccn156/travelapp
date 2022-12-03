import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Modal, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import ListButtonCategory from '../Home/ListButtonCategory';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import ListService from './ListService';
import { getServiceOfCaterogy } from '../../services/getData';
import { addServiceForType } from '../../services/service/postData';
function ListServiceScreen({ navigation, route }) {
    console.log('route ListServiceScreen', route);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [number, setNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    const listCategory = route.params.listCategory;

    const [modalVisible, setModalVisible] = useState(false);
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

    const checkData = () => {
        if (name.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống tên dịch vụ!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
        if (price.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống giá dịch vụ!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
        if (number.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống số lượng!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
        if (phone.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống số điện thoại!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }

        if (phone.trim().length != 10 || phone.trim()[0] != '0') {
            Alert.alert('Thông báo!', 'Số điện thoại không hợp lệ! ', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
        if (description.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống mô tả dịch vụ!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
    };

    const addService = () => {
        checkData();
        addServiceForType(serviceType, name, price, number, phone, description)
            .then(function (res) {
                console.log(res);

                Alert.alert('Thông báo!', res.message, [{ text: 'Đóng', onPress: () => setModalVisible(false) }]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };

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
                    // serviceType: route.params.serviceType,
                    // setServiceType: route.params.setServiceType,
                    serviceType: serviceType,
                    setServiceType: setServiceType,
                }}
            />
            {/* list service of type */}
            <ListService
                navigation={navigation}
                route={{ listServiceForType: listServiceForType, listCategory: listCategory }}
            />

            {/* modal them loai */}

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 8, fontSize: 18 }}>
                                Thêm dịch vụ
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Tên dịch vụ(*)</Text>
                            <TextInput
                                placeholder="Nhập tên dịch vụ vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                                onChangeText={(newText) => setName(newText)}
                            />
                        </View>

                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Giá(*)</Text>
                            <TextInput
                                placeholder="Nhập giá dịch vụ vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                                onChangeText={(newText) => setPrice(newText)}
                                keyboardType="numeric"
                            />
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Số lượng(*)</Text>
                            <TextInput
                                placeholder="Nhập số lượng vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                                keyboardType="numeric"
                                onChangeText={(newText) => setNumber(newText)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Số điện thoại(*)</Text>
                            <TextInput
                                placeholder="Nhập số điện thoại vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                                keyboardType="numeric"
                                onChangeText={(newText) => setPhone(newText)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Mô tả(*)</Text>
                            <TextInput
                                placeholder="Nhập mô tả dịch vụ vào đây"
                                style={{ borderWidth: 1, borderRadius: 10, margin: 5 }}
                                onChangeText={(newText) => setDescription(newText)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Hình minh họa(*)</Text>
                            <TextInput
                                placeholder="Chọn hình minh họa"
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
                                onPress={() => addService()}
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
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
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
