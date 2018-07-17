import {FETCH_USER} from "../actions/types";

// determine if user is logined
// null : not sure if user login successfully, e.g. network delay
export default function(state = null, action){
    switch (action.type) {
        case FETCH_USER :
            // login successfully returns userid, otherwise false
            return action.payload || false;  
        default:
            return state; // not sure if login successfully
    }
};