import { combineReducers } from "redux";
import modifyModalFood from "./action/modifyModal";
import { ManageDishReducer,ModalDishManage, visibleModalDish } from "./reducers/reducerManage";
import { ModalReducer, OrderReducer, OrderDetailReducer} from "./reducers/reducerFood";
import { ServiceReducer } from "./reducers/reducerService";
const allReducers = combineReducers({
  modal: ModalReducer,
//   order: OrderReducer,
//   detailOrder: OrderDetailReducer,
//   dishManage: ManageDishReducer,
//   modalDishManage:ModalDishManage,
 // serviceReducer:ServiceReducer
});

export default allReducers;
