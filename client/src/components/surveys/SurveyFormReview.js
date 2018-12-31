import React from "react";  
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import _ from "lodash";
import FIELDS from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => (
    <div>
        <h5> Please confirm </h5>
        <div>
            {_.map(FIELDS, field => (
                <div key={field.name}>
                    <label>{field.label} : {formValues[field.name]} </label> 
                </div>
            ))}
        </div>
        <button className="yellow darken-3 btn-flat white-text" onClick = {onCancel}>
            Back
        </button>
        <button className="green btn-flat right white-text" onClick={ ()=>submitSurvey(formValues, history) }>
            Send surveys 
            <i className="material-icons right">email</i>
        </button>
    </div>
);

function mapStateToProps(state){
    // state.form.surveyForm.values is set by reduxForm
    // console.log(state);
    return {formValues : state.form.surveyForm.values};
}

// use withRouter to make SurveyFormReivew aware of react router information
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));