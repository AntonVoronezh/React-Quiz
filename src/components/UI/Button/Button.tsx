import React from "react";

// @ts-ignore
import classes from "./Button.css";

interface IProps {
  type: string;
  onClick?: (event?: any) => void;
  children: any;
  disabled?: boolean;
}

export const Button = (props: IProps): JSX.Element => {
  const cls = [classes.Button, classes[props.type]];

  return (
    <button
      onClick={props.onClick}
      className={cls.join(" ")}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
