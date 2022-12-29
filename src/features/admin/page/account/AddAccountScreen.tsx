import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button, TextInput, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { height, sizeScale, variables, width } from "../../../../common/constants/const";
import { colors } from "../../../../common/constants/colors";
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from "react-native-vector-icons/FontAwesome";


export function AddAccountScreen({navigation}: {navigation: any}) {

    const gender = ["Nam", "Nữ"]
    const roleid = ["ADMIN", "BUSINESS_PARTNER_SERVICE"]
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // let emails = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const usernameRegex = /^[a-zA-Z0-9\-]+$/;
    const nameRegex = /^[a-zA-Z \-]+$/;
    const phoneRegex = /^[0-9\-]+$/;

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState(roleid[0]);
    const [phone, setPhone] = useState('');
    const [sex, setSex] = useState(gender[0]);
    const [allowClick, setAllowClick] = useState(false)

    const [emailValidate, setEmailValidate] = useState('Không được bỏ trống');
    const [usernameVaidate, setUsernameValidate] = useState('');
    const [passwordValidate, setPasswordValidate] = useState('');
    const [firstnameValidate, setFirstnameValidate] = useState('');
    const [phoneValidate, setPhoneValidate] = useState('');
    const [lastnameValidate, setLastNameValidate] = useState('');

    const emailError = <Text style={styles.textValidate}>{emailValidate}</Text>
    const usernameError = <Text style={styles.textValidate}>{usernameVaidate}</Text>
    const passwordError = <Text style={styles.textValidate}>{passwordValidate}</Text>
    const firstnameError = <Text style={styles.textValidate}>{firstnameValidate}</Text>
    const lastnameError = <Text style={styles.textValidate}>{lastnameValidate}</Text>
    const phoneError = <Text style={styles.textValidate}>{phoneValidate}</Text>

    useEffect(() => {
        username.match(usernameRegex)
        function validate() {
            
            if(email.split('@').length !== 2) setEmailValidate("Email không hợp lệ")
            else setEmailValidate("")

            if(username.match(usernameRegex) === null) setUsernameValidate("Chỉ có ký tự a-z, A-Z, 0-9")
            else setUsernameValidate("")

            if(password.match(usernameRegex) === null) setPasswordValidate("Chỉ có ký tự a-z, A-Z, 0-9")
            else setPasswordValidate("")

            if(firstname.match(nameRegex) === null) setFirstnameValidate("Chỉ có ký tự a-z, A-Z")
            else setFirstnameValidate("")

            if(lastname.match(nameRegex) === null) setLastNameValidate("Chỉ có ký tự a-z, A-Z")
            else setLastNameValidate("")

            if(phone.length !== 10) setPhoneValidate("SĐT phải 10 ký tự")
            else setPhoneValidate("")

            if(phone.match(phoneRegex) === null) setPhoneValidate("Chỉ có ký tự số 0-9")
            else setPhoneValidate("")

        }
        function checkAllow() {
            if(usernameVaidate.length === 0 && passwordValidate.length === 0 &&
                passwordValidate.length === 0 && emailValidate.length === 0 && 
                firstnameValidate.length === 0 && lastnameValidate.length === 0) {
                
                setAllowClick(true)
            }
        }
        checkAllow()
        validate()
    }, [email, username, password, firstname, lastname, phone])

    const submit = () => {
        const request = {
            'email': email,
            'username': username,
            'password': password,
            'firstName': firstname,
            'lastName': lastname,
            'phone': phone,
            'sex': sex,
            'role': role
        }
        console.log(JSON.stringify(request))
        fetch(
            variables.host2+'/api/v1/memberships', 
            {   method: "POST", 
                body: JSON.stringify(request),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.status === 'success') {
                try {
                    Alert.alert("Thông Báo", "Thêm thành công", [{ text: "Đồng ý" }])
                } catch (error) {
                    Alert.alert("Thông Báo", "Lỗi đăng nhập", [{ text: "Đồng ý" }])
                }
            } else {
                Alert.alert("Thông Báo", data.message, [{ text: "Đồng ý" }])
            }
        })
        .catch((error) => console.log(error));      
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.login1}>
                {emailValidate !== '' ? emailError : null}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)} />
                {usernameVaidate !== '' ? usernameError : null}
                <TextInput
                    style={styles.input}
                    placeholder="Tài khoản"
                    onChangeText={(username) => setUsername(username)} />
                {passwordValidate !== '' ? passwordError : null}
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    onChangeText={(password) => setPassword(password)} />
                {firstnameValidate !== '' ? firstnameError : null}
                <TextInput
                    style={styles.input}
                    placeholder="Họ"
                    onChangeText={(firstname) => setFirstname(firstname)} />
                {lastnameValidate !== '' ? lastnameError : null}
                <TextInput
                    style={styles.input}
                    placeholder="Tên"
                    onChangeText={(lastname) => setLastname(lastname)} />
                {phoneValidate !== '' ? phoneError : null}
                <TextInput
                    style={styles.input}
                    placeholder="Số điện thoại"
                    onChangeText={(phone) => setPhone(phone)} />
                <SelectDropdown
                    data={gender}
                    // defaultValueByIndex={1}
                    defaultValue={sex}
                    onSelect={(selectedItem, index) => {
                        setSex(gender[index])
                    }}
                    defaultButtonText={'Select country'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />
                <SelectDropdown
                    data={roleid}
                    // defaultValueByIndex={1}
                    defaultValue={role}
                    onSelect={(selectedItem, index) => {
                        setRole(roleid[index])
                    }}
                    defaultButtonText={'Select country'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />
               {allowClick ? (
                <TouchableOpacity onPress={() => { submit() }}>
                    <View style={styles.buttonLogin}>
                        <Text style={{ color: colors.white, textAlign: "center", textAlignVertical: "center", fontSize: 18, fontWeight: "bold" }}>Thêm Tài Khoản</Text>
                    </View>
                </TouchableOpacity>
               ) : (
                    <TouchableOpacity style={{}}>
                        <View style={styles.buttonLogin}>
                            <Text style={{ color: colors.white, textAlign: "center", textAlignVertical: "center", fontSize: 18, fontWeight: "bold" }}>Thêm Tài Khoản</Text>
                        </View>
                    </TouchableOpacity>
               )}
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   padding: 20,
        //   flexDirection: "column"
    },
    image: {
        flex: 1.5,
        // paddingTop: sizeScale(25),
    },
    input: {
        height: 60,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 18
    },
    buttonLogin: {
        height: 50,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        backgroundColor: colors.primary,
        shadowRadius: 4,
        shadowOpacity: 0.3,
        shadowOffset: { width: 5, height: 5 }
    },
    or: {
        height: 50,
        width: 200,
        // margin: sizeScale(12),
        // padding: sizeScale(5),
        borderRadius: 10,
        fontSize: 18,
    },
    login1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    login: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowRadius: 5,
        shadowOpacity: 0.6,
        shadowOffset: { width: 5, height: 5 }
    },
    loginGoogle: {
        width: sizeScale(300),
        height: sizeScale(70),
        borderRadius: sizeScale(10),
        backgroundColor: colors.red,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    logoGoogle: {
        paddingLeft: sizeScale(4),
        paddingRight: sizeScale(4),
        borderRadius: sizeScale(10),
        backgroundColor: colors.red,
        height: sizeScale(64)
    },
    loginFacebook: {
        width: sizeScale(300),
        height: sizeScale(70),
        borderRadius: sizeScale(10),
        backgroundColor: colors.blue,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    logoFacebook: {
        paddingLeft: sizeScale(4),
        paddingRight: sizeScale(4),
        borderRadius: sizeScale(10),
        backgroundColor: colors.blue,
        height: sizeScale(64)
    },
    titleLoginGoogle: {
        flex: 1,
        paddingLeft: 5,
        justifyContent: "center",
        alignContent: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, .2)',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    dropdown1BtnStyle: {
        width: 300,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
    textValidate: {
        color: colors.red,
        margin: 12,
        padding: 10,
        fontSize: 14,
        // backgroundColor: colors.white,
        backgroundColor: colors.light
    }
});