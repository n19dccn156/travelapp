import { variables } from '../../../common/constants/const';
var host = variables.host;
const resetPass = async (email) => {
    try {
        const response = await fetch(`${host}/api/v1/password/forgot`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:email})
        });
        return response.json();
    } catch (error) {
        console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
        return {};
    }
};
export default resetPass;
