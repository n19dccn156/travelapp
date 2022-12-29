import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Switch, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button, SafeAreaView } from "react-native";
import { height, heightScale, sizeScale, variables, width } from "../../../../common/constants/const";
import { colors } from "../../../../common/constants/colors";
import { useDispatch, useSelector } from "react-redux";

export function ProfileAccountScreen({route} : {route : any}) {
    // const reset = useSelector((state: any) => {return state.render})
    const dispatch = useDispatch();
    useEffect(() => {
        if (route.params?.id) {
            console.log(route.params?.id);
        }
        if (route.params?.isActivity) {
            console.log(route.params?.isActivity)
        }
    }, [route.params?.id, route.params?.isActivity]);
    const data = {
        status: "",
        message: "",
        data: {
            id: "08ca214d-85db-40b8-a805-eccc9f11da7e",
            role: "BUSINESS_PARTNER_SERVICE",
            username: "thanhsang",
            password: "A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3",
            firstName: "Nguyễn",
            lastName: "Thanh Sang",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87Gr4eFO7Pt2pE8oym4dxXnxGZYL2Pl_N5A&usqp=CAU",
            phone: "0334428222",
            linkFacebook: "https://www.facebook.com/profile.php?id=100007154776492",
            sex: "nam",
            activity: true,
            email: ""
        }
    }
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [user, setUser] = useState(data)
    const [isActivity, setIsActivity] = useState(route.params.isActivity)

    const changeActivity = async () => {
        const idCurrent = await AsyncStorage.getItem("@userid")
        if(idCurrent === user.data.id) {
            Alert.alert("Thông Báo", "Không thể sửa bản thân", [{ text: "Đồng ý" }])
            return;
        }
        const url = variables.host2+`/api/v1/memberships/${user.data.id}/activity`
        console.log(url)
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(response => {
            if(response.status === "success") {
                user.data.activity = !user.data.activity
                setUser(user)
                dispatch({"type" : "reset"})
                Alert.alert("Thông Báo", "Sửa thành công", [{ text: "Đồng ý" }])
            } else {
                Alert.alert("Thông Báo", "Sửa thất bại", [{ text: "Đồng ý" }])
            }
        })
        .catch(error => {console.log(error)})
        setIsActivity(!isActivity)
        // route.params.isActivity = !route.params?.isActivity
    }

    useEffect(() => {
        function getData() {
            if (route.params?.id !== "" && route.params?.id !== undefined && route.params?.id !== null) {

                fetch(variables.host2 + "/api/v1/memberships/" + route.params?.id, {
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
        }
        getData();
    }, [route.params?.id, route.params?.isActivity])

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
    }, [route.params?.id, route.params?.isActivity])

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

    const activity = <View style={{backgroundColor: colors.green, marginLeft: 10, height: 20, width: 20, borderRadius: 10}}/>
    const stop = <View style={{backgroundColor: colors.red, marginLeft: 10, height: 20, width: 20, borderRadius: 10}}/>
  
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <View style={{ flex: 3, flexDirection: "column" }}>
                    <View style={{ flex: 1.5, borderTopLeftRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        <Image source={{uri: user.data.avatar}} style={{width: sizeScale(120), height: sizeScale(180), borderRadius: 15}}/>
                    </View>
                    <View style={{ flex: 0.5, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        {showTime()}
                    </View>
                    <View style={{ flex: 0.5, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        {user.data.activity ? activity : stop}
                        <Switch
                            trackColor={{ false: "#767577", true: "green" }}
                            thumbColor={user.data.activity ? "#767577" : "white"}
                            ios_backgroundColor="green"
                            onValueChange={changeActivity}
                            value={user.data.activity}
                        />
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
                        <Text style={styles.infoScript}>{user.data.firstName + ' ' + user.data.lastName}</Text>
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