import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    Pressable,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
// import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-modern-datepicker';
import { Icon } from 'react-native-elements';
import Moment from 'moment';
import COLORS from '../consts/colors';
import style from '../style/Home/style';
import { ScrollView } from 'react-native-gesture-handler';

function OrderScreen({ navigation }) {
    const [selectedDateStart, setSelectedDateStart] = useState('');
    const [selectedDateEnd, setSelectedDateEnd] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('HomeScreen')}
                />
                <Text style={style.headerTitle}>Đặt dịch vụ</Text>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.textStyle}>Chọn thời gian bắt đầu</Text>
                    <DatePicker onSelectedChange={(date) => setSelectedDateStart(date)} />
                    <Text style={styles.textStyle}>Chọn thời gian kết thúc</Text>
                    <DatePicker onSelectedChange={(date) => setSelectedDateEnd(date)} />
                    <Text style={styles.textStyle}>Chọn số lượng</Text>
                    <TextInput style={styles.inputStyle} placeholder="Nhập số lượng"></TextInput>
                    <Text style={styles.textStyle}>Ghi chú</Text>
                    <TextInput placeholder="Nội dung ghi chú" style={styles.inputStyle} />
                    <TouchableOpacity style={styles.btnDatStyle}>
                        <Text style={styles.txtDatStyle}>Thanh toán</Text>
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
    textStyle: {
        color: COLORS.dark,
        fontWeight: 'bold',
        fontSize: 18,
    },
    inputStyle: { borderWidth: 1, padding: 10, margin: 10, borderRadius: 10 },
    btnDatStyle: {
        backgroundColor: COLORS.primary,
        height: 70,
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
        margin: 20,
    },
    txtDatStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
    },
});
export default OrderScreen;
