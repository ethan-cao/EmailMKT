import React, {Component} from "react";
import {Link} from "react-router-dom";

// icon file is linked in /Users/guane/Work/study/MyApp/client/public/index.html
class Dashboard extends Component {
    render(){
        return (
            <div>
                <h2>Dashboard</h2>
                <div className="fixed-action-btn">
                    {/* use link so when user click, user gets redirected to the right router */}
                    <Link to="/surveys/new" className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Dashboard;