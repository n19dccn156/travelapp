import React, { useEffect, useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { Image, Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import ListButtonCategory from '../Home/ListButtonCategory';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import ListService from './ListService';
import { getServiceOfCaterogy } from '../../services/getData';
import { addServiceForType } from '../../services/service/postData';
import { saveImage } from '../../services/Image/post';
import { getImageById } from '../../services/Image/getData';
function ListServiceScreen({ navigation, route }) {
    const [showedButtonCategory, setShowedButtonCategory] = useState(true);
    const [showedListService, setShowedListService] = useState(true);

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
                setShowedButtonCategory(false);
                setShowedListService(false);
            })
            .catch((err) => {
                setlistServiceForType([]);
                setShowedButtonCategory(false);
                setShowedListService(false);
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
    const [imgPath, setImgPath] = useState(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    );
    const chooseImage = () => {
        let options = {
            title: 'Select Image',
            customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
                data: true,
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                Alert.alert(response.customButton);
            } else {
                // const source = JSON.stringify(response);

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.uri };
                // alert(JSON.stringify(response));s

                console.log('source', response.assets[0].uri);
                // this.setState({
                //     filePath: response,
                //     fileData: response.data,
                //     fileUri: response.uri,
                // });
                setImgPath(response.assets[0].uri);
                const data = new FormData();
                data.append('image', {
                    name: response.assets[0].fileName,
                    type: response.assets[0].type,
                    uri: Platform.OS === 'ios' ? response.assets[0].uri.replace('file://', '') : response.assets[0].uri,
                });
                // upLoadImageToServer(data);
                getImage('d8d4b3c9-55b3-42e4-a29a-2a6490934cab');
            }
        });
    };

    const upLoadImageToServer = (data) => {
        saveImage(data)
            .then(function (res) {
                console.log(res);

                Alert.alert('Thông báo!', res.message, [{ text: 'Đóng', onPress: () => setModalVisible(false) }]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: upLoadImageToServer ~ error', err);
            });
    };

    const getImage = (id) => {
        getImageById(id)
            .then(function (res) {
                console.log('getImage: ', res);

                // Alert.alert('Thông báo!', res.message, [{ text: 'Đóng', onPress: () => setModalVisible(false) }]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: getImage ~ error', err);
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

            <ActivityIndicator size="large" color={COLORS.primary} animating={showedButtonCategory} />
            {!showedButtonCategory ? (
                <View>
                    {/* list category for all type */}
                    <ListButtonCategory
                        navigation={navigation}
                        route={{
                            listCategory: listCategory,
                            getServiceOfType: getServiceOfType,
                            serviceType: serviceType,
                            setServiceType: setServiceType,
                            setShowedListService: setShowedListService,
                        }}
                    />
                    <ActivityIndicator size="small" color={COLORS.primary} animating={showedListService} />
                    {!showedListService ? (
                        <View>
                            {/* list service of type */}
                            <ListService
                                navigation={navigation}
                                route={{
                                    listServiceForType: listServiceForType,
                                    listCategory: listCategory,
                                    getServiceOfType: getServiceOfType,
                                }}
                            />
                        </View>
                    ) : (
                        ''
                    )}
                </View>
            ) : (
                ''
            )}

            {/* modal them loai */}

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 8, fontSize: 18 }}>
                                    Thêm dịch vụ
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>
                                    Tên dịch vụ(*)
                                </Text>
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
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>
                                    Số điện thoại(*)
                                </Text>
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
                                    style={{ borderWidth: 1, borderRadius: 10, margin: 5, width: 300 }}
                                    onChangeText={(newText) => setDescription(newText)}
                                />
                            </View>
                            <View>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 5 }}>
                                    Hình minh họa(*)
                                </Text>

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
                </ScrollView>
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
        // margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
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
