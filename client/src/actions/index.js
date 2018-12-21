import axios from "axios"; // Promise based HTTP client 
import {FETCH_USER} from "./types";

// in React, action creator(function) must return an action(object) immmediately
// but with redux-thunk, action creator does not need to return an action immediately
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
     // here we create an action (an object): {type: FETCH_USER, layload: res}       
    dispatch({type: FETCH_USER, payload: res.data});
};

// after getting token from stripe, we can send the token to express server to update user's data
export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = values => {
    console.log("submitSurveys");
    return {type:"t"};
};