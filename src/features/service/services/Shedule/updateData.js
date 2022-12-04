import { variables } from '../../../../common/constants/const';

var host = variables.host;

const updateScheduleById = async (schedule, name) => {
    try {
        const response = await fetch(`${host}/api/v1/scheduleservice/${schedule.id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: schedule.id,
                idService: schedule.idService,
                name: name,
                activity: schedule.activity,
            }),
        });

        return response.json();
    } catch (error) {
        console.log('updateScheduleById ~ error', error);
    }
};

const deleteScheduleById = async (schedule) => {
    try {
        const response = await fetch(`${host}/api/v1/scheduleservice/${schedule.id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: schedule.id,
                idService: schedule.idService,
                name: schedule.name,
                activity: false,
            }),
        });
        return response.json();
    } catch (error) {
        console.log('deleteServiceById ~ error', error);
    }
};

export { updateScheduleById, deleteScheduleById };
