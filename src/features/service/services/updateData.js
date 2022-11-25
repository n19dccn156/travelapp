import { variables } from '../../../common/constants/const';
var host = variables.host;

const updateTypeServiceById = async (id, name) => {
    try {
        console.log('test', `${host}/api/v1/typeservices/${id}?_name=${name}`);
        const response = await fetch(`${host}/api/v1/typeservices/${id}?_name=${name}`, { method: 'PATCH' });

        return response.json();
    } catch (error) {
        console.log('updateTypeService ~ error', error);
    }
};
export { updateTypeServiceById };
