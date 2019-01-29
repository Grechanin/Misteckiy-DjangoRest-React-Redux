import React, { Component } from 'react'
import PageDescription from '../snipets/pageDescription'
import ImageInline from './imageInline'

class MainContent extends Component {
  render () {
    const { title, short_description, description, images, showMore, showMoreButtonToggle, galleryPageLoaded } = this.props

    return (
      <main>
        <div className='page__container'>
          <div className='container'>
            <PageDescription title={title}
              short_description={short_description}
              description={description}
              showMore={showMore}
              showMoreButtonToggle={showMoreButtonToggle} />
          </div>
          {images
            ? <div className='container-fluid'>
              <div className='row'>
                <div className='gallery-col col-md-3 col-sm-6'>
                  { images[0].map((instance, index) => {
                    return (
                      <ImageInline image_project_name={instance.image_project_name}
                        image_url={instance.image_url}
                        image_thumbnail_url={instance.image_thumbnail_url} />
                    )
                  })}
                </div>

                <div className='gallery-col col-md-3 col-sm-6'>
                  { images[1].map((instance, index) => {
                    return (
                      <ImageInline image_project_name={instance.image_project_name}
                        image_url={instance.image_url}
                        image_thumbnail_url={instance.image_thumbnail_url} />
                    )
                  })}
                </div>

                <div className='gallery-col col-md-3 col-sm-6'>
                  { images[2].map((instance, index) => {
                    return (
                      <ImageInline image_project_name={instance.image_project_name}
                        image_url={instance.image_url}
                        image_thumbnail_url={instance.image_thumbnail_url} />
                    )
                  })}
                </div>

                <div className='gallery-col col-md-3 col-sm-6'>
                  { images[3].map((instance, index) => {
                    return (
                      <ImageInline image_project_name={instance.image_project_name}
                        image_url={instance.image_url}
                        image_thumbnail_url={instance.image_thumbnail_url}
                        galleryPageLoaded={galleryPageLoaded} />
                    )
                  })}
                </div>

              </div>
            </div> : ''}
        </div>
      </main>
    )
  }
}

export default MainContent
