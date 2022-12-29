import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, Pressable, TouchableOpacity, ActivityIndicator, StatusBar } from "react-native";
import axios from "axios";
import { variables } from "../../../../common/constants/const";
import { colors } from "../../../../common/constants/colors";
import { useDispatch, useSelector } from "react-redux";

export function ListAccountScreen({navigation}) {
const reset = useSelector((state) => {return state.render})
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  console.log(reset)
  const getUsers = () => {
    // setIsLoading(true);
    axios.get(variables.host2+`/api/v1/memberships/?_role=ALL&_page=${currentPage}&_size=5`)
      .then(res => {
        // console(...res.data.data.content.activity)
        //setUsers(res.data.results);
        setTotalPage(res.data.data.totalPages)
        setUsers([...users, ...res.data.data.content]);
        // setIsLoading(false);
      });
  };
  const activity = <View style={{backgroundColor: colors.green, marginLeft: 10, height: 20, width: 20, borderRadius: 10}}/>
  const stop = <View style={{backgroundColor: colors.red, marginLeft: 10, height: 20, width: 20, borderRadius: 10}}/>

  function press (id, activity) {
    navigation.navigate('ProfileAccountScreen', {id: id, isActivity: activity})
    // console.log("CLick -> ", id)
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        {/* <View onpress={() => press(item.id)}> */}
        <TouchableOpacity style={styles.itemWrapperStyle} onPress={() => {press(item.id, item.activity)}}>
        {item.activity ? activity : stop}
          {/* <View style={{backgroundColor: colors.red, marginLeft: 10, height: 20, width: 20, borderRadius: 10}}/> */}
          <Image style={styles.itemImageStyle} source={{ uri: item.avatar }} />
          <View style={styles.contentWrapperStyle}>
            <Text style={styles.txtNameStyle}>{`${item.firstName} ${item.lastName}`}</Text>
            <Text style={styles.txtEmailStyle}>{item.role}</Text>
            <Text style={styles.txtEmailStyle}>{item.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    setCurrentPage(0)
    setUsers([])
  }, [reset]);

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };

  const loadMoreItem = () => {
    if(currentPage === totalPage - 1) {
      setIsLoading(false)
      return;
    }
    if(currentPage < totalPage-1) setCurrentPage(currentPage + 1);
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
        // extraData={reset}
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