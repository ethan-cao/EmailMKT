import "materialize-css/dist/css/materialize.min.css";  // no path means importing from node_modules
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";  // give access to redux dispatch function
import axios from "axios";

import App from "./components/App";
import reducers from "./reducers";  // automatically access ./reducers/index.js

// 1st param : reducer, 2nd : initial state, 3rd: middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// expose the store for debug purpose, should be removed in production
window.store = store;
window.axios = axios;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.querySelector("#root")
);

// access client environment variable
// console.log("key : " + process.env.REACT_APP_STRIPE_KEY); // defined in .env.development
// console.log("Environment is " + process.env.NODE_ENV);