import React from "react";

import classes from "./Input.css";

function isInvalid({ valid, touched, shouldValidate }): boolean {
  return !valid && touched && shouldValidate;
}

interface IProps {
  type: string;
  valid: boolean;
  touched: boolean;
  shouldValidate: boolean;
  label: string;
  value: string;
  errorMessage: string;
  onChange: (event: any) => void;
}

export const Input = (props: IProps): JSX.Element => {
  const inputType = props.type || "text";

  const cls = [classes.Input];

  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
    </div>
  );
};
