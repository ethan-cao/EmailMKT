import axios from "axios";
import {FETCH_USER} from "./types";

// action creator, if it returns function, redux-thunk put dispatch as parameter
export const fetchUser = () => {
    return function(dispatch){
        axios
            .get("/api/current_user")
            .then(res => dispatch({type: FETCH_USER, payload: res}) );
    }
};


