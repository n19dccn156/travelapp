import { Avatar, Icon } from "@rneui/themed";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants/colors";
import style from "../../features/service/style/Home/style";


export function HeaderComponent({ numberNotifi, name, navigation }: {numberNotifi: String; name: String; navigation: any}) {

    // const avatar = [];
    // if (uri === "" || uri === undefined) {
    //     avatar.push(<Ionicons key={"login"} name="person" size={variables.width/7} style={{ color: colors.primary }} />);
    // } else {
    //     avatar.push(<Avatar key={"logout"} size={variables.width/7} avatarStyle={{ borderRadius: 10 }} source={{ uri: uri }} />);
    // }
    return (
        <View>
            {/* <View style={{ flexDirection: 'row', paddingTop: variables.height/15 }}>
                <View style={{ paddingLeft: 10 }}>
                    <View style={{ backgroundColor: "#f1f2f6", borderRadius: 5 }}>
                        {avatar}
                    </View>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <Text
                        style={{
                            // paddingTop: 60,
                            paddingLeft: 10,
                            fontSize: variables.width/17,
                        }}>
                        Hi,&nbsp;
                        <Text
                            style={{
                                fontSize: variables.width/13,
                                color: colors.primary,
                            }}>
                            {name}
                        </Text>
                    </Text>
                    <Text
                        style={{
                            paddingLeft: 10,
                            fontSize: variables.width/23,
                            color: colors.secondary,
                            fontWeight: "bold"
                        }}>
                        Chào mừng bạn đến đảo Phú Quý
                    </Text>
                </View>
            </View> */}
            <View style={{ backgroundColor: colors.primary, height: 170, paddingHorizontal: 20, paddingTop: 20 }}>
                    <View>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 2, flexDirection: "column"}}>
                                <Text style={style.headerTitle}>Chào mừng, <Text style={{fontSize: 35}}>{name}</Text></Text>
                                <Text style={style.headerTitle}>đến đảo Phú Quý</Text>
                            </View>
                            <TouchableOpacity style={{flex: 1, flexDirection: "column"}} onPress={() => navigation.navigate('NotificationStack')}>
                                <View>
                                    <Ionicons name="notifications-circle" size={60} color={colors.white} style={{alignSelf: "flex-end", paddingTop: 15}} />
                                    <Badge value={numberNotifi} badgeStyle={{width: 30, height: 20}} textStyle={{fontSize: 15}} status="error" containerStyle={{ position: 'absolute', top: 15, right: 0}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                
                        <View style={style.inputContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                                <View style={{ flexDirection: 'row'}}>
                                    <View style={{ flexDirection: 'row'}}>
                                        {/* <Icon style={{ marginTop: 5 }} name="search" size={28} /> */}
                                        <Ionicons name="search" style={{ marginTop: 5 }} size={30}/>
                                        <Text style={{ color: colors.gray2, paddingLeft: 20, marginTop: 10, fontSize: 15 }}>Tìm kiếm ....</Text>
                                    </View>
                                    <AntDesign style={{paddingLeft: 150, marginTop: 5 }} name="filter" size={28}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </View>
    );
}
