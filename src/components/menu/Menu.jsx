import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { openNavigation, closeNavigation } from './actions'
import { connect } from 'react-redux'

import './Menu.scss'

export const MENU_ITEMS = [
  {
    name: 'Sign In',
    id: 'signIn'
  },
  {
    name: 'About Us',
    id: 'aboutUs',
  },
  {
    name: 'Blog',
    id: 'blog',
  },
  {
    name: 'Terms & Conditions',
    id: 'termsConditions',
  },
  {
    name: 'Privacy Policy',
    id: 'privacyPolicy',
  },
  {
    name: 'Sitemap',
    id: 'sitemap',
  }
]

export const SOCIAL_MEDIA = [
  {
    id: 'sc01',
    name: 'Facebook',
    icon: require('../../assets/images/icons/Facebook.svg')
  },
  {
    id: 'sc02',
    name: 'Instagram',
    icon: require('../../assets/images/icons/Instagram.svg')
  },
  {
    id: 'YouTube',
    name: 'Facebook',
    icon: require('../../assets/images/icons/Youtube.svg')
  },
  {
    id: 'Snapchat',
    name: 'Facebook',
    icon: require('../../assets/images/icons/Snapchat.svg')
  }
]

const mapStateToProps = state => {
  const {
    app: {
      navigation
    }
  } = state

  return {
    navigation
  }
}

class Menu extends Component {
  constructor (props) {
    super(props)

    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)

    this.state = {
      showMenuItems: false
    }
  }

  openMenu () {
    const { dispatch } = this.props

    dispatch(openNavigation())
    const header  = document.getElementsByClassName('header')[0]

    if (header) {
      header.classList.add('white')
    }
  }

  closeMenu () {
    const { dispatch } = this.props

    dispatch(closeNavigation())

    const header  = document.getElementsByClassName('header')[0]

    if (header && window.scrollY === 0) {
      header.classList.remove('white')
      header.classList.add('transparent')
    }
  }

  render () {
    const { navigation } = this.props

    return (
      <div>
        <div className='menu'>
          { !navigation ?
            <img src={require('../../assets/images/icons/Burger.svg')} className='icon' onClick={this.openMenu} /> :
            <img src={require('../../assets/images/icons/Close.svg')} className='icon' onClick={this.closeMenu} />
          }
        </div>
        <div className={`menuItems ${navigation ? 'open' : ''}`}>
          { navigation && <div>
            { MENU_ITEMS.map((item) => {
              return (
                <Link key={item.id} id={item.id} to={`/general`} onClick={this.closeMenu}>
                  <span className='item'>
                    {item.name}
                  </span>
                </Link>
              )
            })
            }
            <div className='socialMediaIcons'>
              {SOCIAL_MEDIA.map((icon) => {
                return (
                  <img key={icon.id} src={icon.icon} />
                )
              })}
            </div>
          </div> }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Menu)
