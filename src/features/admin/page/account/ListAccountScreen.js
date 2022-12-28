import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import axios from "axios";
import { variables } from "../../../../common/constants/const";
import { colors } from "../../../../common/constants/colors";

export function ListAccountScreen({navigation}) {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios.get(variables.host2+`/api/v1/memberships/?_role=ALL&_page=${currentPage}&_size=5`)
      .then(res => {
        // console(...res.data.data.content.activity)
        //setUsers(res.data.results);
        setUsers([...users, ...res.data.data.content]);
        // setIsLoading(false);
      });
  };
  const activity = <View style={{backgroundColor: colors.green, marginLeft: 10, height: 20, width: 20, borderRadius: 10}}/>
  const stop = <View style={{backgroundColor: colors.red, marginLeft: 10, height: 20, width: 20, borderRadius: 10}}/>

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
        {item.activity ? activity : stop}
        {/* <View style={{backgroundColor: colors.red, marginLeft: 10, height: 20, width: 20, borderRadius: 10}}/> */}
        <Image style={styles.itemImageStyle} source={{ uri: item.avatar }} />
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.txtNameStyle}>{`${item.firstName} ${item.lastName}`}</Text>
          <Text style={styles.txtEmailStyle}>{item.role}</Text>
          <Text style={styles.txtEmailStyle}>{item.email}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </>
  );
};
    

const styles = StyleSheet.create({
    itemWrapperStyle: {
      flexDirection: "row",
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderColor: "#ddd",
    },
    itemImageStyle: {
      width: 100,
      height: 100,
      marginRight: 16,
    },
    contentWrapperStyle: {
      justifyContent: "space-around",
    },
    txtNameStyle: {
      fontSize: 16,
    },
    txtEmailStyle: {
      color: "#777",
    },
    loaderStyle: {
      marginVertical: 16,
      alignItems: "center",
    },
});