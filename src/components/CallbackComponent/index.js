import React, {Component} from 'react'
import {render} from 'react-dom'
import jwtDecode from 'jwt-decode'
import {connect} from 'react-redux'

// Extends React.Compoent
// Inspiration from https://github.com/ReactTraining/react-router/blob/master/packages/react-router-redux/examples/AuthExample.js
//
class CallbackComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    let decoded_jwt = null;
    if ( ( window.location.hash != null ) && ( window.location.hash.length > 1 ) ) {
      decoded_jwt = jwtDecode(window.location.hash);
      if ( decoded_jwt != null ) {
        console.log("JWT: %o this.props:%o. DISPATCH AUTH_SUCCESS",decoded_jwt,this.props);
        this.props.loginSuccess(decoded_jwt);
      }
    }
  }

  render(){
    console.log("props: %o",this.props);
    return <div></div>;
  }

}

const initialState = {
	  isAuthenticated: false
}

export const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      console.log("Process AUTH_SUCCESS %o",action);
      return {
        ...state,
        isAuthenticated: true,
        user:action.user
      }
    case 'AUTH_FAIL':
      return {
        ...state,
        isAuthenticated: false,
        user:null
      }
    default:
      return state
  }
};

const mapStateToProps = state => {
  console.log("mapStateToProps");
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // When we login, we call this.loginSuccess(user) to dispatch the appropriate msg
    loginSuccess : (user_param) => dispatch({
      type: 'AUTH_SUCCESS', 
      user: user_param
    })
  }
}

// export default CallbackComponent;
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CallbackComponent)

