import _ from "lodash";
import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";
import {Link} from "react-router-dom";
import validateEmails from "../../util/validateEmails";
import FIELDS from "./formFields";

class SurveyForm extends Component{
    render() {
        return (
            <div>
                {/* input value is automatically store in redux store with a key called title (name property) 
                    handleSumbit is added by reduxForm
                */}
                <form onSubmit = {this.props.onSurveySubmit} >
                    {FIELDS.map(field =>(
                        <Field key={field.name} type="text" name={field.name} label={field.label} component={SurveyField}/> 
                    ))}
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                    {/* cancel button use react router to navigate inside application, so use Link */}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    // values is a map containing all form input data, FIELDS.name -> input value
    const errors = {};

    errors.recipients = validateEmails(values.recipients);

    _.each(FIELDS, ({name}) =>{
        if (!values[name]){
        // if something wrong with title, reduxForm associates an property to Field title to indicate the error
            errors[name] = "This field cannot be empty";
        }
    });

    // return errors;
}

// reduxForm allows the component to communicate with redux store
export default reduxForm({
    validate,   // function validate will be called anytime user submitted the form
    form: "surveyForm",   // Form name
    destroyOnUnmount : false //  keep data even if the form is not mounted on UI, after review, data remains
})(SurveyForm);
