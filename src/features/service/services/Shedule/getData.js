import { variables } from '../../../common/constants/const';
var host = variables.host;

const getSheduleByServiceId = async (id) => {
    try {
        const response = await fetch(`${host}/api/v1/scheduleservice/idservice/${id}`);
        // const response = await fetch(`https://phuquy-travel-app.herokuapp.com/api/v1/typeservices`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getSheduleByServiceId ~ line 16 ~ error', error);
    }
};
export { getSheduleByServiceId };
