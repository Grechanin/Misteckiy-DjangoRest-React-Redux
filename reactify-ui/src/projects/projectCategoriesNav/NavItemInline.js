import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavItemInline extends Component {
  render () {
    const { name, id } = this.props
    return (

      <li class='nav-item'>
        <Link
          className='nav-link' to={{
            pathname: `/category/${id}`,
            state: { fromDashboard: false }
          }} >{ name }</Link>
      </li>

    )
  }
}

export default NavItemInline
