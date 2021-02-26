import React from "react";

import classes from "./MenuToggle.css";

interface IProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuToggle = (props: IProps): JSX.Element => {
  const cls = [classes.MenuToggle, "fa"];

  if (props.isOpen) {
    cls.push("fa-times");
    cls.push(classes.open);
  } else {
    cls.push("fa-bars");
  }

  return <i className={cls.join(" ")} onClick={props.onToggle} />;
};
