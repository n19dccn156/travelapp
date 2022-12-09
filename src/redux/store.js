import  {createStore } from "redux";
import allReducers from ".";
const store = createStore(allReducers);
export default store;