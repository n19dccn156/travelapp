import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
export function HomeManage({ navigation }: { navigation: any }) {
    const listView = [
        {
            name: 'Dịch Vụ cho thuê',
            sizeName: 22,
            icon: 'log-out',
            sizeIcon: 50,
            color: '',
            navigation: 'HomeManage',
        },
        {
            name: 'Khách Sạn',
            sizeName: 22,
            icon: 'log-out',
            sizeIcon: 50,
            color: '',
            navigation: 'ManageHomeFood',
        },
        {
            name: 'Nhà hàng',
            sizeName: 22,
            icon: 'log-out',
            sizeIcon: 50,
            color: '',
            navigation: 'ManageFood',
        },
    ];
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity   onPress={() => {
                            navigation.navigate('AccountScreen');
                        }}><Text>ẤN</Text></TouchableOpacity>
            </View>
            {listView.map((element, index) => {
                return (
                    <TouchableOpacity
                        style={style.item}
                        key={index}
                        onPress={() => {
                            navigation.navigate(element.navigation);
                        }}
                    >
                        <Text style={style.text}>{element.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    item: {
        height: 80,
        borderWidth: 0.5,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
    },
    header:{
        height:50,
        width:'100%',
    }
});
