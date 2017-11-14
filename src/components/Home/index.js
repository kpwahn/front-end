import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>Home page</h3>
        <Link to="/quiz-list">Take Quiz</Link>
      </div>
    );
  }
}

export default Home;
