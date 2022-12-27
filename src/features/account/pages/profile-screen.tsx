import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button, SafeAreaView } from "react-native";
import { colors } from "../../../common/constants/colors";
import { height, heightScale, sizeScale, variables, width } from "../../../common/constants/const";

export function ProfileScreen() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const data = {
        status: "",
        message: "",
        data: {
            id: "",
            role: "",
            first_name: "",
            last_name: "",
            phone: "",
            sex: "",
            avatar: variables.host2+"/api/v1/images/1"
        }
    }
    const [user, setUser] = useState(data);

    useEffect(() => {
        async function getData() {
            const getId = await AsyncStorage.getItem("@userid");
            if (getId !== "" && getId !== undefined && getId !== null) {
                fetch(variables.host2 + "/api/v1/account/" + getId, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(response => {
                        const data = JSON.stringify(response)
                        const user = JSON.parse(data)
                        setUser(user)
                    })
                    .catch(error => console.log('Error: ', error))
            }
            // setStudent("Thanh Sang")
        }

        getData();
    }, [])

    useEffect(() => {
        function dateTime() {
            setTimeout(() => {

                const date = new Date().toLocaleDateString();
                const time = new Date().toLocaleTimeString();

                setDate(date);
                setTime(time);

                dateTime();
            }, 1000)

        }

        dateTime();
    }, [])

    function showTime() {
        if (time) {
            return (
                <View>
                    <Text style={{ fontSize: sizeScale(22), fontWeight: "bold", color: colors.indigo }}>{date}</Text>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: sizeScale(18), fontWeight: "bold", color: colors.indigo }}>{time}</Text>
                    </View>
                </View>
            );
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <View style={{ flex: 3, flexDirection: "column" }}>
                    <View style={{ flex: 1.5, borderTopLeftRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        <Image source={{uri: user.data.avatar}} style={{width: sizeScale(120), height: sizeScale(180), borderRadius: 15}}/>
                    </View>
                    <View style={{ flex: 1.5, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        {showTime()}
                        {/* <Pressable onPress={() => {setCardVisible(!cardVisible)}}>
                            <Ionicons
                                name="card"
                                size={sizeScale(50)}
                                color={colors.indigo}
                            />
                        </Pressable> */}
                    </View>
                </View>
                <View style={{ flex: 5, borderTopRightRadius: 20, borderBottomRightRadius: 20, flexDirection: "column", justifyContent: "space-around", paddingLeft: 10, width: width / 10 }}>
                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>Mã tài khoản</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoScript}>{user.data.id}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>Họ tên</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoScript}>{user.data.first_name + ' ' + user.data.last_name}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>Quyền</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoScript}>{user.data.role}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>Số điện thoại</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoScript}>{user.data.phone}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>Giới tính</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoScript}>{user.data.sex}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.white,
        zIndex: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    view: {
        flex: 7,
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 20,
        marginTop: sizeScale(10),
        marginBottom: sizeScale(10),
        marginLeft: 5,
        marginRight: 5
    },
    modalView2: {
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        transform: [{ rotate: "-90deg" }],
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        // width: width,
        // height: height
    },
    modalView: {
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, .2)',
    },
    info: {
        // flex: 1,
        flexDirection: "row",
    },
    infoTitle: {
        fontSize: sizeScale(20),
        fontStyle: "italic"
    },
    infoScript: {
        fontSize: sizeScale(20),
        fontWeight: "bold",
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        flexShrink: 1,
        borderColor: colors.gray4,
        width: 5 * width / 9 + 1.1,
        borderRadius: 10
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
        backgroundColor: colors.yellow,
        transform: [{ rotate: "-90deg" }]
    },
    textStyle: {
        color: colors.indigo,
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    infoTitleModal: {
        fontSize: heightScale(24),
        fontStyle: "italic"
    },
    infoScriptModal: {
        fontSize: heightScale(24),
        fontWeight: "bold",
        // borderWidth: 1, 
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        flexShrink: 1,
        borderColor: colors.gray4,
        width: 5 * height / 10,
        borderRadius: 10
    },
})