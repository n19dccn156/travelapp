import { variables } from '../../../../common/constants/const';

var host = variables.host;

const getImageById = async (id) => {
    const response = await fetch(`${host}/api/v1/images/${id}`);
};
const deleteImage = async (url) => {
    console.log('url', url);
    try {
        const response = await fetch(`${host}/api/v1/images`, {
            method: 'DELETE',
            body: url,
        });

        return response;
    } catch (error) {
        console.log('deleteImage ~ error', error);
    }
};

export { getImageById, deleteImage };
