import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router-dom'
import Header from './header';
import Main from './main';

class App extends Component {

  render() {
    return <div>
      <Header user={this.props.user} />
      <Main user={this.props.user} />
    </div>
  }
}

export default App
