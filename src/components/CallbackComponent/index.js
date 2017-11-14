import React, {Component} from 'react'
import {render} from 'react-dom'

// Extends React.Compoent
class CallbackComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      "hashFragment": window.location.hash 
    };
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
