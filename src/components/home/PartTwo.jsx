import React, { Component } from 'react'
import Background from '../../assets/images/backgrounds/man-fat.png'
import PrizeBck from '../../assets/images/backgrounds/Dots.svg'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { openRegistration } from '../signup/actions'

class PartTwo extends Component {
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

    const prizeBck = {
      backgroundImage: `url(${PrizeBck})`
    }

    return (
      <div className='section partTwo' style={style}>
        <div className='content'>
          <h1>The more you weigh, the more you can get paid.</h1>
          <p className='description'>Your prize range:</p>
          <p className='prize' style={prizeBck}>€6,755 - €10,000</p>
          <p className='tip'>*We need to know few things  to calculate your final prize.</p>
          <Link className='cta' to={'/register'} onClick={this.openRegistration}>
            Calculate your prize!
          </Link>
        </div>
      </div>
    )
  }
}

export default connect()(PartTwo)