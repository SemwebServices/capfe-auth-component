import React, {Component} from 'react';
import {render} from 'react-dom';
import {AuthComponent, PrivateRoute, fakeAuth} from '../../src/components/AuthComponent';
import CallbackComponent from '../../src/components/CallbackComponent';
import App from './app';
import { BrowserRouter } from 'react-router-dom'


class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        isAuthenticated:false,
        wibble:"This is wibble"
      }
    };
  }

  render() {
    return <BrowserRouter>
      <div>
        isAuthenticated:{''+this.state.userInfo.isAuthenticated}<br/>
        <App user={this.state.userInfo}/>
      </div>
      </BrowserRouter>
  }
}

render(<Demo/>, document.querySelector('#demo'))
