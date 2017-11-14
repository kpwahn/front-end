import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Login from '../Login';

// THIS CODE DOES THE SAME THING (Well, maybe even better?) AS THE CODE BELOW
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     rest.user.loggedIn ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )

// THIS CODE IS JUST EASIER TO UNDERSTAND
const PrivateRoute = (props) => {
  let Component = props.component;
  let returnedComponent;

  if (props.user.loggedIn/*true*/) {
    returnedComponent = ( <Component {...props}/> );
  } else {
    returnedComponent = (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    );
  }

  return (
    <Route path={props.path} render={() => returnedComponent} />
  );
}

export default PrivateRoute;
