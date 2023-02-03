import Message from './components/Message/index'
import LogIn from './components/Login/index'
import LogOut from './components/Logout/index.js'

import {Component} from 'react'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <Message />
          <LogIn />
          <LogOut />
        </div>
      </div>
    )
  }
}
export default Home
