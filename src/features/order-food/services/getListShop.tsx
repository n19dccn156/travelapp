
const getListShop = async ()=>{
  try {
    const response =  await fetch('http://192.168.1.5:3000/get-shop-food');
    return response.json();
  } catch (error) {
    console.log('🚀 ~ file: getListShop ~ line 4 ~ error', error);
    return null;
  }
}
type itemShopFood = {
    id: number,
    name: string,
    adress: string,
    picture: string
  }
export { getListShop};
export type { itemShopFood };
