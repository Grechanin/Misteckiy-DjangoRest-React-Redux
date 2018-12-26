import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Breadcrumb extends Component {
  render () {
    const { title } = this.props
    return (
      <div className='container'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><Link to={{
              pathname: '/',
              state: { fromDashboard: false }
            }} >Головна</Link></li>
            <li className='breadcrumb-item active' aria-current='page'>{title}</li>
          </ol>
        </nav>
      </div>
    )
  }
}

export default Breadcrumb
