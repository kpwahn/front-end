import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import BookList from './Books/BookList';
import QuizList from './Quizzes/QuizList';
import Quiz from './Quizzes/Quiz';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/book-list" component={BookList} />
            <Route path="/quiz-list" component={QuizList} />
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
