import store from "../../../redux/store";
import moment from "moment";
import { orderService } from "./order";
import { color } from "react-native-reanimated";
function SendOrder(){
  const order = store.getState().order;
  const listDetailOrder = store.getState().detailOrder;
    const body = 
    { 
      order: {
        comment: order.comment,
        dateNow: moment().format("YYYY-MM-DDThh:mm:ss.sss"),
        dateStart: moment().format("YYYY-MM-DD"),
        id: 0,
        idFood: order.idFood,
        idState: "XACNHAN",
        idUser: "7055dcb1-67ce-4c5f-bf51-03863f7e5778",
        note: "Cho em xin thêm ít đá",
        phone: "0394567891",
        star: 0
      },
      orderDetail:[...listDetailOrder.map(element=>{
        return {
          idDish: element.idDish,
          idOrder: 0,
          number: element.number,
          price: element.price,
        }
      })] 
    }
    console.log(body)
    orderService(body).then().then(data=>{console.log(data)}).catch((err)=>{
      console.log(err);
    })
}
export default SendOrder;