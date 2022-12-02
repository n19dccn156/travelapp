import { variables } from '../../../common/constants/const';
var host = variables.host;

const orderService = async (id, name) => {
    try {
        console.log('vao day roi');

        const response = await fetch(`${host}/api/v1/typeservices`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id, name: name }),
        });

        return response.json();
    } catch (error) {
        console.log('updateTypeService ~ error', error);
    }
};

export { orderService };
