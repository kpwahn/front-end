import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';

class NavigationBar extends Component {
  render() {
    console.log(this)
    let logInOut;

    if(this.props.user.loggedIn){
      logInOut = ( <Link to="/login">LOGOUT</Link> );
    } else {
      logInOut = ( <Link to="/login">LOGIN</Link> );
    }

    return (
      <div className="navigationBar">
        <div className="main-link-wrapper">
          <Link to="/" className="main-link">Nav bar</Link>
        </div>
        <div className="links">
          { logInOut }
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(NavigationBar);
