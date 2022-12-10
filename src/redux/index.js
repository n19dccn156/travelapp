import { combineReducers } from "redux";
import modifyModalFood from "./action/modifyModal";
import { ModalReducer, OrderReducer, OrderDetailReducer} from "./reducers/reducerFood";
const allReducers = combineReducers({
  modal: ModalReducer,
  order: OrderReducer,
  detailOrder: OrderDetailReducer,
});
export default allReducers;
