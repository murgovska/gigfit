import React, { Component } from 'react'
import Background from '../../assets/images/backgrounds/Dots.svg'

import './SignUp.scss'

class Registered extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (e) {
    e.preventDefault()
    const { bet } = e.target.elements
    const { submitStepOne } = this.props

    const data = {
      bet: bet.value,
    }

    submitStepOne(data)
  }


  render () {
    const { name, min, max } = this.props
    const style = {
      backgroundImage: `url(${Background})`
    }

    let nameInitial = ''
    let surnameInitial = ''
    let words = []

    if (name) {
      words = name.split(' ')

      if (words[0]) nameInitial = words[0].charAt(0)

      if (words[1]) surnameInitial = words[1].charAt(0)
    }

    return (
      <div className='registered'>
        <div className='user'>
          {nameInitial}{surnameInitial}
        </div>
        <h2>Welcome {words[0]}, Its time to be fit!</h2>
        <h1>Your prize</h1>
        <p className='description'>Calculated based on your settings</p>
        <div className='prize' style={style}>
          <div className='prizeValue'>€{(min + max) / 2}</div>
        </div>
        <div className='submitContainer'>
          <button type='submit' className='submit'>Make my bet</button>
        </div>
        <p className='description profile'>Edit my profile</p>
      </div>
    )
  }
}

export default Registered
