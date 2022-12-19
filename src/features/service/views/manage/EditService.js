import React, { useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { deleteServiceById, updateServiceById, updateTypeServiceById } from '../../services/updateData';
import { getAllCaterogy } from '../../services/getData';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { variables } from '../../../../common/constants/const';
import { saveImage } from '../../services/Image/post';
import { deleteImage } from '../../services/Image/getData';
var host = variables.host;
function EditService({ navigation, route }) {
    const service = route.params.service;
    const [name, setName] = useState(service.name);
    const [description, setDescription] = useState(service.description);
    const [price, setPrice] = useState(service.price + '');

    const [imgPath, setImgPath] = useState(
        service.avatar != '' ? `${host}${service.avatar}` : `${host}/api/v1/images/1`,
    );

    const checkData = () => {
        if (name.trim() == '' || description.trim() == '' || price.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống trường nào!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return false;
        }
        return true;
    };
    const updateService = () => {
        if (checkData()) upLoadImageToServer();
    };

    const updateServiceToServer = (linkAvatar) => {
        updateServiceById(service, name, description, price, linkAvatar)
            .then(function (res) {
                console.log('res', res);
                if (res.status == 'success') {
                    route.params.getServiceOfType(service.idTypeService);
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

    const [responseImage, setResponseImage] = useState('');
    const chooseImage = () => {
        let options = {
            title: 'Select Image',
            customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                Alert.alert(response.customButton);
            } else {
                // console.log('source', response.assets[0].uri);

                setImgPath(response.assets[0].uri);
                setResponseImage(response);
            }
        });
    };

    const upLoadImageToServer = () => {
        if (responseImage != '' && responseImage != null) {
            const data = new FormData(); //save image mutipart file
            data.append('image', {
                name: responseImage.assets[0].fileName,
                type: responseImage.assets[0].type,
                uri:
                    Platform.OS === 'ios'
                        ? responseImage.assets[0].uri.replace('file://', '')
                        : responseImage.assets[0].uri,
            });

            saveImage(data)
                .then(function (res) {
                    console.log(res);
                    // setLinkAvatar(res.data);
                    // console.log('res.data', res.data);
                    if (res.data != '' && res.data != null) {
                        deleteImageOnServer(service.avatar);
                        updateServiceToServer(res.data);
                    } else {
                        Alert.alert('Thông báo!', 'Không được để trống hình ảnh dịch vụ!', [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
                    }
                    // Alert.alert('Thông báo!', res.message, [{ text: 'Đóng', onPress: () => setModalVisible(false) }]);
                })
                .catch((err) => {
                    console.log('🚀 ~ file: upLoadImageToServer ~ error', err);
                });
        } else {
            updateServiceToServer(`${service.avatar}`);
        }
    };
    const deleteImageOnServer = (image) => {
        const data = new FormData(); //save image mutipart file
        data.append('url', image);

        deleteImage(data)
            .then(function (res) {
                // console.log('res', res);
                // Alert.alert('Thông báo!', res.message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: listCategory-screen ~ line 17 ~ error', err);
            });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Loại dịch vụ</Text>
                    <TextInput
                        placeholder="Nhập mã loại dịch vụ vào đây"
                        defaultValue={service.idTypeService}
                        style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                        editable={false}
                    />
                </View>
                <View>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>Hình minh họa(*)</Text>

                    <TouchableOpacity onPress={() => chooseImage()}>
                        <View
                            style={{
                                backgroundColor: COLORS.grey,
                                width: 100,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                            }}
                        >
                            <Text>Chọn file ... </Text>
                        </View>
                    </TouchableOpacity>
                    <Image source={{ uri: `${imgPath}` }} style={{ height: 150, width: 150 }} />
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
                        multiline={true}
                        numberOfLines={3}
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
export default EditService;
