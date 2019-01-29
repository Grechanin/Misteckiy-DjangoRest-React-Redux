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
    // this.loadGalleryPageDescription = this.loadGalleryPageDescription.bind(this)
    // this.loadGalleryImages = this.loadGalleryImages.bind(this)
    this.chunkify = this.chunkify.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  // state = {
  // tab_title: null,
  // title: null,
  // short_description: null,
  // description: null,
  // images: null,
  // }

  // loadGalleryPageDescription () {
  //   let thisComp = this
  //   let endpoint = '/api/gallery/'

  //   let lookupOptions = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   fetch(endpoint, lookupOptions)
  //     .then((responce) => {
  //       return responce.json()
  //     }).then((responceData) => {
  //       thisComp.setState({
  //         tab_title: responceData.tab_title,
  //         title: responceData.title,
  //         short_description: responceData.short_description,
  //         description: responceData.description,
  //       })
  //       document.title = this.state.tab_title
  //     }).catch((error) => {
  //       console.log('error', error)
  //     })
  // }

  // loadGalleryImages () {
  //   let thisComp = this
  //   let endpoint = '/api/gallery/images/'

  //   let lookupOptions = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   fetch(endpoint, lookupOptions)
  //     .then((responce) => {
  //       return responce.json()
  //     }).then((responceData) => {
  //       thisComp.setState({
  //         images: this.chunkify(responceData, 4, 1)
  //       })
  //     }).catch((error) => {
  //       console.log('error', error)
  //     })
  // }

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

  // loadMoreImages (e) {
  //   e.preventDefault()
  //   if (this.props.next !== null) this.props.loadGalleryImages(this.props.next)
  // }

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
       


    
    // console.log('contantHeight', contantHeight)
    // console.log('yOffset', yOffset)
    // console.log('y', y)
  };

  componentDidMount () {

    // console.log('r', this.r)
    // console.log('scrollBottom', this.refs.scroller)
    // console.log(this.props.images.length)
    // console.log(this.props.next)
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
      next,
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
