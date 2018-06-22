import axios from "axios"; // Promise based HTTP client 
import {FETCH_USER} from "./types";

// in React, action creator must return an action createor immmediately
// but with redux-thunk,  action creator does not need to return an action immediately
/*
export const fetchUser = () => {
    const request = axios.get("/api/current_user");
    return {
        type: FETCH_USER,
        payload: res
    };
};
*/


// if the return is function, redux-thunk automatically call the function, and pass dispatch() as parameter
// any acitons pass into dispatch() will be automatially forward to reducers
export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");   // express authRoutes.js generates the response
    dispatch({type: FETCH_USER, payload: res.data});
     // here we create an action (an object): {type: FETCH_USER, layload: res}       
};