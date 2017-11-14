import React, {Component} from 'react'
import {render} from 'react-dom'
import jwtDecode from 'jwt-decode'

// Extends React.Compoent
class CallbackComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      "hashFragment": window.location.hash,
      "decodedJWT":jwtDecode(window.location.hash)
    };
    console.log("JWT: %o",this.state.decodedJWT);
  }

  render(){
    return <div>
      this is for callbacks 
      <ul>
        <li>{this.state.hashFragment}</li>
      </ul>
    </div>;
  }

}

export default CallbackComponent;
