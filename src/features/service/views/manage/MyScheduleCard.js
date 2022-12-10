import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Text, View } from 'react-native-animatable';
import COLORS from '../../consts/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import { deleteScheduleById, updateScheduleById } from '../../services/Shedule/updateData';
function MyScheduleCard({ navigation, route }) {
    console.log('route MyScheduleCard', route);
    const getScheduleServiceAgain = route.getScheduleServiceAgain;
    const schedule = route.schedule;
    const [active, setActive] = useState(false);
    const [name, setName] = useState('');

    const checkData = () => {
        if (name.trim() == '') {
            Alert.alert('Thông báo!', 'Không được để trống nội dung!', [{ text: 'OK', onPress: () => {} }]);
            return false;
        }
        return true;
    };
    const updateSchedule = () => {
        if (checkData()) {
            updateScheduleById(schedule, name)
                .then(function (res) {
                    console.log('res', res);
                    if (res.status == 'success') {
                        getScheduleServiceAgain(schedule.idService);
                    }
                    Alert.alert('Thông báo!', res.message, [{ text: 'Đóng', onPress: () => {} }]);
                })
                .catch((err) => {
                    console.log('🚀 ~ file: updateSchedule-screen ~ line 17 ~ error', err);
                });
            setActive(false);
        }
    };

    const confirmDelete = () => {
        Alert.alert('Cảnh báo!', 'Bạn có chắc chắn muốn xóa dịch vụ này không!', [
            {
                text: 'Không',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: ' Chắc', onPress: () => deleteSchedule() },
        ]);
    };

    const deleteSchedule = () => {
        deleteScheduleById(schedule)
            .then(function (res) {
                console.log('res', res);
                if (res.status == 'success') {
                    getScheduleServiceAgain(schedule.idService);
                }
                Alert.alert('Thông báo!', res.message, [
                    {
                        text: 'Đóng',
                        onPress: () => {},
                    },
                ]);
            })
            .catch((err) => {
                console.log('🚀 ~ file: deleteSchedule-screen ~ line 17 ~ error', err);
            });
    };
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: COLORS.primary,
                borderRadius: 5,
            }}
        >
            <TextInput
                placeholder="Nhập nội dung vào đây"
                defaultValue={schedule.name}
                style={{ borderWidth: 0.5, width: 250, borderRadius: 2 }}
                enabled={active}
                editable={active}
                onChangeText={(newText) => setName(newText)}
            />
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity
                    onPress={() => {
                        setActive(!active);
                        setName(schedule.name);
                    }}
                >
                    <View style={{ margin: 5 }}>
                        <FontAwesome5 name="pen" size={20} color={COLORS.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        confirmDelete();
                    }}
                >
                    <View style={{ margin: 5 }}>
                        <AntDesign name="delete" size={20} color={COLORS.red} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        updateSchedule();
                    }}
                >
                    <View style={{ margin: 5 }}>
                        <AntDesign name="save" size={20} color={COLORS.oranbge} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MyScheduleCard;
