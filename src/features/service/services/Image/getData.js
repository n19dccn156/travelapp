import { variables } from '../../../../common/constants/const';

var host = variables.host;

const getImageById = async (id) => {
    const response = await fetch(`${host}/api/v1/images/${id}`);
};

export { getImageById };
