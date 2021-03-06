import React, { Component } from "react";
import { connect } from "react-redux";

// @ts-ignore
import classes from "./Quiz.css";

import {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz,
} from "../../store/actions/quiz";
import { Loader } from "../../components/UI/Loader/Loader";
import {
  FinishedQuiz,
  IQuiz,
} from "../../components/FinishedQuiz/FinishedQuiz";
import { ActiveQuiz } from "../../components/ActiveQuiz/ActiveQuiz";

interface IProps {
  fetchQuizById: (i: number) => void;
  match: any;
  retryQuiz: () => void;
  isFinished: boolean;
  loading: boolean;
  quiz: IQuiz[];
  results: string;
  activeQuestion: number;
  quizAnswerClick: (id: number) => void;
  answerState: any;
}

class Quiz extends Component<IProps> {
  componentDidMount(): void {
    this.props.fetchQuizById(this.props.match.params.id);
  }

  componentWillUnmount(): void {
    this.props.retryQuiz();
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QiuzWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.props.loading || !this.props.quiz ? (
            <Loader />
          ) : this.props.isFinished ? (
            <FinishedQuiz
              results={this.props.results}
              quiz={this.props.quiz}
              onRetry={this.props.retryQuiz}
            />
          ) : (
            <ActiveQuiz
              answers={this.props.quiz[this.props.activeQuestion].answers}
              question={this.props.quiz[this.props.activeQuestion].question}
              onAnswerClick={this.props.quizAnswerClick}
              quizLenght={this.props.quiz.length}
              answerNumber={this.props.activeQuestion + 1}
              state={this.props.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: (id) => dispatch(fetchQuizById(id)),
    quizAnswerClick: (answerId) => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
