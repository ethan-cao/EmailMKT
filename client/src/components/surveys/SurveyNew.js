import React, {Component} from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

/**
 * Survey is used to show SurveyForm and FormReview
 */
class SurveyNew extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {showFormReview:false};
    // }

    // equivalent as the set state in constructor
    // this shortcut is enabled by create-react-app
    state = {
        showFormReview : false
    };

    render(){ 
        // ternary operation is supported, but if-else is not supported
        return (
            <div>
                { this.state.showFormReview ?  
                    <SurveyFormReview/> : 
                    <SurveyForm onSurveySubmit={ () => {this.setState({showFormReview: true})} }/> 
                }
            </div>
        );
    }
}

export default SurveyNew;