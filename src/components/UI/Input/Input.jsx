import React from "react";
import classes from "./Input.css";

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate;
}

const Input = props => {
  const inputType = props.type || "text";

  const cls = [classes.Input];


  return (
    <div className={cls.join(" ")}>
    </div>
  );
};

export default Input;
