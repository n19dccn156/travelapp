import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import style from '../../style/Home/style';
import { TextInput } from 'react-native-gesture-handler';

function EditProfileScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.navigate('ProfileSceen')}
                />
                <Text style={style.headerTitle}>Sửa thông tin cá nhân</Text>
            </View>
            <View>
                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Họ tên</Text>
                <TextInput placeholder="Nhập họ tên vào đây" style={{ borderWidth: 1, borderRadius: 10, margin: 10 }} />
            </View>
            <View>
                <Text style={{ color: COLORS.dark, fontWeight: 'bold', margin: 10 }}>Số điện thoại</Text>
                <TextInput
                    placeholder="Nhập số điện thoại vào đây"
                    style={{ borderWidth: 1, borderRadius: 10, margin: 10 }}
                />
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    margin: 20,
                    borderRadius: 15,
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'center',
                }}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DetailsScreen')}
            >
                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Sửa thông tin cá nhân</Text>
            </TouchableOpacity>
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
});
export default EditProfileScreen;
