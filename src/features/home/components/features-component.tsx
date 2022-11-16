import { Icon } from '@rneui/themed/dist/Icon';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { variables } from '../../../common/constants/const';

export function FeaturesComponent({ navigation }: { navigation: any }) {
    return (
        <View>
            <Text style={{ fontSize: variables.width / 10, paddingLeft: 20, color: '#2c3e50', fontWeight: 'bold' }}>
                Danh Mục
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Grid>
                    <Row style={{ height: variables.width / 4 }}>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Tour')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: '#f1f2f6',
                                            borderRadius: variables.width / 14,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="earth-outline"
                                            size={variables.width / 10}
                                            style={{
                                                color: '#ff5868',
                                                textAlign: 'center',
                                                flex: 1,
                                                justifyContent: 'center',
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: '#2c3e50', fontWeight: 'bold', paddingTop: 5 }}>
                                    Du Lịch
                                </Text>
                            </View>
                        </Col>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Hotel')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: '#f1f2f6',
                                            borderRadius: variables.width / 14,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="business-outline"
                                            size={variables.width / 10}
                                            style={{ color: '#ff5868' }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: '#2c3e50', fontWeight: 'bold', paddingTop: 5 }}>
                                    Khách Sạn
                                </Text>
                            </View>
                        </Col>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Rental')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: '#f1f2f6',
                                            borderRadius: variables.width / 14,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="receipt-outline"
                                            size={variables.width / 10}
                                            style={{ color: '#ff5868' }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: '#2c3e50', fontWeight: 'bold', paddingTop: 5 }}>
                                    Cho Thuê
                                </Text>
                            </View>
                        </Col>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('ListFood')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: '#f1f2f6',
                                            borderRadius: variables.width / 14,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="fast-food-outline"
                                            size={variables.width / 10}
                                            style={{ color: '#ff5868' }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: '#2c3e50', fontWeight: 'bold', paddingTop: 5 }}>
                                    Đặt Đồ Ăn
                                </Text>
                            </View>
                        </Col>
                    </Row>
                    <Row style={{ height: variables.width / 4 }}>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: '#f1f2f6',
                                            borderRadius: variables.width / 14,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="partly-sunny-outline"
                                            size={variables.width / 10}
                                            style={{
                                                color: '#ff5868',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                flex: 1,
                                            }}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#2c3e50', fontWeight: 'bold', paddingTop: 5 }}>
                                        Thời Tiết
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </Col>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: '#f1f2f6',
                                            borderRadius: variables.width / 14,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="map-outline"
                                            size={variables.width / 10}
                                            style={{ color: '#ff5868' }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: '#2c3e50', fontWeight: 'bold', paddingTop: 5 }}>
                                    Khám Phá
                                </Text>
                            </View>
                        </Col>
                        <Col>
                            <View
                                style={{ height: variables.width / 4, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
                                    <View
                                        style={{
                                            height: variables.width / 7,
                                            width: variables.width / 7,
                                            backgroundColor: '#f1f2f6',
                                            borderRadius: variables.width / 14,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Ionicons
                                            name="boat-outline"
                                            size={variables.width / 10}
                                            style={{ color: '#ff5868' }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, color: '#2c3e50', fontWeight: 'bold', paddingTop: 5 }}>
                                    Lịch Tàu
                                </Text>
                            </View>
                        </Col>
                    </Row>
                </Grid>
            </View>
        </View>
    );
}
