import React, {useState, useEffect} from 'react';
import {Rating} from 'react-native-ratings';
import COLORS from '../../const/colors';
import style from '../../const/styles';
import { View,
    Text,
    Button,
    TouchableOpacity
        } from 'react-native'

export default function StarRating() {
  return (
    <View style={{flex:1}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={style.h1}>
                        Nhận xét
                    </Text>
                </View>
                <View>
                        <View style = {{marginLeft:10, alignItems:'center'}}>
                            <Text style={{fontSize: 30, color: COLORS.orange, fontWeight:'bold'}}>
                                {'5.0'}
                            </Text>
                            <Text style={{fontSize: 15, color: COLORS.dark, fontWeight:'bold'}}>
                                Trên 5
                            </Text>
                        </View>
                <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity
                    underlayColor={COLORS.white}
                    activeOpacity={0.9}
                    onPress={() => {alert('3 Đánh giá!')}}
                    >
                        <Text style={{fontSize:14, marginLeft: 10, color:COLORS.primary}}>
                        (3 đánh giá)
                        </Text>
                    </TouchableOpacity>
                </View>

                </View>
            </View>
  )
}