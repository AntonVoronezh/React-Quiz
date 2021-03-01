import React from "react";

// @ts-ignore
import classes from "./AnswersList.css";
import { AnswerItem, IAnswer } from "./AnswerItem/AnswerItem";

interface IProps {
  answers: IAnswer[];
  onAnswerClick: (id: number) => void;
  state?: string;
}

export const AnswersList = (props: IProps): JSX.Element => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer: IAnswer, index) => {
      return (
        <AnswerItem
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      );
    })}
  </ul>
);
