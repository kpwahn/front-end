import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import NavigationBar from './NavigationBar';
import Login from './Login';
import Home from './Home';
import QuizList from './QuizList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute
              path="/quiz-list"
              component={QuizList}
              user={this.props.user}
            />
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
