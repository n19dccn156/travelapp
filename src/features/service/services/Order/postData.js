import uuid from 'react-native-uuid';
import { variables } from '../../../../common/constants/const';
var host = variables.host;

const orderService = async (idSchedule, dateStart, number, phone, service) => {
    try {
        const response = await fetch(`${host}/api/v1/orderservice`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: uuid.v4(),
                idUser: '7055dcb1-67ce-4c5f-bf51-03863f7e5778',
                idState: 'XACNHAN',
                idSchedule: idSchedule,
                dateNow: new Date(),
                dateStart: dateStart,
                number: number,
                price: service.price,
                phone: phone,
                star: 0,
                comment: '',
                idService: service.id,
            }),
        });

        return response.json();
    } catch (error) {
        console.log('orderService ~ error', error);
    }
};

export { orderService };
