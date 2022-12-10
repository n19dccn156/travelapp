import { variables } from '../../../../common/constants/const';
import moment from 'moment';
var host = variables.host;

const updateStateOrderById = async (id, idState) => {
    try {
        const response = await fetch(`${host}/api/v1/orderservice/${id}?_idState=${idState}`, {
            method: 'PATCH',
        });

        return response.json();
    } catch (error) {
        console.log('updateScheduleById ~ error', error);
    }
};

const updateOrderById = async (order, idSchedule, dateStart, number, price, phone) => {
    console.log('number:' + number + typeof Number(number) + ' price: ' + price + typeof price + ' phone: ' + phone);
    try {
        const response = await fetch(`${host}/api/v1/orderservice/idOrderService/${order.id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: order.id,
                idUser: order.idUser,
                idState: order.idState,
                idSchedule: idSchedule,
                dateNow: order.dateNow,
                dateStart: moment(dateStart).format('YYYY-MM-DD'),
                number: Number(number),
                price: price,
                phone: phone,
                star: order.star,
                comment: order.comment,
                idService: order.idService,
            }),
        });

        return response.json();
    } catch (error) {
        console.log('updateScheduleById ~ error', error);
    }
};

export { updateStateOrderById, updateOrderById };
