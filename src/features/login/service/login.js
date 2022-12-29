import { variables } from "../../../common/constants/const";
var host = variables.host;
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { useDispatch, useSelector } from "react-redux";
async function loginFace(data,dispatch) {
  const urlGet = host + "/api/v1/users/" + data.userID;
  const urlPost = host + "/api/v1/users";
    let dataPost = {
        avatar: data.imageURL?.split("?")[0],
        firstName: data.firstName + " " + data.middleName,
        id: uuid.v4(),
        idSocial: data.userID,
        lastName: data.lastName,
        phone: "0867123453",
        platform: "facebook",
        sex: "Nam"
    }
  const res = await (await fetch(urlGet)).json();
  if (res.status === "success") {
    AsyncStorage.removeItem("@userid").then(() => {
      Promise.all([
        AsyncStorage.setItem("@roleid", "CUSTOMER"),
        AsyncStorage.setItem("@userid", res.data.id)
      ])
        .then(() => {
          dispatch({ type: "login", payload: true });
        })
        .catch(err => console.log(err));
    });
  } else {
    const res2 = await (await fetch(urlPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataPost)
    })).json();
    if (res2.status === "success") {
      AsyncStorage.removeItem("@userid").then(() => {
        Promise.all([
          AsyncStorage.setItem("@roleid", "CUSTOMER"),
          AsyncStorage.setItem("@userid", res2.data.id)
        ])
          .then(() => {
            dispatch({ type: "login", payload: true });
          })
          .catch(err => console.log(err));
      });
    }
  }
}
export default  loginFace ;
