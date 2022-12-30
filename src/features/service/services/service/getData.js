import { variables } from '../../../../common/constants/const';

var host = variables.host;

const getServiceById = async (id) => {
    try {
        const response = await fetch(`${host}/api/v1/services/${id}`);
        // const response = await fetch(`https://phuquy-travel-app.herokuapp.com/api/v1/typeservices`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getSheduleByServiceId ~ line 16 ~ error', error);
    }
};

const getServiceByIdMembership = async (id) => {
    try {
        const response = await fetch(`${host}/api/v1/services/idmemberships/${id}`);
        // const response = await fetch(`https://phuquy-travel-app.herokuapp.com/api/v1/typeservices`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getServiceByIdMembership ~ line 16 ~ error', error);
    }
};
export { getServiceById, getServiceByIdMembership };
