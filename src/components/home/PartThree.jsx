import React, { Component } from 'react'
import DailyMail from '../../assets/images/Daily_Mail.svg'

class PartThree extends Component {
  render () {
    return (
      <div className='section partThree'>
        <div className='content'>
          <h2>You’ll love us just as much as these media outlets!</h2>
          <img src={DailyMail} />
          <p className='description'>
            George Loewenstein, a behavioral economist at Carnegie Mellon University who has studied financial incentives and weight loss, says the GiG Fit competition is
          </p>
          <p className='description'>
            "using all the conditions that have been found in the research to be successful."
          </p>
        </div>
      </div>
    )
  }
}

export default PartThree