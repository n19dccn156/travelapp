const getListShop = async () => {
  try {
    const response = await fetch('http://192.168.1.5:3000/get-all-shop');
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
    return null;
  }
};
const getAllDishes = async () => {
  try {
    const response = await fetch('http://192.168.1.5:3000/get-all-dish');
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
    return null;
  }
};
const getInfoDish = async (id:number) => {
  try {
    const response = await fetch(`http://192.168.1.5:3000/get-dish?id=${id}`);
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
  }
};
const getInfoShop = async (id:number) => {
  try {
    const response = await fetch(`http://192.168.1.5:3000/get-shop?id=${id}`);
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 16 ~ error', error);
  }
};
type itemDish = {
  img: string;
  name: string;
  star: number;
  id: number;
  price: number;
  shop: string;
};
type itemShopFood = {
  id: number;
  name: string;
  adress: string;
  picture: string;
};
export {getListShop, getAllDishes,getInfoDish,getInfoShop};
export type {itemShopFood, itemDish};
