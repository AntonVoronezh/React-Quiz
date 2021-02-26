import React from "react";

import classes from "./Backdrop.css";

interface IProps {
    onClick: () => void;
}

export const Backdrop = (props: IProps): JSX.Element => (
  <div className={classes.Backdrop} onClick={props.onClick}></div>
);
