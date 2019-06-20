import React, { Component } from 'react'

import './SignUp.scss'

class StepTwo extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.weightChange = this.weightChange.bind(this)
    this.goalChange = this.goalChange.bind(this)

    this.state = {
      weightErrors: true,
      goalErrors: true
    }
  }

  submit (e) {
    e.preventDefault()
    const { weight, goalWeight } = e.target.elements
    const { submitStepTwo } = this.props

    const data = {
      weight: weight.value,
      goalWeight: goalWeight.value
    }

    submitStepTwo(data)
  }

  weightChange (e) {
    const value = e.target.value

    this.setState({
      weightErrors: !value
    })
  }

  goalChange (e) {
    const value = e.target.value

    this.setState({
      goalErrors: !value
    })
  }

  render () {
    const { weightErrors, goalErrors } = this.state
    const errors = weightErrors || goalErrors

    return (
      <div className='stepTwo'>
        <form className='signUpForm' onSubmit={this.submit}>
          <h2>What is your current weight and your goal weight?</h2>
          <div className='inputGroup'>
            <h1>Your current weight</h1>
            <input type='number' name='weight' className='userInput' placeholder='120' onChange={this.weightChange} />
          </div>
          <div className='inputGroup'>
            <h1>Your goal weight</h1>
            <input type='number' name='goalWeight' className='userInput' placeholder='100' onChange={this.goalChange} />
          </div>
          <div className='submitContainer'>
            <button type='submit' className={`submit ${errors ? 'disabled' : 'enabled'}`}>Next Step</button>
          </div>
        </form>
      </div>
    )
  }
}

export default StepTwo
