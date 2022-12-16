import uuid from 'react-native-uuid';
import { variables } from '../../../../common/constants/const';
var host = variables.host2;

const saveImage = async (image) => {
    try {
        console.log('HOST: ', `${host}/api/v1/images`);
        const response = await fetch(`${host}/api/v1/images`, {
            method: 'POST',
            headers: {
                Accept: 'multipart/form-data;',
                'Content-Type': 'multipart/form-data; ',
            },
            body: image,
        });

        return response.json();
    } catch (error) {
        console.log('saveImage ~ error', error);
    }
};

export { saveImage };