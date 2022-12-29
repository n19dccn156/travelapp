import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import { TextInput } from 'react-native-gesture-handler';
import { updateTypeServiceById } from '../../services/updateData';
import { getAllCaterogy } from '../../services/getData';

function EditTypeScreen({ navigation, route }) {
        updateTypeServiceById(id, name)
            .then(function (res) {
                console.log('res', res);
                if (res.status == 'success') {
                    setTypeService(res.data);

                    getAllCaterogyAgain();
                    // getAllCaterogyAgain();
                    console.log('updateTypeServiceById ', route.params.listCategory);
                    route.params.getAllCaterogyAgain();
                }

                Alert.alert('Thông báo!', res.message, [
                    { text: 'Đóng', onPress: () => console.log('typeService1', typeService) },
                ]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };

    const getAllCaterogyAgain = () => {
        getAllCaterogy()
            .then(function (res) {
                route.params.setListCategory([...res.data]);
                console.log('getAllCaterogy', route.params.listCategory);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    };

    const checkData = () => {
        if (!text.trim()) {
            Alert.alert('Thông báo!', 'Không được để trống tên loại dịch vụ!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
    };
    const confirmDelete = () => {
        Alert.alert('Cảnh báo!', 'Bạn có chắc chắn muốn xóa dịch vụ này không!', [
            {
                text: 'Không',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: ' Chắc', onPress: () => console.log('OK Pressed') },
        ]);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('ListTypeScreen', { listCategory: route.params.listCategory })}
                />
                <Text style={style.headerTitle}>Cập nhật loại dịch vụ</Text>
            </View>
            <View>
                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Mã loại dịch vụ</Text>
                <TextInput
                    placeholder="Nhập mã loại dịch vụ vào đây"
                    defaultValue={typeService.id}
                    style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                    editable={false}
                />
            </View>
            <View>
                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Tên loại dịch vụ</Text>
                <TextInput
                    placeholder="Nhập tên loại dịch vụ vào đây"
                    style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                    defaultValue={typeService.name}
                    onChangeText={(newText) => setText(newText)}

                    // onBlur={() => {
                    //     if (text == '') {
                    //         ('Khong duoc de trong');
                    //     }
                    // }}
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
                    // onPress={() => setModalNotiVisible(true)}
                    // onPress={() => updateTypeService(,text)}
                    onPress={() => {
                        checkData();
                        updateTypeService(typeService.id, text);
                    }}
                >
                    <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Cập nhật</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
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
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );

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
export default EditTypeScreen;
