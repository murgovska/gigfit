import React, { Component } from 'react'
import { connect } from 'react-redux'

import './General.scss'

class General extends Component {
  render () {
    return (
      <div className='general'>
        <h2>We are busy!</h2>
        <p className='description'>We’re at McDonald’s at the moment, please come back at a later time. </p>
        <div className='gig'>Best Regards, GiG Fit Team</div>
      </div>
    )
  }
}

export default connect()(General)