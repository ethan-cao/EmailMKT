import React, {Component} from "react";
import {reduxForm} from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
    constructor(props){
        super(props);
        this.state = {showFormReview:false};

        this.toggleReview = this.toggleReview.bind(this);
    }

    // equivalent as the set state in constructor
    // this shortcut is enabled by create-react-app
    // state = {
    //     showFormReview : false
    // };

    toggleReview(){
        this.setState({showFormReview : !this.state.showFormReview});
    }

    render(){ 
        return (
            // ternary operation is supported, but if-else is not supported in JSX
            <div>
                { 
                    this.state.showFormReview ?  
                    <SurveyFormReview onCancel = {this.toggleReview}/> : 
                    <SurveyForm onSurveySubmit = {this.toggleReview} /> 
                }
            </div>
        );
    }
}


// export default SurveyNew;
export default reduxForm({
    form: "surveyForm"
})(SurveyNew);