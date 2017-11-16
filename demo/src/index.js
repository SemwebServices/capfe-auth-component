// react style guide :: https://github.com/airbnb/javascript/tree/master/react
// JS Style guide :: http://airbnb.io/javascript/

import React, {Component} from 'react';
import {render} from 'react-dom';

import { PrivateRoute } from '../../src/components/AuthComponent';

import {CallbackComponent,
	authReducer } from '../../src/components/CallbackComponent';

import App from './app';

import { BrowserRouter } from 'react-router-dom'

import { connect, 
	 Provider } from 'react-redux'

import { ConnectedRouter, 
	 routerReducer, 
	 routerMiddleware, 
	 push } from 'react-router-redux'

import { createStore, 
	 applyMiddleware, 
	 combineReducers } from 'redux'

import createHistory from 'history/createBrowserHistory'

import { Route, 
	 Switch } from 'react-router'

import { Redirect } from 'react-router-dom'


// Some inspiration from https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00
//
const history = createHistory();

const store = createStore(
	  combineReducers({ routerReducer, authReducer }),
	  applyMiddleware(routerMiddleware(history)),
);

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        isAuthenticated:false,
        wibble:"This is wibble"
      }
    };

    console.log("Demo::constructor(%o)",props);
  }

  // BrowserRouter / ConnectedRouter history={this.props.history}
  render() {
    return  <Provider store={this.props.store}>
      <ConnectedRouter history={this.props.history}>
        <div>
          isAuthenticated:{''+this.state.userInfo.isAuthenticated}<br/>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>
  }
}

render(<Demo store={store} history={history}/>, document.querySelector('#demo'))
