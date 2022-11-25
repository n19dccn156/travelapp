import { Icon } from '@rneui/themed';
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { HeaderComponent } from '../../../common/components/header-components';
import COLORS from '../const/colors';
import hotels from '../const/hotels';
import style from '../const/styles';

const {width} = Dimensions.get('screen');
// const cardWidth = width / 1.8;

const HotelScreen = ({navigation})=> {
    const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const CategoriesList = ()=>{
        return (
            <View style={style.categoryListContainer}>
                {categories.map((item, index)=> (
                    <TouchableOpacity key= {index}  activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
                        <View>
                            <Text style = {{...style.categoryListText, color: selectedCategoryIndex == index? COLORS.primary:COLORS.grey}}>{item}</Text>
                            {selectedCategoryIndex == index && (
                            <View style ={{height: 3, width: 30, backgroundColor: COLORS.primary, marginTop: 2}}/>
                            )}
                        </View>
                    </TouchableOpacity>
                ))}
        </View>
        );
    }
    const Card = ({hotel, index}) => {
        return <View style = {{...style.card}}>
            <View style = {style.saleTag}>
                <Text style={{color: COLORS.white, fontSize:15, fontWeight: 'bold'}}>-{hotel.sales}</Text>
                </View>
            <Image source={hotel.image} style={style.cardImage}/>
        </View>
    };
    const BottomFlatList =() => {
        return (
            <FlatList
                        data ={hotels}
                        contentContainerStyle ={{paddingLeft: 20, paddingVertical:30}}
                        // showHorizontalScrollIndicator = {false}
                        renderItem={({item, index}) => <Card hotel={item} index = {index}/>} />
        )
    };
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <StatusBar barStyle={'light-content'} />
            {/* <HeaderComponent numberNotifi={"3"} name="Sang" navigation={navigation}/> */}
            {/* <View style={style.header} >
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {{marginLeft:25,fontSize: 30, fontWeight: 'bold', color: COLORS.white}}>
                        Khách sạn Phú Quốc
                    </Text>
                </View>
                <Icon name = "hotel" size = {35} color = {COLORS.white}/>
            </View> */}
            {/* <ScrollView showsVerticalScrollIndicator= {false}> */}
                <View style= {style.searchInputContainer}>
                    <Icon name = "search" size = {25} style={{marginLeft: 10}}/>
                    <TextInput placeholder='Nhập tên khách sạn cần tìm' style ={{fontSize: 15, paddingLeft: 5}}/>
                </View>
                <CategoriesList/>
                 <View>
                    <FlatList
                        data ={hotels}
                        contentContainerStyle ={{paddingLeft: 20, paddingVertical:30}}
                        // showHorizontalScrollIndicator = {false}
                        renderItem={({item, index}) => <Card hotel={item} index = {index}/>}
                        ListFooterComponent = {<BottomFlatList/>}
                    />
                </View>
            {/* </ScrollView> */}
        </SafeAreaView>


    )
}
export default HotelScreen;