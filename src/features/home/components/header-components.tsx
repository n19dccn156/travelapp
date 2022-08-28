import { Avatar } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../common/constants/color";
import { variables } from "../../../common/constants/const";


export function HeaderComponent({ uri, name }: { uri: string; name: string}) {

    const avatar: any = [];
    if (uri === "" || uri === undefined) {
        avatar.push(<Ionicons key={"login"} name="person" size={variables.width/7} style={{ color: colors.primary }} />);
    } else {
        avatar.push(<Avatar key={"logout"} size={variables.width/7} avatarStyle={{ borderRadius: 10 }} source={{ uri: uri }} />);
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', paddingTop: variables.height/15 }}>
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
            </View>
        </View>
    );
}
