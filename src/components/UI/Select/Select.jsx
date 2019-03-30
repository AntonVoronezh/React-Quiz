import React from "react";
import classes from "./Select.css";

// function isInvalid({valid, touched, shouldValidate}) {
//   return !valid && touched && shouldValidate;
// }

const Select = props => {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
        {/* {isInvalid(props) ? <span>{props.errorMessage}</span> : null} */}
      </select>
    </div>
  );
};

export default Select;
