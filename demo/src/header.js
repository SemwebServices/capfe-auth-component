import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Header extends Component {

  render() {
    return <div>
      <h1>The app</h1>
      <div>
        <li><Link to="/">Root</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
        <li>{ this.props.user != null ? this.props.user.email : 'no email ' }</li>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps %o",state);
  return {
    isAuthenticated: state.authReducer ? state.authReducer.isAuthenticated : false,
    user: state.authReducer ? state.authReducer.user : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

// export default Header
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

