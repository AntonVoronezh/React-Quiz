import React from "react";

import classes from "./ActiveQuiz.css";
import { AnswersList } from "./AnswersList/AnswersList";
import { IAnswer } from "./AnswersList/AnswerItem/AnswerItem";

interface IProps {
  answerNumber: number;
  onAnswerClick: (id: number) => void;
  quizLenght: number;
  answers: IAnswer[];
  state: any;
  question: string;
}

export const ActiveQuiz = (props: IProps): JSX.Element => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp; {props.question}
      </span>
      <small>
        {props.answerNumber} из {props.quizLenght}
      </small>
    </p>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
);
