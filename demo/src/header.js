import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router-dom'

class Header extends Component {

  render() {
    return <div>
      <h1>The app</h1>
      <div>
        <li><Link to="/">Root</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
        <li>userInfo:: {this.props.user.wibble}</li>
      </div>
    </div>
  }
}

export default Header
