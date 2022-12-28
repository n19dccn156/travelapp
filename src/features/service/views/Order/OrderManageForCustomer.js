import React, { useEffect, useState, createContext } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import COLORS from '../../consts/colors';
import TopTabOrderForCustomer from '../../navigations/TopTabOrderForCustomer';
import { getOrderByIdUserAndState, getOrderByIdUserAndStateForPage } from '../../services/Order/getData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';


function OrderManageForCustomer({navigation, route}) {
    const logined = useSelector((state) => {state.logined})
    const dispatch = useDispatch()
    // const [idUser, setIdUser] = useState('7055dcb1-67ce-4c5f-bf51-03863f7e5778');
    const idUser = AsyncStorage.getItem('@userid')
    const reset = useSelector((state) => {return state.render})

    useEffect(() => {
        async function check() {
            const userRole = await AsyncStorage.getItem('@roleid');
            // console.log(logined)
            // console.log(userRole)
    
            if(logined === false ) {
                navigation.navigate('Login')
            }
            if(userRole !== "CUSTOMER" ) {
                // console.log('login')
                Alert.alert('Bạn không phải là khách hàng', 'Bạn có muốn đăng xuất ?', [
                    {
                        text: 'Hủy',
                        onPress: () => {navigation.navigate('HomeScreen')},

                        style: 'destructive',
                    },
                    {
                        text: 'Đồng ý',
                        onPress: () => {
                            setModalVisible(!modalVisible);
                            AsyncStorage.removeItem('@userid');
                            AsyncStorage.removeItem('@roleid');
                            setRole('');
                            dispatch({ type: 'logout' });
                            setTimeout(() => {
                                setModalVisible(modalVisible);
                                navigation.navigate({
                                    name: 'Login',
                                    params: { userid: '' },
                                    merge: true,
                                });
                            }, 1000);
                        },
                        style: 'default',
                    },
                ]);
            }
            // setIdUser(userid)
        }

        check()
    }, [reset])


    const listState = ['XACNHAN', 'THANHCONG', 'DAHUY', 'HOANTHANH'];
    useEffect(() => {
        AsyncStorage.getItem('@userid').then((userId) => {    
            console.log(userId)
            const a =  getOrderByIdUserAndState(userId, 'XACNHAN');
            const b = getOrderByIdUserAndState(userId, 'THANHCONG');
            const c= getOrderByIdUserAndState(userId, 'DAHUY');
            const d=  getOrderByIdUserAndState(userId, 'HOANTHANH');
            Promise.all([a,b,c,d]).then((value)=>{
                let list = [];
                value.forEach(element=>{
                    list=[...list,...element.data.content]
                })
                dispatch({ type: 'ADD_LIST_ORDER', payload: list });
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{    
            })
        });
       
    }, [1]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />
            {/* <View style={{height:50,width:'100%',backgroundColor:COLORS.primary}}>
                <Icon name="arrow-back" size={28} color={COLORS.white} style={{left:0}} onPress={() => navigation.navigate('HomeTab')} />
            </View> */}
            <TopTabOrderForCustomer />
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
export default connect((state) => {
    return {
        state: state,
    };
})(OrderManageForCustomer);
