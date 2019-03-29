import React from "react";
import classes from "./Input.css";

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate;
}

const Input = props => {
  const inputType = props.type || "text";

  const cls = [classes.Input];

  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
    </div>
  );
};

export default Input;
