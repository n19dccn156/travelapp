import uuid from "react-native-uuid";
import { variables } from "../../../common/constants/const";
import moment from "moment";
var host = variables.host;

const orderService = async (data) => {
  try {
    const response = await fetch(`${host}/api/v1/orderfood`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...data})
    });
    return response.json();
  } catch (error) {
    console.log("orderService ~ error", error);
  }
};

export { orderService };
