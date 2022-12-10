import { Icon } from '@rneui/themed/dist/Icon';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../common/constants/colors';
// import colors from '../../../common/constants/colors';
import { sizeScale, variables } from '../../../common/constants/const';

export function FeaturesComponent({ navigation }: { navigation: any }) {
    return (
        <View>
            {/* <Text style={{ fontSize: variables.width / 10, paddingLeft: 20, color: '#2c3e50', fontWeight: 'bold' }}>
                Danh Mục
            </Text> */}
            <View style={{ flexDirection: 'row', paddingTop: sizeScale(30) }}>
                <Grid>
                    <Row style={{ height: variables.width / 4 }}>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('ServiceScreen')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: colors.gray4,
                                            borderRadius: variables.width / 28,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="earth-outline"
                                            size={variables.width / 10}
                                            style={{
                                                color: colors.primary,
                                                textAlign: 'center',
                                                flex: 1,
                                                justifyContent: 'center',
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: colors.primary, fontWeight: 'bold', paddingTop: 5 }}>
                                    Dịch vụ
                                </Text>
                            </View>
                        </Col>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('HotelStack')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: colors.gray4,
                                            borderRadius: variables.width / 28,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="business-outline"
                                            size={variables.width / 10}
                                            style={{ color: colors.primary }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: colors.primary, fontWeight: 'bold', paddingTop: 5 }}>
                                    Khách Sạn
                                </Text>
                            </View>
                        </Col>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('FoodStack')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: colors.gray4,
                                            borderRadius: variables.width / 28,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="fast-food-outline"
                                            size={variables.width / 10}
                                            style={{ color: colors.primary }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: colors.primary, fontWeight: 'bold', paddingTop: 5 }}>
                                    Đặt Đồ Ăn
                                </Text>
                            </View>
                        </Col>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('DiscoveryStack')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: colors.gray4,
                                            borderRadius: variables.width / 28,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="map-outline"
                                            size={variables.width / 10}
                                            style={{ color: colors.primary }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: colors.primary, fontWeight: 'bold', paddingTop: 5 }}>
                                    Khám Phá
                                </Text>
                            </View>
                        </Col>
                    </Row>       
                </Grid>
            </View>
        </View>
    );
}
