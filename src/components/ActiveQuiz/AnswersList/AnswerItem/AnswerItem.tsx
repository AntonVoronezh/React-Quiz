import React from "react";

import classes from "./AnswerItem.css";

interface IProps {
  state: string | null;
  answer: IAnswer;
  onAnswerClick: (id: number) => void;
}

export interface IAnswer {
  id: number;
  text: string;
}

export const AnswerItem = (props: IProps): JSX.Element => {
  const cls = [classes.AnswerItem];

  if (props.state) {
    cls.push(classes[props.state]);
  }

  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};
