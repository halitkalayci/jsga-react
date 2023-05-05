import { ErrorMessage, Field } from 'formik';
import React from 'react';

function BaseInput(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <Field
                className="form-control"
                name={props.name}
                type={props.type}
            />
            <ErrorMessage name={props.name}>
                {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
        </div>
    );
}

export default BaseInput;
