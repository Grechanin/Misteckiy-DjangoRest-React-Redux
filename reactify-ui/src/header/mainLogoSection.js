import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainLogoSection extends Component {
  render () {
    const { logo } = this.props
    return (
      <div className='header main-background-color d-none d-md-block d-xl-block'>
        <div className='navbar-header d-none d-md-block d-xl-block'>
          <div className='container text-center'>
            <div className=' navbar-brand-container'>
              <Link className='navbar-brand' to={{
                pathname: '/',
                state: { fromDashboard: false }
              }} ><img src={logo} alt='' />Misteckiy Dim</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainLogoSection
