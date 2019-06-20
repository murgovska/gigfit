import React, { Component } from 'react'
import Menu from '../menu/Menu'
import GiGFiT from '../../assets/images/GiG_FIT.svg'
import { Link } from 'react-router-dom'

import './Header.scss'

class Header extends Component {
  render () {
    return (
      <div className='header transparent'>
        <div>
          <Link to={'/'}>
            <img src={GiGFiT} className='logo' />
          </Link>
        </div>
        <Menu />
      </div>
    )
  }
}

export default Header
