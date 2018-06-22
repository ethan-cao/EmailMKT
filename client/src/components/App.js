import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";   // react-redux is for compatibility between react and redux
import * as actions from "../actions";

import Header from "./Header";
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
    componentDidMount(){
        // preferred method for initial Ajax request
        this.props.fetchUser();
    }
    
    render(){
        return (
            <div className="container">
                {/* 
                    BrowserRouter can have only 1 direct child
                    when url match (exact for exact match), then certain component will be displayed
                */} 
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" component={Landing} exact />
                        <Route path="/surveys" component={Dashboard} exact />
                        <Route path="/surveys/new" component={SurveyNew} exact/>
                    </div>
                </BrowserRouter>
            </div>    
        );
    };
}

// use connect() to give App component the ability to call action creators
// so we can call this.prop.actionName()
export default connect(null, actions)(App);
