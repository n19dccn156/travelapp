import uuid from 'react-native-uuid';
import { variables } from '../../../../common/constants/const';
var host = variables.host;

const saveImage = async (image) => {
    try {
        const response = await fetch(`${host}/api/v1/images`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: image,
        });

        return response.json();
    } catch (error) {
        console.log('saveImage ~ error', error);
    }
};

export { saveImage };
