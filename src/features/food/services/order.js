import uuid from "react-native-uuid";
import { variables } from "../../../common/constants/const";
import moment from "moment";
var host = variables.host;

const orderService = async () => {
  try {
    const response = await fetch(`${host}/api/v1/orderfood`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order: {
          comment: "string",
          dateNow: moment().format("YYYY-MM-DDThh:mm:ss.sss"),
          dateStart: "2022-12-08",
          id: 1,
          idFood: "47477528-628c-11ed-9d10-3855030e3f14",
          idState: "XACNHAN",
          idUser: "7055dcb1-67ce-4c5f-bf51-03863f7e5778",
          note: "Cho em xin thêm ít đá",
          phone: "0394567891",
          star: 0
        },
        orderDetail: [
          {
            idDish: "0dd2111a-62ad-11ed-9d10-3855030e3f14",
            idOrder: 1,
            number: 5,
            price: 13000
          }
        ]
      })
    });
    return response.json();
  } catch (error) {
    console.log("orderService ~ error", error);
  }
};

export { orderService };
