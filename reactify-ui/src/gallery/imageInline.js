import React, { Component } from 'react'

class ImageInline extends Component {
  onLoadHandler = () => {
    if (this.props.galleryPageLoaded) {
      this.props.galleryPageLoaded()
      console.log('gallery on load')
    }
  }
  render () {
    const { image_project_name, image_url, image_thumbnail_url } = this.props

    return (
      <div className='img-div'>
        <a data-fancybox='gallery'
          data-options='{"buttons": ["zoom", "slideShow", "fullScreen", "share","close"]}'
          data-caption={image_project_name} href={image_url}
          className='outline-focus-none'>
          <img onLoad={this.onLoadHandler} src={image_thumbnail_url} alt='' className='outline-focus-none thumbnail-img img-fluid img-zoom' />
        </a>
      </div>
    )
  }
}

export default ImageInline
