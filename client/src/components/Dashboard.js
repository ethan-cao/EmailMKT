import React, {Component} from "react";

class Dashboard extends Component {
    render(){
        return (
            <div>
                {/* <h2>Welcome {this.props.auth}</h2> */}
                <h2>Welcome {this.props.userID}</h2>
            </div>
        );
    }
}

export default Dashboard;