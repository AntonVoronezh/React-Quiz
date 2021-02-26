import React from "react";

import classes from "./Select.css";

interface IProps {
  label: string;
  value: string;
  onChange: () => void;
  options: IOptions[];
}

export interface IOptions {
  value: string;
  text: string;
}

export const Select = (props: IProps): JSX.Element => {
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
      </select>
    </div>
  );
};
