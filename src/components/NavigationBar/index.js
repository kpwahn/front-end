import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../Login/actions';

import './styles.css';

class NavigationBar extends Component {
  render() {
    let logInOut;

    if(this.props.user.loggedIn){
      logInOut = ( <button onClick={this.props.logoutAction}>LOGOUT</button> );
    } else {
      logInOut = ( <Link to="/login">LOGIN</Link> );
    }

    return (
      <div className="navigationBar">
        <div className="main-link-wrapper">
          <Link to="/quiz-list" className="main-link">Nav bar</Link>
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

export default connect(mapStateToProps, { logoutAction })(NavigationBar);
