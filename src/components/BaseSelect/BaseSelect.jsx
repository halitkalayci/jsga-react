import { ErrorMessage, Field } from 'formik';
import React from 'react';

function BaseSelect(props) {
 // default value
 const { placeHolderValue = 0 } = props;
 return (
  <div className="form-group">
   <label>{props.label}</label>

   <Field as="select" className="form-select" name={props.name}>
    <option disabled value={placeHolderValue}>
     {props.placeHolder}
    </option>

    {props.data?.map((opt, index) => {
     return (
      <option key={index} value={opt.id}>
       {opt.name}
      </option>
     );
    })}
   </Field>

   <ErrorMessage name={props.name}>
    {(msg) => <div className="text-danger">{msg}</div>}
   </ErrorMessage>
  </div>
 );
}

export default BaseSelect;
