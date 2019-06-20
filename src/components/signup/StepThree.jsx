import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

import './SignUp.scss'

class StepThree extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.selectGender = this.selectGender.bind(this)
    this.valueChange = this.valueChange.bind(this)

    this.state = {
      gender: 'male',
      errors: true,
      touched: false
    }
  }

  selectGender (e) {
    e.preventDefault()

    const gender = e.target.id

    this.setState({
      gender
    })
  }

  valueChange (e) {
    const value = e.target.value

    this.setState({
      touched: true,
      errors: !value || value < 18
    })
  }

  submit (e) {
    e.preventDefault()
    const { age } = e.target.elements
    const { gender } = this.state
    const { submitStepThree } = this.props

    const data = {
      age: age.value,
      gender
    }

    submitStepThree(data)
  }

  render () {
    const { gender, errors, touched } = this.state

    return (
      <div className='stepThree'>
        <form className='signUpForm' onSubmit={this.submit}>
          <h2>Select your gender and setup your age!</h2>
          <h1>Your gender</h1>
          <p className='description'>What is your sex?</p>
          {/* <div className='genderContainer'> */}
            <button className={`gender ${gender === 'male' ? 'active' : ''}`} id='male' onClick={this.selectGender}>
              <FontAwesomeIcon icon={faMars} size='2x' color={`${gender === 'male' ? 'white' : 'black'}`} />
              <span className='genderText'>I'm a man</span>
            </button>
            <button className={`gender ${gender === 'female' ? 'active' : ''}`} id='female' onClick={this.selectGender}>
              <FontAwesomeIcon icon={faVenus} size='2x' color={`${gender === 'female' ? 'white' : 'black'}`} />
              <span className='genderText'>I'm a woman</span>
            </button>
          {/* </div> */}
          <div className='inputGroup'>
            <h1>Your age</h1>
            <input type='number' name='age' className='userInput' placeholder='18' onChange={this.valueChange} />
            {touched && errors && <div className='error'>You need to be 18 years or older</div>}
          </div>
          <div className='submitContainer'>
            <button type='submit' className={`submit ${errors ? 'disabled' : 'enabled'}`}>Next step</button>
          </div>
        </form>
      </div>
    )
  }
}

export default StepThree
