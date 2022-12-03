import { variables } from "../../../common/constants/const";
var host =variables.host;
const getListShop = async () => {
  try {
    const response = await fetch(`${host}/api/v1/foods?_type=ALL&_sort=ALL&_page=0&_size=10`);
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
    return {};
  }
};
async function getDishByIdShop(id){
  try {
    const response = await fetch(`${host}/api/v1/dishs/idfood/${id}`);
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
    console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
    return {};
  }
};
const getInfoDish = async (id) => {
  try {
    const response = await fetch(`${host}/api/v1/dishs/${id}`);
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
  }
};
const getInfoShop = async (id) => {
  try {
    const response = await fetch(`${host}/api/v1/foods/47477528-628c-11ed-9d10-3855030e3f14`);
    return response.json();
  } catch (error) {
    return{}
    console.log('🚀 ~ file: getShopFood ~ line 16 ~ error', error);
  }
};
export {getListShop, getAllDishes,getInfoDish,getInfoShop,getDishByIdShop};

