import React, { Component } from 'react'

class CarouselInline extends Component {
  constructor (props) {
    super(props)
    this.state = { height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions () {
    const navbarComponentHeight = document.getElementById('navbar-component').clientHeight
    const carouselMaxHeight = window.innerHeight - navbarComponentHeight - 91
    this.setState({ height: carouselMaxHeight })
  }
  render () {
    const { img_url, index } = this.props
    const { height } = this.state

    return (

      <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} >
        <img className='carosel-image-resize' src={img_url} style={{ maxHeight: height + 'px' }} />
      </div>

    )
  }
}

export default CarouselInline
