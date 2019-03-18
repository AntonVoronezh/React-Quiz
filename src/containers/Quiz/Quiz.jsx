import React, { Component } from "react";
import classes from "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.jsx";

class Quiz extends Component {
  state = {
    quiz: []
  };

  render() {
    return (
      <div className={classes.Quiz}>
       
        <div className={classes.QiuzWrapper}>
         <h1>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    );
  }
}

export default Quiz;
