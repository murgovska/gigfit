import React, { Component } from 'react'
import Background from '../../assets/images/backgrounds/man-muscular.png'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { openRegistration } from '../signup/actions'

class PartFour extends Component {
  constructor (props) {
    super(props)

    this.openRegistration = this.openRegistration.bind(this)
  }

  openRegistration () {
    const { dispatch } = this.props

    dispatch(openRegistration())
  }

  render () {
    const style = {
      backgroundImage: `url(${Background})`
    }

    return (
      <div className='section partFour' style={style}>
        <div className='content'>
          <h1>Hack away the fat with GiG Fit!</h1>
          <p className='description'>
            With GIG Fit, you set your own diet goals, and get paid when you meet them!</p>
            <Link className='cta' to={'/register'} onClick={this.openRegistration}>
              Calculate your prize!
            </Link>
        </div>
      </div>
    )
  }
}

export default connect()(PartFour)