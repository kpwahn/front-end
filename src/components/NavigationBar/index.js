import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigationBar">
        <div className="main-link-wrapper">
          <Link to="/" className="main-link">Nav bar</Link>
        </div>
        <div className="links">
          <Link to="/login">LOGIN</Link>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
