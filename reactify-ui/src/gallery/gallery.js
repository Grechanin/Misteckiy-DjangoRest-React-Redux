import React, { Component } from 'react'
import Navbar from '../header/navbar'
import Footer from '../snipets/footer'
import Breadcrumb from '../snipets/breadcrumd.js'
import MainContent from './mainContant.js'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'
import Loader from 'react-loader'

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.chunkify = this.chunkify.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  chunkify (a, n, balanced) {
    if (n < 2) { return [a] }

    var len = a.length

    var out = []

    var i = 0

    var size

    if (len % n === 0) {
      size = Math.floor(len / n)
      while (i < len) {
        out.push(a.slice(i, i += size))
      }
    } else if (balanced) {
      while (i < len) {
        size = Math.ceil((len - i) / n--)
        out.push(a.slice(i, i += size))
      }
    } else {
      n--
      size = Math.floor(len / n)
      if (len % size === 0) { size-- }
      while (i < size * n) {
        out.push(a.slice(i, i += size))
      }
      out.push(a.slice(size * n))
    }

    return out
  }


  onScrollHandler = () => {
    console.log('scrolling')
    if (this.scroller) {
      console.log('scrollTop', this.scroller.scrollTop)
    }
  }

  handleScroll(event) {
  
          let contantHeight = this.refs.scroller.offsetHeight
          console.log('contantHeight',contantHeight)
          let yOffset = window.pageYOffset
          console.log('yOffset',yOffset)
          let innerHeight = window.innerHeight
          console.log('innerHeight',innerHeight)
          let y = window.innerHeight + yOffset
          console.log('y',y)
          let next = this.props.next
          if(y > contantHeight && y < contantHeight+20 && next) {
            next = null   
            console.log(this.props.next)
            this.props.loadGalleryImages(this.props.next)
          }
  };

  componentDidMount () {
    this.props.loadGalleryPageData()
    if (this.props.images.length === 0) this.props.loadGalleryImages(this.props.next)
    window.addEventListener('scroll', this.handleScroll)
  }

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
};

  render () {
    document.title = this.props.tab_title
    const {
      tab_title,
      title,
      short_description,
      description,
      images,
      showMore,
      loaded,
      galleryPageLoaded
    } = this.props

    let chankifiedImages = null

    if (images.length !== 0) {
      console.log(images.length)
      chankifiedImages = this.chunkify(images, 4, 1)
    }

    return (
      <div className='main-container' ref={(r)=>this.r=r} >
        <Navbar />
        <Loader loaded={loaded} color='#e7e0e0' />
        <Breadcrumb title={tab_title} />
        {chankifiedImages !== null
          ? <div onScroll={this.onScrollHandler} ref='scroller' >
            <MainContent title={title}
              short_description={short_description}
              description={description}
              images={chankifiedImages}
              galleryPageLoaded={galleryPageLoaded}
              showMore={showMore}
              showMoreButtonToggle={this.props.showMoreGallery} />
          </div>
          : ''}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tab_title: state.galleryPage.tab_title,
    title: state.galleryPage.title,
    short_description: state.galleryPage.short_description,
    description: state.galleryPage.description,
    images: state.galleryPage.images,
    next: state.galleryPage.next,
    showMore: state.galleryPage.showMore,
    loaded: state.galleryPage.loaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadGalleryPageData: () => dispatch(actionCreator.loadGalleryPageData()),
    loadGalleryImages: (next) => dispatch(actionCreator.loadGalleryImages(next)),
    showMoreGallery: (e) => dispatch(actionCreator.showMoreGallery(e)),
    galleryPageLoaded: () => dispatch(actionCreator.galleryPageLoaded())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
