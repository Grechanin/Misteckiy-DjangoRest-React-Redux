import React, { Component } from 'react'
import CarouselInline from './carouselInline'

class Carousel extends Component {
  render () {
    const { carousel_imgs, homePageLoaded } = this.props

    return (
      <div id='carousel' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>

          { carousel_imgs.map(
            (instance, index) => {
              return (
                <CarouselInline img_url={instance.img_url} index={index} key={index} homePageLoaded={homePageLoaded} />
              )
            }
          )
          }

          <a className='carousel-control-prev carousel-control-btn-height' href='#carousel' role='button' data-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a className='carousel-control-next carousel-control-btn-height' href='#carousel' role='button' data-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Carousel
