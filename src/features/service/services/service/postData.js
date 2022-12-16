import uuid from 'react-native-uuid';
import { variables } from '../../../../common/constants/const';
var host = variables.host;

const addServiceForType = async (idTypeService, name, price, number, phone, description, linkAvatar) => {
    try {
        const response = await fetch(`${host}/api/v1/services`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: uuid.v4(),
                idTypeService: idTypeService,
                idMembership: 'a2cae26a-6267-11ed-9d10-3855030e3f16',
                name: name,
                unit: '',
                price: price,
                number: number,
                phone: phone,
                avatar: linkAvatar,
                pictures:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqDr1l-AlEfIK_Uj2LSeTUqOibf_dLjoluQ&usqp=CAU',
                description: description,
                star: 0,
                numberRating: 0,
                activity: true,
            }),
        });

        return response.json();
    } catch (error) {
        console.log('addServiceForType ~ error', error);
    }
};

export { addServiceForType };
