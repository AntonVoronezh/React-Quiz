import React from "react";
import classes from "./Select.css";


const Select = props => {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div className={classes.Select}>

      </select>
    </div>
  );
};

export default Select;
