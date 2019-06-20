import React, { Component } from 'react'

class PartOne extends Component {
  render () {
    return (
      <div className='section partOne'>
        <div className='item'>
          <h2>How it works?</h2>
          <p className='description'>GIG Fit offers a great opportunity for you to get paid to lose weight, and thus recoup some of those euro's you have spent over the years on candy and fast food.</p>
        </div>

        <div className='item'>
          <span className='icon'>
            <img src={require('../../assets/images/icons/Calculator.svg')} />
          </span>
          <h2>Calculate your prize</h2>
          <p className='description'>GIG Fit offers a great opportunity for you to get paid to lose weight, and thus recoup some of those euro's you have spent over the years on candy and fast food.</p>
        </div>

        <div className='item'>
          <span className='icon'>
            <img src={require('../../assets/images/icons/Money.svg')} />
          </span>
          <h2>Make your bet</h2>
          <p className='description'>GIG Fit offers a great opportunity for you to get paid to lose weight, and thus recoup some of those euro's you have spent over the years on candy and fast food.</p>
        </div>

        <div className='item'>
          <span className='icon'>
            <img src={require('../../assets/images/icons/Measure.svg')} />
          </span>
          <h2>Lose the weight</h2>
          <p className='description'>GIG Fit offers a great opportunity for you to get paid to lose weight, and thus recoup some of those euro's you have spent over the years on candy and fast food.</p>
        </div>

        <div className='item'>
          <span className='icon'>
            <img src={require('../../assets/images/icons/Money_Bag.svg')} />
          </span>
          <h2>Win Money!</h2>
          <p className='description'>GIG Fit offers a great opportunity for you to get paid to lose weight, and thus recoup some of those euro's you have spent over the years on candy and fast food.</p>
        </div>
      </div>
    )
  }
}

export default PartOne