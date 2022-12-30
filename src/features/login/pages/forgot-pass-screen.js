import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../../../common/constants/colors';
import { height } from '../../../common/constants/const';
import COLORS from '../../service/consts/colors';
import resetPass from '../service/resetPass';
export function ForgotPass(props) {
    const [email, setEmail] = useState('');
    const [disabled, setDisable] = useState(true);
    const [err, setError] = useState('');
    return (
        <View style={style.container}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: COLORS.white }}>
                <Text style={{ fontSize: 30, marginTop: 100, fontWeight: 'bold', color: colors.cyan }}>
                    Quên mật khẩu
                </Text>
            </View>
            <View style={style.form}>
                {/* <Text>Bạn vui lòng nhập email và xác nhận để được reset mật khẩu!</Text> */}
                <Text style={style.text}>Nhập email (*)</Text>
                <Text style={(style.text, { color: disabled ? 'red' : 'blue' })}>{err}</Text>
                <TextInput
                    style={style.input}
                    placeholder={'example@gmail.com'}
                    placeholderTextColor={COLORS.white}
                    onChangeText={validate}
                />
                <TouchableOpacity
                    style={[style.button, { opacity: disabled ? 0.2 : 1 }]}
                    onPress={handleClick}
                    disabled={disabled}
                >
                    <Text style={style.text}>Xác Nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    function handleClick() {
        resetPass(email)
            .then((data) => {
                Alert.alert('Thông báo', data.message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Thông báo', 'Có lỗi vui lòng thử lại sau', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
            });
    }
    function validate(text) {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log('Email is Not Correct');
            setDisable(true);
            setError('Vui lòng nhập đúng định dạng');
            return false;
        } else {
            setEmail(text);
            setError('');
            setDisable(false);
            console.log('Email is Correct');
        }
    }
}
const style = StyleSheet.create({
    form: {
        height: 500,
        width: 300,
        // borderWidth: 0.5,
        borderRadius: 30,
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
    },
    input: {
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        width: 250,
        marginBottom: 20,
        color: COLORS.white,
        borderColor: colors.cyan,
    },
    button: {
        borderWidth: 0.5,
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cyan,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white,
    },
});
