import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { SafeAreaView, StatusBar, View, Text, ScrollView, TextInput, Image, FlatList } from 'react-native';
import COLORS from '../../consts/colors';
import places from '../../consts/places';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ListCategories from './ListCategories';
import style from '../../style/Home/style';
import MyButton from './MyButton';
import MyCard from './MyCard';

const HomeServiceScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />

            <View style={style.header}>
                <Icon
                    name="sort"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
                />
                <Icon
                    name="notifications-none"
                    size={28}
                    color={COLORS.white}
                    onPress={() => navigation.getParent('RightDrawer').openDrawer()}
                />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ backgroundColor: COLORS.primary, height: 120, paddingHorizontal: 20 }}>
                    <View>
                        <Text style={style.headerTitle}>Trải nghiệm</Text>
                        <Text style={style.headerTitle}>dịch vụ tiện ích</Text>
                        <View style={style.inputContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ marginTop: 10 }} name="search" size={28} />
                                <TextInput placeholder="Tìm kiếm dịch vụ" style={{ color: COLORS.grey }}></TextInput>
                            </View>
                            <AntDesign name="filter" size={28} />
                        </View>
                    </View>
                </View>
                <View style={{ paddingTop: 30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: 24,
                            paddingLeft: 20,
                            color: '#2c3e50',
                            fontWeight: 'bold',
                        }}
                    >
                        Các dịch vụ
                    </Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('ListScreen')}>
                        <Text
                            style={{
                                textAlign: 'right',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#0097e6',
                            }}
                        >
                            Tất cả
                            <Ionicons name="chevron-forward-outline" size={20} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ListCategories />
                </View>

                <View style={{ paddingTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: 24,
                            paddingLeft: 20,
                            color: '#2c3e50',
                            fontWeight: 'bold',
                        }}
                    >
                        Dịch vụ phổ biến
                    </Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('ListScreen')}>
                        <Text
                            style={{
                                textAlign: 'right',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#0097e6',
                            }}
                        >
                            Tất cả
                            <Ionicons name="chevron-forward-outline" size={20} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <FlatList
                        contentContainerStyle={{ margin: 10 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <MyButton categories={item} />}
                    />
                </View>
                <View>
                    <FlatList
                        contentContainerStyle={{ paddingLeft: 20 }}
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <MyCard place={item} navigation={navigation} />}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeServiceScreen;
