import React from "react";

import classes from "./Backdrop.css";

export const Backdrop = (props) => (
  <div className={classes.Backdrop} onClick={props.onClick}></div>
);
