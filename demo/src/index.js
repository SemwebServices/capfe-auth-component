import React, {Component} from 'react';
import {render} from 'react-dom';
import {AuthComponent, PrivateRoute, fakeAuth} from '../../src/components/AuthComponent';
import CallbackComponent from '../../src/components/CallbackComponent';
import App from './app';
import PublicPage from './publicPage';
import ProtectedPage from './protectedPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
    return <div>
          <App user={this.state.userInfo}>
            <BrowserRouter>
              <Switch>
                <Route path='/callback' component={CallbackComponent} />
                <Route path='/' component={PublicPage} />
                <PrivateRoute path="/protected" component={ProtectedPage}/>
              </Switch>
            </BrowserRouter>
          </App>
       </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
