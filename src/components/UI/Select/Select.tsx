import React from "react";

// @ts-ignore
import classes from "./Select.css";

interface IProps {
  label: string;
  value: string | number;
  onChange: (event?: any) => void;
  options: IOptions[];
}

export interface IOptions {
  value: string | number;
  text: string | number;
}

export const Select = (props: IProps): JSX.Element => {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, index) => {
          return (
            <option value={option.value} key={option.value.toString() + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
