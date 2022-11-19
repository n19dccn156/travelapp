import { variables } from '../../../common/constants/const';
var host = variables.host;
const getListServices = async () => {
    try {
        const response = await fetch(`${host}/api/v1/services?_type=ALL&_sort=ALL&_page=0&_size=10`);
        console.log('call');
        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
        return {};
    }
};
const getAllServices = async () => {
    try {
        const response = await fetch(`${host}/`);

        return response.json();
    } catch (error) {
        console.log(`${host}/get-all-dish`);
        console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
        return {};
    }
};
const getInfoService = async (id) => {
    try {
        const response = await fetch(`${host}/get-dish?id=${id}`);
        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
    }
};
const getInfoCaterogi = async (id) => {
    try {
        const response = await fetch(`${host}/get-shop?id=${id}`);
        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
    }
};

const getAllCaterogy = async () => {
    try {
        const response = await fetch(`${host}/api/v1/typeservices`);
        // const response = await fetch(`https://phuquy-travel-app.herokuapp.com/api/v1/typeservices`);

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
export { getListServices, getAllCaterogy, getServiceOfCaterogy };
