import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout.jsx";
import Quiz from "./containers/Quiz/Quiz.jsx";
import Auth from "./containers/Auth/Auth.jsx";
import QuizCreator from "./containers/QuizCreator/QuizCreator.jsx";
import QuizList from "./containers/QuizList/QuizList.jsx";
import Logout from "./components/Logout/Logout.jsx";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {autoLogin} from './store/actions/auth'

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" exact component={QuizList} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={QuizList} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
