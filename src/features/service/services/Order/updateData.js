import { variables } from '../../../../common/constants/const';

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

export { updateStateOrderById };
