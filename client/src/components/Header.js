import React, {Component} from 'react';
import {connect} from "react-redux";

class Header extends Component {
    renderContent(){
        switch (this.props.auth){
            case null :
                return ;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:   
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render(){
        console.log("rendering Header");

        return (
            <nav>
                {/* using className instead of class in JSX */}
                <div className="nav-wrapper">
                    <a href="/" className="left brand-logo"> MyApp </a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

// invoke this with connect() to add the return object to this.props
function mapStateToProps(state){
    return {auth:state.auth, test : 1};
}

export default connect(mapStateToProps)(Header);