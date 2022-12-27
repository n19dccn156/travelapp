import React, { useEffect, useState } from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Alert, Pressable, Modal, SafeAreaView, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../common/constants/colors";
import { height, sizeScale, variables, width } from "../../../common/constants/const";
import { LoginButton, AccessToken, LoginResult, Profile } from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

// const currentProfile = Profile.getCurrentProfile().then(
//     function (currentProfile) {
//         if (currentProfile) {

//             const urlGet = variables.host2 + "/api/v1/users/" + currentProfile.userID;
//             const urlPost = variables.host2 + "/api/v1/users";
//             fetch(urlGet)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     if (data.status === 'success') {
//                         try {
//                             AsyncStorage.removeItem('@userid')
//                             AsyncStorage.setItem('@userid', data.data.id);
//                             // login();
//                         } catch (error) {
//                             Alert.alert("Thông Báo", "Lỗi đăng nhập", [{ text: "Đồng ý" }])
//                         }
//                     } else {
//                         let dataPost = {
//                             "avatar": currentProfile.imageURL?.split("?")[0],
//                             "firstName": currentProfile.firstName + " " + currentProfile.middleName,
//                             "id": uuid.v4(),
//                             "idSocial": currentProfile.userID,
//                             "lastName": currentProfile.lastName,
//                             "phone": "phone",
//                             "platform": "facebook",
//                             "sex": "Nam"
//                         }

//                         fetch(urlPost, {
//                             method: "POST",
//                             headers: { 'Content-Type': 'application/json' },
//                             body: JSON.stringify(dataPost)
//                         })
//                             .then((res) => res.json())
//                             .then((data) => {
//                                 if (data.status === 'success') {
//                                     try {
//                                         AsyncStorage.removeItem('@userid')
//                                         AsyncStorage.setItem('@userid', data.data.id);
//                                         console.log("Login successfully: " + data.data.id)
//                                     } catch (error) {
//                                         Alert.alert("Thông Báo", "Lỗi đăng nhập", [{ text: "Đồng ý" }])
//                                     }
//                                 } else {
//                                     Alert.alert("Thông Báo", "Lỗi đăng nhập", [{ text: "Đồng ý" }])
//                                 }
//                             })
//                             .catch((error) => console.log(error));
//                     }
//                 });
//         }
//     }
// );

export function LoginScreen({ navigation }: { navigation: any }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    // async function loginHandler(id: string) {
    //     try {
    //         AsyncStorage.removeItem('@userid')
    //         AsyncStorage.setItem('@userid', id);
    //     } catch (error) {
    //         Alert.alert("Thông Báo", "Lỗi đăng nhập", [{ text: "Đồng ý" }])
    //     }
    // }

    const login = () => {

        setModalVisible(!modalVisible)

        setTimeout(() => {
            setModalVisible(modalVisible)
            navigation.navigate('HomeApp');
        }, 1000);
    }

    const submit = () => {
        const urlGet = variables.host2 + "/api/v1/memberships/login?_username=" + username + "&_password=" + password;

        fetch(urlGet, {method: "POST"})
        .then((res) => res.json())
        .then((data) => {
            console.log(urlGet)
            if (data.status === 'success') {
                try {
                    AsyncStorage.removeItem('@userid')
                    AsyncStorage.setItem('@userid', data.data.id);
                    AsyncStorage.setItem('@roleid', data.data.role);
                    login();
                } catch (error) {
                    Alert.alert("Thông Báo", "Lỗi đăng nhập", [{ text: "Đồng ý" }])
                }
            } else {
                Alert.alert("Thông Báo", "Tài khoản hoặc mật khẩu sai", [{ text: "Đồng ý" }])
            }
        })
        .catch((error) => console.log(error));

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.white}
                barStyle={"default"}
                hidden={true}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ backgroundColor: colors.white, width: 100, height: 100, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                            <ActivityIndicator size="large" color={colors.indigo} />
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.image}>
                <Image source={require('../../../img/login-img.jpg')} style={{ width: width, height: height / 3 }} />
            </View>
            <View style={styles.login1}>
                <TextInput
                    style={styles.input}
                    placeholder="Tài khoản"
                    onChangeText={(username) => setUsername(username)} />
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    onChangeText={(password) => setPassword(password)} />
                <TouchableOpacity onPress={() => { submit() }}>
                    <View style={styles.buttonLogin}>
                        <Text style={{ color: colors.white, textAlign: "center", textAlignVertical: "center", fontSize: 18, fontWeight: "bold" }}>Đăng nhập</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.buttonLogin}>
                        <Text style={{ color: colors.white, textAlign: "center", textAlignVertical: "center", fontSize: 18, fontWeight: "bold" }}>Quên mật khẩu</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.or}>
                    <Text style={{ textAlign: "center", textAlignVertical: "center", fontSize: 14 }}>---  hoặc  ---</Text>
                </View>
            </View>

            <View style={styles.login}>
                <LoginButton
                    onLoginFinished={
                        ((error: Record<string, unknown>, result: LoginResult) => {
                            if (error) {
                                console.log("login has error: " + error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data: any) => {
                                        // currentProfile;
                                        login();
                                    }
                                )
                            }
                        })
                    }
                    onLogoutFinished={() => login()} />

            </View>
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
    }
});