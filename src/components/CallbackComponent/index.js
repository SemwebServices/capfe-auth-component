import React, {Component} from 'react'
import {render} from 'react-dom'

// Extends React.Compoent
class CallbackComponent extends Component {

  // this.props.location.query

  render(){
    return <div>
      this is for callbacks 
      <ul>
        <li>{this.props.location ? this.props.location.query : 'no this.props.location.query'}</li>
        <li>{this.props.to ? this.props.to.query : 'no this.props.to.query'}</li>
        <li>{window.location ? window.location.hash : 'No windown.location.hash'}</li>
      </ul>
    </div>;
  }

}

export default CallbackComponent;
