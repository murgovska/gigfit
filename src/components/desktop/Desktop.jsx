import React, { Component } from 'react'
import Background from '../../assets/images/backgrounds/man-phone.png'

import './Desktop.scss'

class Desktop extends Component {
  render () {
    const style = {
      backgroundImage: `url(${Background})`
    }

    return (
      <div className='desktop' style={style}>
        <div className='logo'>
          <img src={require('../../assets/images/GiG_FIT.svg')} />
        </div>
        <div className='text'>
          <h1>Too fat to fit!</h1>
          <p className='description'>Please try a mobile device!</p>
        </div>
        <div className='qrcode'>
          <img src={require('../../assets/images/frame.png')} />
        </div>
      </div>
    )
  }
}

export default Desktop