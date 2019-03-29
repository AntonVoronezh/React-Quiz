import React from "react";
import classes from "./Input.css";

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate;
}

const Input = props => {


  return (
    <div className={cls.join(" ")}>
    </div>
  );
};

export default Input;
