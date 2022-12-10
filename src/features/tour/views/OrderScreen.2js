// import React from 'react';
// import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
// import AddressList from './AdressList';
// import ListFood from './ListFood';

// const OrderScreen = ({ onClose }) => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.padding}>
//                 <Text style={styles.title}>Your Order</Text>
//                 <Pressable style={styles.clearButton} onPress={onClose}>
//                     <Image
//                         style={styles.iconClear}
//                         resizeMode="contain"
//                         source={require('../assets/images/clear.png')}
//                     />
//                 </Pressable>
//                 <AddressList />
//             </View>
//             <View style={styles.body}>
//                 <ListFood />
//             </View>

//             <View style={styles.footer}>
//                 <Text style={styles.total}>Total: $17.50</Text>
//                 <Pressable style={styles.buttonOrder}>
//                     <Text style={styles.textOrder}>Place Order</Text>
//                     <Image source={require('../assets/images/arrow.png')} />
//                 </Pressable>
//             </View>
//         </View>
//     );
// };

// export default OrderScreen;

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//     },
//     title: {
//         fontFamily: 'CeraPro-Bold',
//         fontSize: 23,
//         marginBottom: 30,
//     },
//     padding: {
//         padding: 20,
//     },
//     container: {
//         // padding: 20,
//         backgroundColor: '#FFF',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         // flex: 1,
//         height: '80%',
//     },
//     clearButton: {
//         position: 'absolute',
//         right: 20,
//         top: 10,
//         padding: 10,
//     },
//     iconClear: {
//         width: 13,
//         height: 13,
//         color: '#000',
//     },
//     total: {
//         fontFamily: 'CeraPro-Bold',
//         fontSize: 23,
//     },
//     textOrder: {
//         fontFamily: 'CeraPro-Bold',
//         marginRight: 10,
//     },
//     buttonOrder: {
//         flexDirection: 'row',
//         alignItems: 'center',

//         backgroundColor: '#58b4c6',
//         padding: 20,
//         paddingHorizontal: 25,
//         borderRadius: 15,
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowColor: '#58b4c6',
//         shadowOpacity: 0.5,
//         shadowRadius: 4,
//     },
//     footer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         marginBottom: 68,
//     },
// });

import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ListProductOrder from './ListProductOrder';
import { useAppContext } from '../../../../App';

const sumTotal = (products) => {
    return products.reduce((sum, item) => {
        return sum + parseFloat(item.pricePerKg.replace('$', '')) * parseFloat(item.quantity);
    }, 0);
};

const OrderScreen = () => {
    const navigation = useNavigation();
    const { products } = useAppContext();
    const totalPrice = (sumTotal(products) + 2.44).toFixed(2);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.flexView}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.imageButton} source={require('../assets/images/ic-back.png')} />
                    </TouchableOpacity>
                    <View style={styles.middle}>
                        <Text style={styles.headerText}>Cart</Text>
                    </View>
                    <TouchableOpacity>
                        <Image style={styles.imageButton} source={require('../assets/images/ic-close.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.title}>Your order</Text>
                    <ListProductOrder products={products} />
                </ScrollView>
                <View style={styles.line1} />
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Delivery</Text>
                        <Text style={styles.text1}>$2.44</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <Text style={styles.text2}>TOTAL</Text>
                        <Text style={styles.text2}>${totalPrice}</Text>
                    </View>
                    <TouchableOpacity style={styles.btnCheckout}>
                        <Text style={styles.txtCheckout}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    line1: {
        height: 14,
        backgroundColor: '#F8F8F8',
        width: '100%',
        marginBottom: 20,
    },
    btnCheckout: {
        backgroundColor: '#26E698',
        padding: 14,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
    },
    txtCheckout: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text1: {
        fontSize: 11,
        color: '#959595',
    },
    text2: {
        fontSize: 15,
        color: '#1F1F1F',
        fontWeight: 'bold',
    },
    line: {
        width: '100%',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#E0E0E0',
        marginVertical: 20,
    },

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    flexView: {
        flex: 1,
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    imageButton: {
        width: 36,
        height: 36,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    middle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#121212',
        marginTop: 27,
    },

    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
    },
});
