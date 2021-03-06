import React, {Component} from 'react'
import {render} from 'react-dom'
import jwtDecode from 'jwt-decode'
import store from 'store';

// Extends React.Compoent
class CallbackComponent extends Component {

  constructor(props) {
    super(props);

    if ( ( window.location.hash != null ) && ( window.location.hash.length > 1 ) ) {
      var decoded_jwt = jwtDecode(window.location.hash);
      if ( decoded_jwt != null ) {

        this.state = { 
          "hashFragment": window.location.hash,
          "decodedJWT":jwtDecode(window.location.hash),
          "userInfo":props.user
        };

        console.log("JWT: %o this.props:%o",this.state.decodedJWT,this.props);

        if ( ( this.state.decodedJWT != null ) && ( this.state.decodedJWT.sub != null ) ) {
            // see https://github.com/scotch-io/react-router-course
            store.set("loggedin",true);
            store.set("userInfo",this.state.decodedJWT)
            // this.props.user.isAuthenticated = true;
            // this.props.user.displayName = this.state.decodedJWT.displayName;
            // this.props.user.email = this.state.decodedJWT.email;
            // this.props.user.sub = this.state.decodedJWT.sub;
        }
        else {
          store.set("loggedIn",false);
          store.remove("userInfo");
        }
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

export default CallbackComponent;
