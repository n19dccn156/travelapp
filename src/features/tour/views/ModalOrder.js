// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import Modal from 'react-native-modal';
// import OrderScreen from './OrderScreen';
// const ModalOrder = ({ isShow, onClose }) => {
//     return (
//         <View style={[StyleSheet.absoluteFillObject, styles.container]}>
//             <View style={styles.content}>
//                 <OrderScreen onClose={onClose} />
//             </View>
//         </View>
//     );
// };

// export default ModalOrder;

// const styles = StyleSheet.create({
//     content: {
//         flex: 1,
//         // backgroundColor: 'rgba(0,0,0,0.4)',
//         justifyContent: 'flex-end',
//     },
//     container: {
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
// });
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';

const ModalOrder = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [number, onChangeNumber] = React.useState(null);
    const [note, onChangeNote] = React.useState(null);
    const [date, setDate] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Thông tin đặt</Text>
                        <Text style={styles.modalText}>Ngày bắt đầu:</Text>
                        <Text style={styles.modalText}>{Moment(date).format('DD/MM/yyyy')}</Text>
                        <Button title="Chọn ngày bắt đầu" onPress={() => setOpen(true)} />
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode="date"
                            onConfirm={(date) => {
                                setOpen(false);
                                setDate(date);
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
                        {/* <Text style={styles.modalText}>Ngày kết thúc:</Text>
                        <Text style={styles.modalText}>{date}</Text>
                        <Button title="Chọn ngày kết thúc" onPress={() => setOpen(true)} />
                        <DatePicker
                            modal
                            open={open}
                            date={dateEnd}
                            onConfirm={(dateEnd) => {
                                setOpen(false);
                                setDateEnd(dateEnd);
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        /> */}
                        <Text style={styles.modalText}>Số lượng:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Số lượng"
                            keyboardType="numeric"
                        />
                        <Text style={styles.modalText}>Ghi chú:</Text>
                        <TextInput style={styles.input} onChangeText={onChangeNote} value={note} placeholder="Note" />
                        <Text style={styles.modalText}>Tổng:</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Đặt</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hủy</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default ModalOrder;
