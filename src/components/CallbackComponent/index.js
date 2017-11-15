import React, {Component} from 'react'
import {render} from 'react-dom'
import jwtDecode from 'jwt-decode'

// Extends React.Compoent
// Inspiration from https://github.com/ReactTraining/react-router/blob/master/packages/react-router-redux/examples/AuthExample.js
//
class CallbackComponent extends Component {

  constructor(props) {
    super(props);

    if ( ( window.location.hash != null ) && ( window.location.hash.length > 1 ) ) {
      var decoded_jwt = jwtDecode(window.location.hash);
      if ( decoded_jwt != null ) {

        console.log("JWT: %o this.props:%o",decoded_jwt,this.props);

        if ( props.user ) {
          if ( ( this.state.decodedJWT != null ) && ( this.state.decodedJWT.sub != null ) ) {
            // We need to store user info so that it's available at the top level
            // this.props.user.isAuthenticated = true;
            // this.props.user.displayName = this.state.decodedJWT.displayName;
            // this.props.user.email = this.state.decodedJWT.email;
            // this.props.user.sub = this.state.decodedJWT.sub;
          }
          console.log("Props.user now %o",props.user);
        }
  else {
          console.log("No user");
  }

        this.state = { 
          "hashFragment": window.location.hash,
          "decodedJWT":decoded_jwt
        };

      }
    }
  }

  render(){
    var user_info_block;

    console.log("props: %o",this.props);

    if ( this.props.user != null ) {
      user_info_block = <ul><li>{this.state.hashFragment}</li><li>{this.props.user.email}</li></ul>
    }
    else {
      user_info_block = <ul><li>No user info</li></ul>
    }

    return <div>
      this is for callbacks 
      {user_info_block}
    </div>;
  }

}

const initialState = {
	  isAuthenticated: false
}

export const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true
      }
    case 'AUTH_FAIL':
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
};


export default CallbackComponent;
