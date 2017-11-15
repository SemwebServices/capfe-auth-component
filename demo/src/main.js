import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {AuthComponent, PrivateRoute, fakeAuth} from '../../src/components/AuthComponent';
import PublicPage from './publicPage';
import ProtectedPage from './protectedPage';
import CallbackComponent from '../../src/components/CallbackComponent';


class Main extends Component {

  render() {
    return <div>
        <Switch>
          <Route user={this.props.user} exact path='/' component={PublicPage} />
          <Route user={this.props.user} path='/callback' component={CallbackComponent} />
          <PrivateRoute user={this.props.user} path="/protected" component={ProtectedPage} />
        </Switch>
    </div>
  }
}

export default Main
