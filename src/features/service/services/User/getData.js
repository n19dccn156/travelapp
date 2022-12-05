import { variables } from '../../../../common/constants/const';

var host = variables.host;

const getUserById = async (id) => {
    try {
        const response = await fetch(`${host}/api/v1/users/idUser/${id}`);

        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getSheduleByServiceId ~ line 16 ~ error', error);
    }
};

export { getUserById };
