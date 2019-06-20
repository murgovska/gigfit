import React, { Component } from 'react'
import Header from './components/header/Header'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/home/Home'
import SignUp from './components/signup/SignUp'
import Desktop from './components/desktop/Desktop'
import General from './general/General'

import './App.scss'

const mapStateToProps = state => {
  const {
    app: {
      registration
    }
  } = state

  return {
    registration
  }
}

class App extends Component {
  constructor (props) {
    super(props)
  }

  isMobileDevice () {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
  }

  render () {
    const { registration } = this.props
    const mobile = this.isMobileDevice()

    return (
      <div className="app">
        { !mobile
          ? <div className='mobileOnly'>
            <Desktop />
          </div>
          : <div>
            { !registration && <Header /> }
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={SignUp}/>
            <Route path="/general" component={General}/>
          </div>
        }
      </div>
    )
 }
}

export default connect(mapStateToProps)(App)
