import uuid from 'react-native-uuid';
import { variables } from '../../../../common/constants/const';
import moment from 'moment';
var host = variables.host;
import { useDispatch } from 'react-redux';

const orderService = async (idUser, idSchedule, dateStart, number, phone, service) => {
    try {
        const response = await fetch(`${host}/api/v1/orderservice`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idUser: idUser, //'7055dcb1-67ce-4c5f-bf51-03863f7e5778',
                idState: 'XACNHAN',
                idSchedule: idSchedule,
                dateNow: moment().format('YYYY-MM-DDThh:mm:ss.sss'),
                dateStart: moment(dateStart).format('YYYY-MM-DD'),
                number: number,
                price: service.price,
                phone: phone,
                idService: service.id,
                star: 0,
                comment: '',
            }),
        });
    
        return response.json();

    } catch (error) {
        console.log('orderService ~ error', error);
    }
};

export { orderService };
