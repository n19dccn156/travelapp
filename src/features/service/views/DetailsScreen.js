import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageViewer from 'react-native-image-zoom-viewer';
import COLORS from '../consts/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { Image } from 'react-native-elements';
import { useDispatch } from 'react-redux';

const DetailsScreen = ({ navigation, route }) => {
    const service = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [listImg, setListImg] = useState([]);
    const pictures = service.pictures;
    const dispatch = useDispatch();
    const list = pictures.split(',');
    const listImg1 = [];
    useEffect(() => {
        list.map((data) => {
            listImg1.push({ url: data });
        });
        setListImg(listImg1);
    }, []);

    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'vnđ';
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <Swiper style={{ flex: 1 }}>
                {listImg.map((data, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            testID={index + ''}
                            style={{ flex: 1 }}
                            onPress={() => setModalVisible(true)}
                        >
                            <ImageBackground style={{ flex: 1 }} source={{ uri: `${data.url}` }}>
                                <View style={style.header}>
                                    <Icon
                                        name="arrow-back-ios"
                                        size={28}
                                        color={COLORS.white}
                                        onPress={navigation.goBack}
                                    />
                                    <Icon name="more-vert" size={28} color={COLORS.white} />
                                </View>
                                <View style={style.imageDetailes}>
                                    <Text
                                        style={{
                                            width: '70%',
                                            fontSize: 30,
                                            fontWeight: 'bold',
                                            marginBottom: 20,
                                            color: COLORS.white,
                                            textShadowColor: COLORS.dark,
                                            textShadowRadius: 1,
                                        }}
                                    >
                                        {service.name}
                                    </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="star" size={30} color={COLORS.oranbge} />
                                        <Text
                                            style={{
                                                color: COLORS.white,
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                textShadowColor: COLORS.dark,
                                                textShadowRadius: 1,
                                            }}
                                        >
                                            {service.star.toFixed(1)}
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    );
                })}
            </Swiper>

            <View style={style.detailsContainer}>
                <View style={style.iconContainer}>
                    <Icon name="favorite" color={COLORS.red} size={30} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <AntDesign name="tag" size={20} color={COLORS.primary} />
                    <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold', color: COLORS.primary }}>
                        {service.idTypeService}
                    </Text>
                </View>
                <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>Chi tiết dịch vụ</Text>
                <Text style={{ marginTop: 20, lineHeight: 22 }}>{service.description}</Text>
            </View>
            <View style={style.footer}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: COLORS.white,
                        }}
                    >
                        {currencyFormat(service.price)}
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: COLORS.grey,
                            marginLeft: 2,
                        }}
                    >
                        {service.unit}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => 
                        {
                            dispatch({ "type": "reset"})
                            navigation.navigate('OrderScreen', { service: service, state: 'order', order: '' })}
                            
                        }
                >
                    <View style={style.bookNowBtn}>
                        <Text style={{ color: COLORS.primary, fontSize: 16, fontWeight: 'bold' }}>Đặt ngay</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <ImageViewer imageUrls={listImg} index={1} style={{ height: 500, paddingStart: 0, paddingEnd: 0 }} />
                <View style={style.modalView}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons name="close-circle" size={28} style={{ color: 'white' }} />
                    </Pressable>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    bookNowBtn: {
        height: 50,
        width: 100,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: -30,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        right: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        flex: 0.3,
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    imageDetailes: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 30,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    modalView: {
        position: 'absolute',
        padding: 40,
    },
});

export default DetailsScreen;
