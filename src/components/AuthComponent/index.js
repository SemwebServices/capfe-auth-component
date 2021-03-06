import React, {Component} from 'react'
import {render} from 'react-dom'
import { Route, Redirect } from 'react-router-dom'

// See https://reacttraining.com/react-router/web/example/auth-workflow

// Extends React.Compoent
class AuthComponent extends Component {

  render(){
    return <div>
      <h1>This is the auth component{this.props.name}</h1>
      ...hello...
    </div>;
  }

}

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (

  // Use user from store instead
  rest.user.isAuthenticated ? (
        // User is authenticated -- send directly to component
        <Component {...props}/>
  ) : window.location.href='https://apps.semweb.co/auth/prompt?flow=http://localhost:3000/callback'
      // (
        // User is not authenticated -- redirect to auth service
        // <Redirect to={{
        //   pathname: '/login',
        //   state: { from: props.location }
        // }}/>
      // window.location.href='https://apps.semweb.co/auth/prompt?flow=http://localhost:3000/callback';
      // )
  )}/>
)


export default AuthComponent;
