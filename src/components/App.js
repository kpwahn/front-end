import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import NavigationBar from './NavigationBar';
import Login from './Login';
import Home from './Home';
import BookList from './BookList';
import QuizList from './QuizList';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/book-list" component={BookList} />
            <Route path="/quiz-list" component={QuizList} />
            <Route path="/take-quiz" component={Quiz} />
            <PrivateRoute
              path="/"
              component={Home}
              user={this.props.user}
              />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(App);
