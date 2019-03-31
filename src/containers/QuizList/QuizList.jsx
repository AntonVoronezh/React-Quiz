import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.css";
import Loader from "../../components/UI/Loader/Loader.jsx";
import axios from "axios";

class QuizList extends Component {
  state = {
    quizes: [],
    loading:true
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

      Object.keys(responce.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест ${index + 1}`
        });
      });

      this.setState({
        quizes,
        loading: false
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
          {
            this.state.loading
            ? <Loader />
            : <ul>{this.renderQuizes()}</ul>
          }
          
        </div>
      </div>
    );
  }
}

export default QuizList;
