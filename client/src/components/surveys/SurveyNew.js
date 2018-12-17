import React, {Component} from "react";
import SurveyForm from "./SurveyForm";

/**
 * Survey is used to show SurveyForm and FormReview
 */
class SurveyNew extends Component{
    render(){
        return (
            <div>
                <SurveyForm/>
            </div> 
        );
    }
}

export default SurveyNew;