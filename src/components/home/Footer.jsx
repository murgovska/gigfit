import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GiGFiT from '../../assets/images/GiG_FIT.svg'
import { SOCIAL_MEDIA, MENU_ITEMS } from '../menu/Menu'

const FOOTER_ITEMS = [
  'Best diet to lose weight',
  'Best diet for me',
  'How to start a diet',
  'Dietbet review',
  'Best low carb diet',
  'HealthyWage review',
  'Best weight loss apps',
  'Free weight loss apps',
  'Best foods for weight loss',
  'Weight loss challenge',
  'Best app for weight loss',
  'Weight loss calculator'
]

const FOOTER_ICONS = [
  {
    id: 'footer01',
    url: require('../../assets/images/icons/McAfee.svg')
  },
  {
    id: 'footer02',
    url: require('../../assets/images/icons/18_Plus.svg')
  },
  {
    id: 'footer03',
    url: require('../../assets/images/icons/European_Commision.svg')
  }
]

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className='content section'>
          <div className='top'>
            <h2>Tools and tips for faster weight loss</h2>
            <div className='items'>
              { FOOTER_ITEMS.map((item, index) => {
                return (
                  <div key={index} className='item'><Link key={item.id} to={'/general'}>{item}</Link></div>
                )
              })}
            </div>
          </div>
          <div className='bottom'>
            <div className='section1'>
              <img src={GiGFiT} className='logo' />
              <div className='socialMediaIcons'>
                { SOCIAL_MEDIA.map((icon) => {
                  return (
                    <img key={icon.id} src={icon.icon} />
                  )
                })}
              </div>
            </div>
            <div className='section2'>
            { MENU_ITEMS.map((item) => {
              return (
                <Link key={item.id} to={'/general'}>
                  <span className='item'>{item.name}</span>
                </Link>
              )
            })}
            </div>
            <div className='section3'>
              { FOOTER_ICONS.map((icon) => {
                return (
                  <img key={icon.id} src={icon.url} />
                )
              })
              }
            </div>
            <div className='copyrights'>©GiG Fit, a product by Gaming Innovation Group</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer