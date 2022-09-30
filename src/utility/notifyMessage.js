import { Alert } from "react-native";
export default function notifyMessage(title ='Thông báo', msg,callbackCancel =()=>{},callbackOk=()=>{}) {
  Alert.alert(title, msg, [
    {
      text: "Cancel",
      onPress: callbackCancel,
      style: "cancel"
    },
    { text: "OK", onPress: callbackOk }
  ]);
}
