import React, { Component } from 'react'

import './SignUp.scss'

class StepFour extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.validateHeight = this.validateHeight.bind(this)
    this.validateDeadline = this.validateDeadline.bind(this)

    this.state = {
      heightErrors: true,
      deadlineErrors: true
    }
  }

  submit (e) {
    e.preventDefault()
    const { height, deadline } = e.target.elements
    const { submitStepFour } = this.props

    const data = {
      height: height.value,
      deadline: deadline.value
    }

    submitStepFour(data)
  }

  validateHeight (e) {
    const value = e.target.value

    this.setState({
      heightErrors: !value
    })
  }

  validateDeadline (e) {
    const value = e.target.value

    this.setState({
      deadlineErrors: !value
    })
  }

  render () {
    const { heightErrors, deadlineErrors } = this.state
    const errors = heightErrors || deadlineErrors

    return (
      <div className='stepFour'>
        <form className='signUpForm' onSubmit={this.submit}>
          <h2>How tall are you and what is your deadline?</h2>
          <div className='inputGroup'>
            <h1>Height</h1>
            <input type='number' name='height' className='userInput' placeholder='170cm' onChange={this.validateHeight} />
          </div>
          <div className='inputGroup'>
            <h1>Deadline</h1>
            <input type='number' name='deadline' className='userInput' placeholder='9 months' onChange={this.validateDeadline} />
          </div>
          <div className='submitContainer'>
            <button type='submit' className={`submit ${errors ? 'disabled' : 'enabled'}`}>Next Step</button>
          </div>
        </form>
      </div>
    )
  }
}

export default StepFour
