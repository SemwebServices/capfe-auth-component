import React, {Component} from 'react';
import {render} from 'react-dom';
import AuthComponent from '../../src/components/AuthComponent';
import CallbackComponent from '../../src/components/CallbackComponent';
import App from './app';
import PublicPage from './publicPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class Demo extends Component {
  render() {
    return <div>
          <App>
            <BrowserRouter>
              <Switch>
                <Route path='/callback' component={CallbackComponent} />
                <Route path='/' component={PublicPage} />
              </Switch>
            </BrowserRouter>
          </App>
       </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
