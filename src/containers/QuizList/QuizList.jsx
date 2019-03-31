import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.css";
import axios from "axios";

class QuizList extends Component {
  state = {
    quizes: []
  };

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}> {quiz.name}</NavLink>
        </li>
      );
    });
  }

  async componentDidMount() {
    try {
      const responce = await axios.get(
        "https://react-quiz-87fb3.firebaseio.com/quizes.json"
      );
      console.log(responce.data);
      const quizes = [];


      this.setState({
        quizes
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
