import { combineReducers } from "redux";
import modifyModalFood from "./action/modifyModal";
import { ManageDishReducer,ModalDishManage, visibleModalDish } from "./reducers/reducerManage";
import { ModalReducer, OrderReducer, OrderDetailReducer} from "./reducers/reducerFood";
const allReducers = combineReducers({
  modal: ModalReducer,
  order: OrderReducer,
  detailOrder: OrderDetailReducer,
  dishManage: ManageDishReducer,
  modalDishManage:ModalDishManage,
  visibleModalDish : visibleModalDish
});
export default allReducers;
