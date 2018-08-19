import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
    constructor(props){
        super(props);

        // this.state is declared inside of a constructor
        // represents the initial "state" of this component instance
        this.state = {
            loginAgency : "Google"
        };
    }

    renderContent(){
        // this.props.auth is the user model, set by authReducer.js
        switch (this.props.auth){
            case null :
                return ;
            case false:
                return <li><a href="/auth/google">Login with {this.state.loginAgency}</a></li>;
            default:   
                // loged in
                return [
                    <li key="1"><Payments/></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render(){
        return (
            <nav>
                {/* using className instead of class in JSX */}
                <div className="nav-wrapper">
                    <Link to="this.props.auth ? '/surveys' : '/' "   className="left brand-logo"> 
                        {/* attributes given to the component during instantiation can be accessed by this.props */}
                        {this.props.appName}
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

// state is the store.getState()
// add auth to this.props
function mapStateToProps({ auth }) {
    return { auth };
  }

// set default value for this.props
Header.defaultProps = {
    appName : "MyAppDefault"
};

// since connect() is invoked, any state change will be trigger setState(), which will further refresh view
export default connect(mapStateToProps)(Header);