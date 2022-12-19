import { variables } from '../../../../common/constants/const';

var host = variables.host;

const getOrderByIdAndState = async (id, state) => {
    try {
        const response = await fetch(`${host}/api/v1/orderservice/idservice/${id}?_state=${state}&_page=0&_size=2`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getSheduleByServiceId ~ line 16 ~ error', error);
    }
};

const getOrderByIdAndStateForPage = async (id, state, page) => {
    try {
        const response = await fetch(
            `${host}/api/v1/orderservice/idservice/${id}?_state=${state}&_page=${page}&_size=2`,
        );

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getSheduleByServiceId ~ line 16 ~ error', error);
    }
};

const getOrderByIdUserAndState = async (id, state) => {
    try {
        const response = await fetch(`${host}/api/v1/orderservice/iduser/${id}?_state=${state}&_page=0&_size=10`);
        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getSheduleByServiceId ~ line 16 ~ error', error);
    }
};

const getOrderByIdUserAndStateForPage = async (id, state, page) => {
    try {
        const response = await fetch(`${host}/api/v1/orderservice/iduser/${id}?_state=${state}&${page}&_size=2`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getSheduleByServiceId ~ line 16 ~ error', error);
    }
};

export { getOrderByIdAndState, getOrderByIdUserAndState, getOrderByIdAndStateForPage, getOrderByIdUserAndStateForPage };
