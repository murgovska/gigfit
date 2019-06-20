import React, { Component } from 'react'
import Background from '../../assets/images/backgrounds/Dots.svg'

import './SignUp.scss'

class StepOne extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.calculatePrize = this.calculatePrize.bind(this)

    this.state = {
      min: 20,
      max: 40,
      multiplier: 50,
      errors: true
    }
  }

  submit (e) {
    e.preventDefault()
    const { bet } = e.target.elements
    const { submitStepOne } = this.props
    const { min, max } = this.state

    const data = {
      bet: bet.value,
      min: Number(min * bet.value),
      max: Number(max * bet.value)
    }

    submitStepOne(data)
  }

  calculatePrize (e) {
    const value = e.target.value

    this.setState({
      ...this.state,
      multiplier: value,
      errors: !value
    })
  }


  render () {
    const { min, max, multiplier, errors } = this.state

    const style = {
      backgroundImage: `url(${Background})`
    }

    return (
      <div className='stepOne'>
        <form className='signUpForm' onSubmit={this.submit}>
          <h2>We need to know few things to calculate your final prize.</h2>
          <div className='prize' style={style}>
            <div className='prizeTitle'>Your prize range:</div>
            <div className='prizeValue'>€{Number(min * multiplier)} - €{Number(max * multiplier)}</div>
          </div>
          <div className='inputGroup'>
            <h1>Your bet amount</h1>
            <span className='userLabel'>How much do you want to bet/month?</span>
            <input type='text' name='bet' className='userInput' placeholder='50' onChange={this.calculatePrize} />
          </div>
          <div className='submitContainer'>
            <button type='submit' className={`submit ${errors ? 'disabled' : 'enabled'}`}>Next Step</button>
          </div>
        </form>
      </div>
    )
  }
}

export default StepOne
