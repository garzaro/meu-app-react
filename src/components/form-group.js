import React from "react";

function FormGroup({htmlFor, label, children}) {

    return (
        
        <>
            
            <div className="form-group">

                <label htmlFor={htmlFor}>

                    {label}

                </label>

                {children}

            </div>
            
        </>

    );
}
export default FormGroup;

