import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SocialNetworks from './socialNetworks'

class Footer extends Component {
  render () {
    return (
      <footer className='footer main-background-color'>
        <div className='container'>
          <nav className='navbar navbar-expand-md footer-nav'>
            <Link className='navbar-brand-footer' to={{
              pathname: '/',
              state: { fromDashboard: false }
            }} >&#169; МИСТЕЦЬКИЙ ДІМ</Link>

            <div className='header-social-networks social-networks text-left d-none d-md-block d-xl-block'>
              <SocialNetworks />
            </div>

          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
