import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, Alert, Pressable, StyleSheet, Button, SafeAreaView, StatusBar } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../common/constants/colors";
import { sizeScale, variables } from "../../../common/constants/const";
import { FeaturesComponent } from "../components/features-component";
import { HeaderComponent } from "../../../common/components/header-components";
import SearchComponent from "../components/search-component";

type objCheckin = {
    address: string,
    id: number
    imgUrl: string,
    name: string
};

export function HomeScreen({navigation}: {navigation: any}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [listImgs, setListImgs] = useState([{url: ''}]);
    const [listTopCheckin, setListTopCheckin] = useState<objCheckin[]>([]);
    const list: any = []
    const listImg: any = []
    const [index, setIndex] = useState(0);

    // fetch API top checkin
    useEffect(() => {
        async function fetchTest() {
            const url = 'https://api.jsonbin.io/v3/b/62ff2d93a1610e638605573e';
            const response = await fetch(url)
            if(response.status === 200){
                const resJSON = await response.json();
                const {record, metadata} = resJSON;

                record.topCheckin.map((data: any, index: number) => {
                    list.push(
                        <View style={{ paddingLeft: 20, paddingTop: 20}}>
                        <TouchableOpacity onPress={() => setAll(data.imgUrl, index)}>
                            <Image
                                style={{ borderRadius: 15, width: variables.width*3/5, height: 270 }}
                                source={{ uri: data.imgUrl}} />
                            <Text style={{fontSize: 30, position: "absolute", paddingLeft: 20, paddingTop: 200, textAlignVertical: "bottom", color: "#FFFFFF", fontWeight: "bold"}}>{data.name}</Text>
                            <Text style={{fontSize: 20, position: "absolute", paddingLeft: 20, paddingTop: 235, textAlignVertical: "bottom", color: "#FFFFFF", fontWeight: "bold"}}>
                                <Ionicons name="location-outline" size={20}/>
                                &nbsp;
                                {data.address}
                            </Text>
                        </TouchableOpacity>
                        </View>
                    )
                    listImg.push({url: data.imgUrl})
                })

                setListTopCheckin(record.topCheckin)
                setListImgs(listImg)
            }
        }
        fetchTest();
    }, []);

    // let modal = false; detail img
    let setAll = (uri: string, index: number) => {
        setIndex(index);
        setModalVisible(!modalVisible)
    }

    const styles = StyleSheet.create({
        modalView: {
            position: "absolute",
            padding: 40,
        },
    });

    return(
        <ScrollView>
        <SafeAreaView style={{backgroundColor: "white"}}>
            <StatusBar
                // animated={true}
                backgroundColor={colors.primary}
                barStyle={"light-content"}
                hidden={false}
            />
            <HeaderComponent numberNotifi="2" name="Sang" navigation={navigation}/>
            {/* <View style={{paddingTop: 10}}>
                <SearchComponent/>
            </View> */}

            <View style={{paddingTop: 20}}>
                <FeaturesComponent navigation={navigation}/>
            </View>

            {/* -------- Checkin header------*/}
            <View style={{paddingTop: 20, flexDirection: "row"}}>
                <Text style={{flex: 3, textAlign: "left", fontSize: sizeScale(30), paddingLeft: 20, color: "#2c3e50", fontWeight: "bold"}}>Top Checkin</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DiscoveryStack') }>
                    <Text style={{flex: 1, textAlign: "right", fontSize: sizeScale(20), fontWeight: "bold", color: colors.primary}}>
                        Tất cả  
                        <Ionicons name="chevron-forward-outline" size={20}/>
                        <Text style={{fontSize: sizeScale(30), color: "#FFFFFF"}}>.</Text>
                    </Text>
                </TouchableOpacity>
            </View>

            {/* list img checkin */}
            <ScrollView horizontal={true}>
                {listTopCheckin.map((data, index) => {
                    return (
                        <View key={index} style={{ paddingLeft: 20, paddingTop: 10}}>
                        <TouchableOpacity key={index} onPress={() => setAll(data.imgUrl, index)}>
                            <Image
                                style={{ borderRadius: 15, width: variables.width/2, height: variables.width/2 }}
                                source={{ uri: data.imgUrl}} />
                            <Text numberOfLines={1} style={{fontSize: 25, position: "absolute", paddingLeft: 20, paddingTop: 125, textAlignVertical: "bottom", color: "#FFFFFF", fontWeight: "bold"}}>{data.name}</Text>
                            <Text numberOfLines={1} style={{fontSize: 16, position: "absolute", paddingLeft: 20, paddingTop: 160, textAlignVertical: "bottom", color: "#FFFFFF", fontWeight: "bold"}}>
                                <Ionicons name="location-outline" size={20}/>
                                &nbsp;
                                {data.address}
                            </Text>
                        </TouchableOpacity>
                        </View>
                    )
                })}
                {/* <ImgClick data={listTopCheckin}/> */}
            </ScrollView>

            {/* -------- Hotel header------*/}
            <View style={{paddingTop: 20, flexDirection: "row"}}>
                <Text style={{flex: 3, textAlign: "left", fontSize: sizeScale(30), paddingLeft: 20, color: "#2c3e50", fontWeight: "bold"}}>Khách sạn</Text>
                <TouchableOpacity onPress={() => navigation.navigate('HotelStack')}>
                    <Text style={{flex: 1, textAlign: "right", fontSize: sizeScale(20), fontWeight: "bold", color: colors.primary}}>
                        Tất cả  
                        <Ionicons name="chevron-forward-outline" size={20}/>
                        <Text style={{fontSize: sizeScale(30), color: "#FFFFFF"}}>.</Text>
                    </Text>
                </TouchableOpacity>
            </View>

            {/* list img checkin */}
            <ScrollView horizontal={true}>
                <View style={{ paddingLeft: 20}}></View>
                {listTopCheckin.map((data, index) => {
                    return (
                        <View key={index} style={{paddingTop: 10}}>
                        <TouchableOpacity key={index} onPress={() => setAll(data.imgUrl, index)}>
                            <Image
                                style={{ borderRadius: 15, width: variables.width/2, height: variables.width/2, marginRight: 20 }}
                                source={{ uri: data.imgUrl}} />
                            <Text numberOfLines={1} style={{fontSize: 25, position: "absolute", paddingLeft: 20, paddingTop: 125, textAlignVertical: "bottom", color: "#FFFFFF", fontWeight: "bold"}}>{data.name}</Text>
                            <Text numberOfLines={1} style={{fontSize: 16, position: "absolute", paddingLeft: 20, paddingTop: 160, textAlignVertical: "bottom", color: "#FFFFFF", fontWeight: "bold"}}>
                                <Ionicons name="location-outline" size={20}/>
                                &nbsp;
                                {data.address}
                            </Text>
                        </TouchableOpacity>
                        </View>
                    )
                })}
                {/* <ImgClick data={listTopCheckin}/> */}
            </ScrollView>
            <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => {Alert.alert("Modal has been closed."); setModalVisible(!modalVisible);}}>
                <ImageViewer imageUrls={listImgs} index={index} style={{height: variables.width, paddingStart: 0, paddingEnd: 0}}/>
                <View style={styles.modalView}>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons name="close-circle" size={variables.width/10} style={{color: "white"}}/>
                    </Pressable>
                </View>
            </Modal>
        </SafeAreaView>
        </ScrollView>
    );

}