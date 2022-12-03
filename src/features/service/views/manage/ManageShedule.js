import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { deleteServiceById, updateServiceById, updateTypeServiceById } from '../../services/updateData';
import { getAllCaterogy } from '../../services/getData';

function ManageShedule({ navigation, route }) {
    console.log('route EditService', route);
    const service = route.params.service;
    const [name, setName] = useState(service.name);
    const [description, setDescription] = useState(service.description);
    const [price, setPrice] = useState(service.price + '');
    const checkData = () => {
        if (name.trim() == '' || description.trim() == '' || price.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống trường nào!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
    };
    const updateService = () => {
        checkData();

        updateServiceById(service, name, description, price)
            .then(function (res) {
                console.log('res', res);
                if (res.status == 'success') {
                    // setTypeService(res.data);
                    // // setText(res.data.name);
                    // getAllCaterogyAgain();
                }

                Alert.alert('Thông báo!', res.message, [{ text: 'Đóng', onPress: () => {} }]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };

    const confirmDelete = () => {
        Alert.alert('Cảnh báo!', 'Bạn có chắc chắn muốn xóa dịch vụ này không!', [
            {
                text: 'Không',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: ' Chắc', onPress: () => deleteService() },
        ]);
    };

    const deleteService = () => {
        deleteServiceById(service.id)
            .then(function (res) {
                console.log('res', res);

                Alert.alert('Thông báo!', res.message, [
                    {
                        text: 'Đóng',
                        onPress: () =>
                            navigation.navigate('ListServiceScreen', { listCategory: route.params.listCategory }),
                    },
                ]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() =>
                        navigation.navigate('ListServiceScreen', { listCategory: route.params.listCategory })
                    }
                />
                <Text style={style.headerTitle}>Cập nhật dịch vụ</Text>
            </View> */}
            <ScrollView>
                <View>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Lịch cố định theo ngày</Text>
                    <TextInput
                        placeholder="Nhập mã loại dịch vụ vào đây"
                        defaultValue={service.idTypeService}
                        style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                        editable={false}
                    />
                </View>
                <View>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Tên dịch vụ (*)</Text>
                    <TextInput
                        placeholder="Nhập tên dịch vụ vào đây"
                        defaultValue={service.name}
                        style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                        onChangeText={(newName) => setName(newName)}
                    />
                </View>
                <View>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Mô tả (*)</Text>
                    <TextInput
                        placeholder="Nhập mô tả dịch vụ vào đây"
                        style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                        defaultValue={service.description}
                        onChangeText={(newDescription) => setDescription(newDescription)}
                    />
                </View>
                <View>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Giá (VNĐ)(*)</Text>
                    <TextInput
                        placeholder="Nhập giá dịch vụ vào đây"
                        style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                        defaultValue={service.price + ''}
                        onChangeText={(newPrice) => setPrice(newPrice)}
                        keyboardType={'numeric'}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            margin: 20,
                            borderRadius: 15,
                            flexDirection: 'row',
                            padding: 10,
                            justifyContent: 'center',
                            width: 100,
                        }}
                        activeOpacity={0.8}
                        onPress={() => {
                            updateService();
                        }}
                    >
                        <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Cập nhật</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            margin: 20,
                            borderRadius: 15,
                            flexDirection: 'row',
                            padding: 10,
                            justifyContent: 'center',
                            width: 100,
                        }}
                        activeOpacity={0.8}
                        onPress={() => confirmDelete()}
                    >
                        <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Xóa</Text>
                    </TouchableOpacity>
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
export default ManageShedule;
