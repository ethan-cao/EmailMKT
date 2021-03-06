import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout"; // payment component from stripe for react
import {connect} from "react-redux";
import * as actions from "../actions";

class Payments extends Component{
    render(){
        return (
            <StripeCheckout
                name="Add credits"
                description="5$ for 5 credit"
                amount={500}  
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);