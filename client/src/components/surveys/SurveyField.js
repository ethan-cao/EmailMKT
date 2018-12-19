import React from "react";

// This is representational compoennt

// extract properties from props
// nested de-structure 
export default ({label, input, meta: {error, touched}})=>{
    return (
        <div>
            {/* expanding input object, equals to 
            <input onBlur={input.onBlur} onChange={input.onChange} ... */}
            <label>{label}</label>
            <input {...input} style={{marginBottom:'5px'}} />
            <div className="red-text" style={{marginBottom:'20px'}}>
            { touched && error  /* set by function validate in SurveyForm.js */}  
            </div>
        </div>
    );
}