import { variables } from "../../../common/constants/const";
var host =variables.host;
const getListShop = async () => {
  try {
    const response = await fetch(`${host}/api/v1/foods?_type=ALL&_sort=ALL&_page=0&_size=10`);
    console.log('call')
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
    return {};
  }
};
async function getDishByIdShop(id){
  try {
    const response = await fetch(`${host}/api/v1/dishs/idfood/${id}`);
    console.log('call')
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
    return {};
  }
}
const getAllDishes = async () => {
  try {
    const response = await fetch(`${host}/`);
   
    return response.json();
  } catch (error) {
    console.log(`${host}/get-all-dish`)
    console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
    return {};
  }
};
const getInfoDish = async (id) => {
  try {
    const response = await fetch(`${host}/get-dish?id=${id}`);
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
  }
};
const getInfoShop = async (id) => {
  try {
    const response = await fetch(`${host}/get-shop?id=${id}`);
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
  }
};
export {getListShop, getAllDishes,getInfoDish,getInfoShop,getDishByIdShop};

