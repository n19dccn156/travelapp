import uuid from 'react-native-uuid';
import { variables } from '../../../../common/constants/const';
var host = variables.host;

const addSheduleService = async (idService, name) => {
    try {
        const response = await fetch(`${host}/api/v1/scheduleservice`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: uuid.v4(), idService: idService, name: name, activity: true }),
        });

        return response.json();
    } catch (error) {
        console.log('addSheduleService ~ error', error);
    }
};

export { addSheduleService };
