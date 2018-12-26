import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LastProjectInline extends Component {
  render () {
    const { id, img, name } = this.props
    return (

      <div className='col-md-4'>
        <div className='card mb-4 box-shadow'>
          <div className='img-div'>
            <Link to={{
              pathname: `/projects/${id}`,
              state: { fromDashboard: false }
            }} ><img className='card-img-top img-zoom card-img-top-border-radius-0' src={img} alt='' /></Link>
          </div>
          <div className='card-body'>
            <Link to={{
              pathname: `/projects/${id}`,
              state: { fromDashboard: false }
            }} >{ name }</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LastProjectInline
