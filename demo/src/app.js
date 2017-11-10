import React, {Component} from 'react'
import {render} from 'react-dom'

class App extends Component {

  render() {
    return <div>
      <h1>The app</h1>
      userInfo:: {this.props.user.wibble}
      <p>This is boilerplate</p>
      Now comes the actual children::
      {this.props.children}
      <p>End of content, back to boilerplate</p>
    </div>
  }
}

export default App
