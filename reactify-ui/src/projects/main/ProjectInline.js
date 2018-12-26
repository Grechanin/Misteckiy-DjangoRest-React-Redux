import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectInline extends Component {
  render () {
    const { id, name, image } = this.props
    return (

      <div class='col-md-3 col-md-3-padding-0'>
        <div className='img-div'>
          <Link className='nav-link' to={{
				          pathname: `/projects/${id}`,
				          state: { fromDashboard: false }
				        }} >
            <img className='card-img-top card-img-top-border-radius-0 img-zoom'
              src={image} alt='' />
          </Link>
        </div>

        <div className='project__title'>
          <Link className='nav-link' to={{
					          pathname: `/projects/${id}`,
					          state: { fromDashboard: false }
					        }} ><p>{ name }</p></Link>
        </div>
      </div>

    )
  }
}

export default ProjectInline
