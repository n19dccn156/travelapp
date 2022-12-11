import { variables } from '../../../common/constants/const';
var host = variables.host;
const getListServices = async () => {
    try {
        const response = await fetch(`${host}/api/v1/services?_type=ALL&_sort=ALL&_page=0&_size=1`);
        console.log('call');
        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
        return {};
    }
};

const getListServicesForPage = async (page) => {
    try {
        const response = await fetch(`${host}/api/v1/services?_type=ALL&_sort=ALL&_page=${page}&_size=1`);
        console.log('call');
        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
        return {};
    }
};

const getAllCaterogy = async () => {
    try {
        const response = await fetch(`${host}/api/v1/typeservices`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getAllCaterogy ~ line 16 ~ error', error);
    }
};
const getServiceOfCaterogy = async (type) => {
    try {
        const response = await fetch(`${host}/api/v1/services?_type=${type}&_sort=ALL&_page=0&_size=10`);
        // const response = await fetch(`https://phuquy-travel-app.herokuapp.com/api/v1/typeservices`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getAllCaterogy ~ line 16 ~ error', error);
    }
};

const getSheduleByServiceId = async (id) => {
    try {
        const response = await fetch(`${host}/api/v1/scheduleservice/idservice/${id}`);
        // const response = await fetch(`https://phuquy-travel-app.herokuapp.com/api/v1/typeservices`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getSheduleByServiceId ~ line 16 ~ error', error);
    }
};
export { getListServices, getAllCaterogy, getServiceOfCaterogy, getSheduleByServiceId, getListServicesForPage };
