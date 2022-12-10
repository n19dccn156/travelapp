import { Avatar, Icon, ListItem } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../common/constants/colors";
import { sizeScale,width } from "../../../common/constants/const";

export function DevelopInfoScreen({navigation} : {navigation: any}) {



    return(
        <View style={{paddingTop: 50}}>
            <View style={{backgroundColor: colors.primary, height: 250, width: width}}>
                <Text style={{color: colors.gray1, fontSize: sizeScale(24), textAlign: "center"}}>Phân tích thiết kế hệ thống</Text>
                <Text style={{color: colors.gray1, fontSize: sizeScale(16), textAlign: "center"}}>GVHD: Huỳnh Lưu Quốc Linh</Text>
                <Text style={{paddingTop: 10, color: colors.gray1, fontSize: sizeScale(16), textAlign: "center"}}>Thành viên trong nhóm</Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={{flex: 2, marginLeft: 30, color: colors.gray1, fontSize: sizeScale(16), textAlign: "left"}}>Nguyễn Bảo Chính</Text>
                    <Text style={{flex: 1, marginRight: 30, color: colors.gray1, fontSize: sizeScale(16), textAlign: "right"}}>N19DCCN024</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={{flex: 2, marginLeft: 30, color: colors.gray1, fontSize: sizeScale(16), textAlign: "left"}}>Phan Văn Hiểu</Text>
                    <Text style={{flex: 1, marginRight: 30, color: colors.gray1, fontSize: sizeScale(16), textAlign: "right"}}>N19DCCN056</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={{flex: 2, marginLeft: 30, color: colors.gray1, fontSize: sizeScale(16), textAlign: "left"}}>Lại Đức Mạnh</Text>
                    <Text style={{flex: 1, marginRight: 30, color: colors.gray1, fontSize: sizeScale(16), textAlign: "right"}}>N19DCCN106</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={{flex: 2, marginLeft: 30, color: colors.gray1, fontSize: sizeScale(16), textAlign: "left"}}>Nguyễn Thanh Sang</Text>
                    <Text style={{flex: 1, marginRight: 30, color: colors.gray1, fontSize: sizeScale(16), textAlign: "right"}}>N19DCCN156</Text>
                </View>
                <View style={{flexDirection: "row", paddingTop: 20}}>
                    <Ionicons
                        name="logo-google"
                        size={sizeScale(40)}
                        style={{
                            color: colors.red,
                            textAlign: 'center',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    />
                    <Ionicons
                        name="logo-facebook"
                        size={sizeScale(40)}
                        style={{
                            color: colors.light,
                            textAlign: 'center',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    />
                    <Ionicons
                        name="logo-react"
                        size={sizeScale(40)}
                        style={{
                            color: colors.orange,
                            textAlign: 'center',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    />
                    <Ionicons
                        name="logo-github"
                        size={sizeScale(40)}
                        style={{
                            color: colors.white,
                            textAlign: 'center',
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    />
                </View>

            </View>
        </View>
    );
}