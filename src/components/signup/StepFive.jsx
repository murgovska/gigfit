import React, { Component } from 'react'

import './SignUp.scss'

class StepFive extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.validateName = this.validateName.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validatePass = this.validatePass.bind(this)

    this.state = {
      nameErrors: true,
      emailErrors: true,
      passErrors: true
    }
  }

  submit (e) {
    e.preventDefault()
    const { name, email, password } = e.target.elements
    const { submitStepFive } = this.props

    const data = {
      name: name.value,
      email: email.value,
      password: password.value
    }

    submitStepFive(data)
  }

  validateName (e) {
    const value = e.target.value

    this.setState({
      nameErrors: !value
    })
  }

  validateEmail (e) {
    const value = e.target.value

    this.setState({
      emailErrors: !value
    })
  }

  validatePass (e) {
    const value = e.target.value

    this.setState({
      passErrors: !value
    })
  }

  render () {
    const { nameErrors, emailErrors, passErrors } = this.state
    const errors = nameErrors || emailErrors || passErrors

    return (
      <div className='stepFive'>
        <form className='signUpForm' onSubmit={this.submit}>
          <h2>We are ready to calculate your prize!</h2>
          <h1>Continue with</h1>
          <div className='signIn'>
            <span className='google'>
              <img src={require('../../assets/images/icons/Gogle.svg')} />
              <span className='text'>Google</span>
            </span>
            <span className='facebook'>
              <img src={require('../../assets/images/icons/FacebookWhite.svg')} />
              <span className='text'>Facebook</span>
            </span>
          </div>
          <div className='description'>or create your account</div>
          <div className='inputGroup'>
            <input type='text' name='name' className='userInput' placeholder='Full Name' onChange={this.validateName} />
            <input type='text' name='email' className='userInput' placeholder='Email' onChange={this.validateEmail} />
            <input type='password' name='password' className='userInput' placeholder='Password' onChange={this.validatePass} />
          </div>
          <div className='submitContainer'>
            <button type='submit' className={`submit ${errors ? 'disabled' : 'enabled'}`}>Calculate your prize!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default StepFive
