import React, { Component} from "react";
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";
import {Link} from "react-router-dom";

// Survey is container component

const FIELDS = [
    {name: "title", label: "Survey title" },
    {name: "subject", label: "Survey subject" },
    {name: "body", label: "Survey body" },
    {name: "recipients", label: "Survey recipients" }
];

class SurveyForm extends Component{

    render(){
        return (
            <div>
                {/* input value is automatically store in redux store with a key called title (name property) 
                    handleSumbit is added by reduxForm
                */}
                <form onSubmit={this.props.handleSubmit(values => {console.log(values)})}>
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

// reduxForm allows the component to communicate with redux store
export default reduxForm({
    form : "SurverForm"
})(SurveyForm);