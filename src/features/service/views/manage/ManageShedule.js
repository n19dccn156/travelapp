import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { deleteServiceById, updateServiceById, updateTypeServiceById } from '../../services/updateData';
import { getAllCaterogy, getSheduleByServiceId } from '../../services/getData';
import ListSheduleForService from './ListSheduleForService';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addSheduleService } from '../../services/Shedule/postData';

function ManageShedule({ navigation, route }) {
    const [listShedule, setListShedule] = useState([]);
    const [name, setName] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const getScheduleServiceAgain = (idService) => {
        getSheduleByServiceId(idService)
            .then(function (res) {
                setListShedule(res.data);
                console.log('res', res);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen home ~ line 17 ~ error', err);
            });
    };

    useEffect(() => {
        getScheduleServiceAgain(route.params.service.id);
    }, []);

    const checkData = () => {
        if (name.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống  nội dung!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return false;
        }
        return true;
    };

    const addService = () => {
        if (checkData())
            addSheduleService(route.params.service.id, name)
                .then(function (res) {
                    console.log(res);
                    if (res.status == 'success') {
                        getScheduleServiceAgain(route.params.service.id);
                    }
                    Alert.alert('Thông báo!', res.message, [{ text: 'Đóng', onPress: () => setModalVisible(false) }]);
                })
                .catch((err) => {
                    console.log('🚀 ~ file: addSheduleService-screen ~ line 17 ~ error', err);
                });
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Lịch cố định theo ngày</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Ionicons name="add" size={28} color={COLORS.primary} style={{ marginTop: 5 }} />
                    </TouchableOpacity>
                </View>

                <ListSheduleForService
                    route={{
                        listShedule: listShedule,
                        setListShedule: setListShedule,
                        getScheduleServiceAgain: getScheduleServiceAgain,
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
                            </View>
                            <View>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>
                                    Nội dung lịch(*)
                                </Text>
                                <TextInput
                                    placeholder="Nhập nội dung vào đây"
                                    style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                                    onChangeText={(newName) => setName(newName)}
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
export default ManageShedule;
