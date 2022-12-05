import { combineReducers} from "redux";
import modifyModalFood from "./action/modifyModal";
import DataReducer from "./reducers/reducerFood";
const allReducers = combineReducers({
    DataReducer
})
export default allReducers;