import React, { Component } from 'react'

class ProjectImages extends Component {
  render () {
    const { project_images, project_thumbnail_images, project_name } = this.props
    return (

      <div className='container'>
        <div className='row'>

          {project_images.map(
	              (image_url, index) => {
	                return (
                <div className='col-md-6'>
    <div className='img-div img-margin-booton-15px'>
                    <a data-fancybox='gallery'
        data-options='{"buttons": ["zoom", "slideShow", "fullScreen", "share","close"]}'
        data-caption={project_name} href={image_url}
        className='outline-focus-none'>
        <img 	className='card-img-top-border-radius-0 img-zoom'
                        src={project_thumbnail_images[index]}
                        alt={project_name} />
      </a>
                  </div>
  </div>
	                )
	              }
	            )}

        </div>

      </div>

    )
  }
}

export default ProjectImages
