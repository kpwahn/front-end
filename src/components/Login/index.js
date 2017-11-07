import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { login } from './actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.mySubmit = this.mySubmit.bind(this);
  }

  mySubmit() {
    this.props.login(this.props.formValues);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.mySubmit)}>
        <div>
          <label>Email</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="email"/>
          </div>
          <label>Password</label>
          <div>
            <Field name="password" component="input" type="password" placeholder="password"/>
          </div>
        </div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  if( state.form.login ) {
    return {
      user: state.user,
      formValues: state.form.login.values
    }
  } else {
    return {
      user: state.user
    }
  }

};

Login = connect(
  mapStateToProps,
  {login}
)(Login);

export default reduxForm({
  form: 'login'
})(Login);
