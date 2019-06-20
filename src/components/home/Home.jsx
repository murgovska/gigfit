import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import PartOne from './PartOne'
import PartTwo from './PartTwo'
import PartThree from './PartThree'
import PartFour from './PartFour'
import PartFive from './PartFive'
import PartSix from './PartSix'
import Footer from './Footer'
import Background from '../../assets/images/backgrounds/gir-curly.png'
import { openRegistration } from '../signup/actions'

import './Home.scss'

class Home extends Component {
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
      <div className='home'>
        <div className='mainContent' style={style}>
          <div className='content'>
            <div className='watchVideo'>
              <a href='https://drive.google.com/file/d/1USQl0R9zlMGuE7DvdwK-uhdL2lgAPrXn/view' target='_blank'>
                <span className='watch'>
                  <FontAwesomeIcon icon={faPlay} size='1x' color='black' />
                </span>
                <span className='watchText'>
                  Watch Video
                </span>
              </a>
            </div>
            <h1 className='title'>Tired of dragging those extra kilos with you?</h1>
            <p className='description'>
              Trade them in for extra money in your pocket with GiG Fit.
            </p>
            <Link className='cta' to={'/register'} onClick={this.openRegistration}>
              Calculate your prize!
            </Link>
          </div>
        </div>
        {/* SEO CONTENT */}
        <div className='SEOContent'>
          <PartOne />
          <PartTwo />
          <PartThree />
          <PartFour />
          <PartFive />
          <PartSix />
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect()(Home)
