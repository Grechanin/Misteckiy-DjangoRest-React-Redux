import React, { Component } from 'react'
import Navbar from '../header/navbar'
import Footer from '../snipets/footer'
import Breadcrumb from '../snipets/breadcrumd.js'
import MainContent from './mainContant.js'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'

class Gallery extends Component {
  constructor (props) {
    super(props)
    // this.loadGalleryPageDescription = this.loadGalleryPageDescription.bind(this)
    // this.loadGalleryImages = this.loadGalleryImages.bind(this)
    this.chunkify = this.chunkify.bind(this)
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

  componentDidMount () {
    this.props.loadGalleryPageData()
    this.props.loadGalleryImages()
  }

  render () {
    document.title = this.props.tab_title
    const {
      tab_title,
      title,
      short_description,
      description,
      images,
      showMore
    } = this.props

    let chankifiedImages = null

    if (images) { chankifiedImages = this.chunkify(images, 4, 1) }

    return (
      <div className='main-container'>
        <Navbar />
        <Breadcrumb title={tab_title} />
        {chankifiedImages
          ? <MainContent title={title}
            short_description={short_description}
            description={description}
            images={chankifiedImages}
            showMore={showMore}
            showMoreButtonToggle={this.props.showMoreGallery} />
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
    showMore: state.galleryPage.showMore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadGalleryPageData: () => dispatch(actionCreator.loadGalleryPageData()),
    loadGalleryImages: () => dispatch(actionCreator.loadGalleryImages()),
    showMoreGallery: (e) => dispatch(actionCreator.showMoreGallery(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
