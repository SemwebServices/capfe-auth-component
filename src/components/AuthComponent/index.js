import React, {Component} from 'react'
import {render} from 'react-dom'
import { Route, Redirect } from 'react-router-dom'

// See https://reacttraining.com/react-router/web/example/auth-workflow

// class PrivateRouteContainer extends React.Component {
//
//   render() {
//      const {
//        isAuthenticated,
//        component: Component,
//        ...props
//      } = this.props
//      
//      return <Route {...props}
//                    render={props =>
//                    isAuthenticated ?  <Component {...props}/> : window.location.href='https://apps.semweb.co/auth/prompt?flow=http://localhost:3000/callback' } />
//   }
//
// }
//
// const PrivateRoute = connect(state => ({
//     isAuthenticated: state.authReducer.isAuthenticated
// }))(PrivateRouteContainer)

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (

  // rest.user.isAuthenticated ? (
  // ToDo: Get usAuthenticated from passed in state
  false ? (
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
