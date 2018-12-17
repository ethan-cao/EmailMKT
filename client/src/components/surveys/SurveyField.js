import React from "react";

// This is representational compoennt

// extract properties from props
export default ({label, input})=>{
    return (
        <div>
            {/* expanding input object, equals to 
            <input onBlur={input.onBlur} onChange={input.onChange} ... */}
            <label>{label}</label>
            <input {...input}/>
        </div>
    );
}