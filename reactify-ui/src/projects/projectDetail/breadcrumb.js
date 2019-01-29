import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Breadcrumb extends Component {
  capitalizeFirstLetter (string) {
    if (string) return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  render () {
    let { category_name, id, title } = this.props
    console.log(id)
    title = this.capitalizeFirstLetter(title)
    category_name = this.capitalizeFirstLetter(category_name)
    return (
      <div className='container'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><Link to={{
              pathname: '/',
              state: { fromDashboard: false }
            }} >Головна</Link></li>
            <li className='breadcrumb-item'><Link to={{
              pathname: '/projects',
              state: { fromDashboard: false }
            }} >Проекти</Link></li>
            <li className='breadcrumb-item'><Link to={{
              pathname: `/category/${id}`,
              state: { fromDashboard: false }
            }} >{category_name}</Link></li>
            <li className='breadcrumb-item active' aria-current='page'>{title}</li>
          </ol>
        </nav>
      </div>
    )
  }
}

export default Breadcrumb
