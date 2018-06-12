import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <nav>
                {/* using className instead of class in JSX */}
                <div className="nav-wrapper">
                    <a href="/" className="left brand-logo"> MyApp </a>
                    <ul className="right">
                        <li><a href="/auth/google">Login with Google</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default Header;