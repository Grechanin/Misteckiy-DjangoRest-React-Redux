import React, { Component } from 'react'
import ProjectInline from './ProjectInline'

class ProjectsList extends Component {
  render () {
    const { projects } = this.props
    return (
      <div className='container-fluid'>
        <div className='row'>

          {projects.map(
	              (category, index) => {
	                return (
  <ProjectInline 	name={category.name}
                  id={category.id}
                  image={category.img_url}
                  key={index} />
	                )
	              }
	            )}

        </div>
      </div>
    )
  }
}

export default ProjectsList
