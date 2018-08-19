import { combineReducers } from "redux";
import authReducer from "./authReducer";

// combineReducers() return a reducer function. Parameter is an object whose values correspond to different reducer functions that need to be combined into one.
export default combineReducers({
    auth: authReducer
})