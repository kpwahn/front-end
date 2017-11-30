import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import './styles.css';

import AppBar from 'material-ui/AppBar';
import BookList from './Books/BookList';
import QuizList from './Quizzes/QuizList';
import Quiz from './Quizzes/Quiz';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="App">
            <AppBar
              showMenuIconButton={false}
              title={<Link to="/book-list" className="title">Nav bar</Link>}
            />
            <Switch>
              <Route path="/book-list" component={BookList} />
              <Route path="/quiz-list" component={QuizList} />
              <Route path="/quiz" component={Quiz} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
