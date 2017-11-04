import React, {Component} from 'react'
import {render} from 'react-dom'
import AuthComponent from '../../src/components/AuthComponent'

class Demo extends Component {
  render() {
    return <div>
      <h1>auth-component-2 Demo</h1>
      one
      <AuthComponent>a</AuthComponent>
      two
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
