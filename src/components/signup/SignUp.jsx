import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openRegistration, closeRegistration } from './actions'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'
import { withRouter } from 'react-router-dom'
import Registered from './Registered'

import './SignUp.scss'

const STEP_TITLES = {
  1: 'Calculate your prize!',
  2: 'Current and goal weight',
  3: 'Gender and age',
  4: 'Height and deadline',
  5: 'Account details',
  6: 'Account details'
}

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.submitStepOne = this.submitStepOne.bind(this)
    this.submitStepTwo = this.submitStepTwo.bind(this)
    this.submitStepThree = this.submitStepThree.bind(this)
    this.submitStepFour = this.submitStepFour.bind(this)
    this.submitStepFive = this.submitStepFive.bind(this)
    this.close = this.close.bind(this)
    this.goBack = this.goBack.bind(this)
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
    this.addEventListeners = this.addEventListeners.bind(this)

    this.state = {
      step: 1,
      title: STEP_TITLES[1],
      user: {
        bet: '',
        weight: '',
        goalWeight: '',
        gender: '',
        age: '',
        height: '',
        deadline: '',
        name: '',
        email: '',
        password: '',
        min: '',
        max: ''
      }
    }
  }

  componentWillMount () {
    const { dispatch } = this.props

    dispatch(openRegistration())
  }

  componentDidMount () {
    // this.addEventListeners()
  }

  addEventListeners () {
    const inputs = document.getElementsByClassName('userInput')

    if (inputs) {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', this.focus)
        inputs[i].addEventListener('blur', this.blur)
      }
    }
  }

  componentWillUnmount () {
    const { dispatch } = this.props

    dispatch(closeRegistration())
  }

  focus () {
    if (document.activeElement.tagName === 'INPUT') {
      const submit = document.getElementsByClassName('submit')

      if (submit) {
        submit[0].classList.add('focus')
      }
    }
  }

  blur () {
    if (document.activeElement.tagName === 'INPUT') {
      const submit = document.getElementsByClassName('submit')

      if (submit && submit[0].classList.contains('focus')) {
        submit[0].classList.remove('focus')
      }
    }
  }

  close () {
    this.props.history.goBack()
  }

  goBack () {
    this.setState({
      ...this.state,
      step: this.state.step - 1,
      title: STEP_TITLES[Number(this.state.step - 1)]
    })

    this.addEventListeners()
  }

  submitStepOne (data) {
    const { user } = this.state

    this.setState({
      ...this.state,
      user: {
        ...user,
        bet: data.bet,
        min: data.min,
        max: data.max
      },
      step: 2,
      title: STEP_TITLES[2]
    })

    window.scrollTo(0, 0)
  }

  submitStepTwo (data) {
    const { user } = this.state

    this.setState({
      ...this.state,
      user: {
        ...user,
        weight: data.weight,
        goalWeight: data.goalWeight,
      },
      step: 3,
      title: STEP_TITLES[3]
    })

    window.scrollTo(0, 0)
  }

  submitStepThree (data) {
    const { user } = this.state

    this.setState({
      ...this.state,
      user: {
        ...user,
        gender: data.gender,
        age: data.age
      },
      step: 4,
      title: STEP_TITLES[4]
    })

    window.scrollTo(0, 0)
  }

  submitStepFour (data) {
    const { user } = this.state

    this.setState({
      ...this.state,
      user: {
        ...user,
        height: data.height,
        deadline: data.deadline,
      },
      step: 5,
      title: STEP_TITLES[5]
    })

    window.scrollTo(0, 0)
  }

  submitStepFive (data) {
    const { user } = this.state

    this.setState({
      ...this.state,
      user: {
        ...user,
        name: data.name,
        email: data.email,
        password: data.password
      },
      step: 6,
      title: STEP_TITLES[5]
    })

    window.scrollTo(0, 0)
    localStorage.setItem('user', JSON.stringify(this.state.user))
  }

  render () {
    const { step, title } = this.state

    const props1 = {
      ...this.state.user,
      submitStepOne: this.submitStepOne
    }

    const props2 = {
      ...this.state.user,
      submitStepTwo: this.submitStepTwo
    }

    const props3 = {
      ...this.state.user,
      submitStepThree: this.submitStepThree
    }

    const props4 = {
      ...this.state.user,
      submitStepFour: this.submitStepFour
    }

    const props5 = {
      ...this.state.user,
      submitStepFive: this.submitStepFive
    }

    return (
      <div className='signUp'>
        <div className='header'>
          <span className='step'>Step {step}</span>
          <span className='title'>{title}</span>
          <span className='icon' onClick={this.close}>
            <img src={require('../../assets/images/icons/Close.svg')} />
          </span>
          { (step !==1 && step !== 6) && <span className='back' onClick={this.goBack}>
            <img src={require('../../assets/images/icons/Back.svg')} />
          </span> }
        </div>
        { step === 1 && <StepOne {...props1} /> }
        { step === 2 && <StepTwo {...props2} /> }
        { step === 3 && <StepThree {...props3} /> }
        { step === 4 && <StepFour {...props4} /> }
        { step === 5 && <StepFive {...props5} /> }
        { step === 6 && <Registered {...this.state.user} /> }
      </div>
    )
  }
}

export default withRouter(connect()(SignUp))
