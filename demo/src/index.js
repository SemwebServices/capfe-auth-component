import React, {Component} from 'react';
import {render} from 'react-dom';
import {AuthComponent, PrivateRoute, fakeAuth} from '../../src/components/AuthComponent';
import CallbackComponent from '../../src/components/CallbackComponent';
import App from './app';
import { BrowserRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'


// Some inspiration from https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00
//
const history = createHistory();

const store = createStore(
	  // combineReducers({ routerReducer, authReducer }),
	  combineReducers({ routerReducer }),
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

  render() {
    return  <Provider store={this.props.store}>
      <BrowserRouter>
        <div>
          isAuthenticated:{''+this.state.userInfo.isAuthenticated}<br/>
          <App user={this.state.userInfo}/>
        </div>
      </BrowserRouter>
    </Provider>
  }
}

render(<Demo store={store} />, document.querySelector('#demo'))
