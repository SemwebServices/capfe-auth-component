import React, {Component} from 'react'
import {render} from 'react-dom'

// Extends React.Compoent
class AuthComponent extends Component {

  render(){
    return <div>
      <h1>This is the auth component{this.props.name}</h1>
      ...hello...
    </div>;
  }

}

export default AuthComponent;
