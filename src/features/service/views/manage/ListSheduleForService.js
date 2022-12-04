import React, { useState } from 'react';
import { View } from 'react-native-animatable';
import { FlatList } from 'react-native-gesture-handler';
import MyScheduleCard from './MyScheduleCard';

function ListSheduleForService({ navigation, route }) {
    return (
        <View style={{ justifyContent: 'center' }}>
            <FlatList
                contentContainerStyle={{
                    flex: 1,
                    margin: 10,
                    flexDirection: 'column',
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={route.listShedule}
                renderItem={({ item }) => (
                    <MyScheduleCard
                        navigation={navigation}
                        route={{
                            schedule: item,
                            setListShedule: route.setListShedule,
                            getScheduleServiceAgain: route.getScheduleServiceAgain,
                        }}
                    />
                )}
            />
        </View>
    );
}

export default ListSheduleForService;
