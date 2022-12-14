import { combineReducers } from "redux";
import modifyModalFood from "./action/modifyModal";
import { ManageDishReducer,ModalDishManage, visibleModalDish } from "./reducers/reducerManage";
import { ModalReducer, OrderReducer, OrderDetailReducer} from "./reducers/reducerFood";
import { ReducerListOrder,ReducerListCategory,ReducerState } from "./reducers/reducerService";
const allReducers = combineReducers({
  listOrder: ReducerListOrder,
  listCategory: ReducerListCategory,
  idState:ReducerState
});
export default allReducers;
