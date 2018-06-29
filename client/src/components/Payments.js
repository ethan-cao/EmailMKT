import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout"; // payment component from stripe for react

class Payments extends Component{
    render(){
        debugger;  

        return (
            <StripeCheckout
                name="Add credits"
                description="1$ for 1 credit"
                amount={100}  
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}

export default Payments;