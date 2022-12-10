// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList, TextInput } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import COLORS from '../consts/colors';
import style from '../style/Home/style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchScreen = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* <SearchBar
                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    placeholder="Type Here..."
                    value={search}
                
                /> */}
                <View style={styles.header}>
                    <Icon
                        name="arrow-back"
                        size={28}
                        color={COLORS.white}
                        onPress={() => navigation.navigate('HomeScreen')}
                    />
                    <Text style={style.headerTitle}>Tìm kiếm</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon style={{ marginTop: 10 }} name="search" size={28} />
                        <TextInput placeholder="Tìm kiếm dịch vụ" style={{ color: COLORS.grey }}></TextInput>
                    </View>
                    <AntDesign name="filter" size={28} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 100 }}>
                    <Text>Gần đây</Text>
                    <Text>Xóa tất cả</Text>
                </View>
                <Text style={{ marginLeft: 30 }}>_______________________________________________</Text>

                {/* <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                /> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    itemStyle: {
        padding: 10,
    },
    inputContainer: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 10,
        justifyContent: 'space-between',
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
    },
});

export default SearchScreen;
