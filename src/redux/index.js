import { combineReducers } from "redux";
import modifyModalFood from "./action/modifyModal";
import { ReducerListOrder,ReducerListCategory,ReducerState } from "../store/reducers/reducerService";
const allReducers = combineReducers({
  listOrder: ReducerListOrder,
  listCategory: ReducerListCategory,
  idState:ReducerState
})
export default allReducers;
