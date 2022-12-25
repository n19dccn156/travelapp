import loginReducer from "./reducers/LoginReducer";
import { ReducerListCategory, ReducerListOrder, ReducerState } from "./reducers/reducerService";

const { configureStore } = require("@reduxjs/toolkit");
// const { default: loginReducer } = require("./reducers/LoginReducer");

const store = configureStore({
    reducer: {
        "logined": loginReducer,
        "listOrder": ReducerListOrder,
        "listCategory": ReducerListCategory,
        "idState": ReducerState
    }
})

export default store