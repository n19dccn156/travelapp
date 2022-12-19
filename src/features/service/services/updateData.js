import { variables } from '../../../common/constants/const';
var host = variables.host;

const updateTypeServiceById = async (id, name) => {
    try {
        const response = await fetch(`${host}/api/v1/typeservices/${id}?_name=${name}`, { method: 'PATCH' });

        return response.json();
    } catch (error) {
        console.log('updateTypeService ~ error', error);
    }
};

const addTypeService = async (id, name) => {
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

const updateServiceById = async (service, name, description, price, linkAvatar) => {
    try {
        const response = await fetch(`${host}/api/v1/services/${service.id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                activity: true,
                avatar: linkAvatar,
                description: description,
                id: service.id,
                idMembership: service.idMembership,
                idTypeService: service.idTypeService,
                name: name,
                number: service.number,
                numberRating: service.numberRating,
                phone: service.phone,
                pictures: service.pictures,
                price: price,
                star: service.star,
                unit: service.unit,
            }),
        });

        return response.json();
    } catch (error) {
        console.log('updateTypeService ~ error', error);
    }
};

const deleteServiceById = async (id) => {
    try {
        const response = await fetch(`${host}/api/v1/services/${id}/activity`, {
            method: 'PATCH',
        });

        return response.json();
    } catch (error) {
        console.log('deleteServiceById ~ error', error);
    }
};

export { updateTypeServiceById, addTypeService, updateServiceById, deleteServiceById };
