import { combineReducers } from "redux";
import {reducer as reduxForm} from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

// combineReducers() return a reducer function. Parameter is an object whose values correspond to different reducer functions that need to be combined into one.
export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
})