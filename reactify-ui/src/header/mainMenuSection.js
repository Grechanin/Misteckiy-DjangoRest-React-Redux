import React, { Component } from 'react'
import './css/mainMenuSection.css'
import { Link } from 'react-router-dom'
import SocialNetworks from '../snipets/socialNetworks'

class MainMenuSection extends Component {
  render () {
    const { logo } = this.props
    return (
      <nav className='navbar navbar-expand-md navbar-dark main-background-color'>
        <div className='container'>

          <Link className='navbar-brand d-md-none d-xl-none navbar-header-xs' to={{
            pathname: '/',
            state: { fromDashboard: false }
          }} ><img className='navbar-header-xs-brand' src={logo} alt='' />Misteckiy Dim</Link>

          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
            <ul className='navbar-nav main-menu mx-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={{
                  pathname: '/',
                  state: { fromDashboard: false }
                }} >Головна</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={{
                  pathname: '/about_us/',
                  state: { fromDashboard: false }
                }} >Про нас</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={{
                  pathname: '/projects/',
                  state: { fromDashboard: false }
                }} >Проекти</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={{
                  pathname: '/gallery/',
                  state: { fromDashboard: false }
                }} >Галерея</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={{
                  pathname: '/shop/',
                  state: { fromDashboard: false }
                }} >Магазин</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={{
                  pathname: '/prices/',
                  state: { fromDashboard: false }
                }} >Ціни</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={{
                  pathname: '/contacts/',
                  state: { fromDashboard: false }
                }} >Контакти</Link>
              </li>

              <li className='nav-item d-md-none d-xl-none'>
                <div className='social-networks'>
                  <SocialNetworks />
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default MainMenuSection
