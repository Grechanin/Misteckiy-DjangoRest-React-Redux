import React, { Component } from 'react'
import Navbar from '../header/navbar'
import Footer from '../snipets/footer'
import Carousel from './carousel/carousel'
import PageDescription from './pageDescription'
import LastProjects from './LastProjects'
// import MainContent from './mainContent'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'

class Home extends Component {
  // constructor (props) {
  //   super(props)
  // this.loadCarousel = this.loadCarousel.bind(this)
  // this.loadHomePageDescription = this.loadHomePageDescription.bind(this)
  // this.loadLastProjects = this.loadLastProjects.bind(this)
  // this.carouselResize = this.carouselResize.bind(this)
  // }

  //   state = {
  //       tab_title: null,
  //       carousel_imgs: null,
  //       title: null,
  //       short_description: null,
  //       description: null,
  //       last_projects: null,
  //       carouselMaxHeight: null
  //   }

  // loadCarousel () {
  //   let thisComp = this
  //   let endpoint = '/api/home/carousel/'

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
  //         carousel_imgs: responceData,
  //       })
  //     }).catch((error) => {
  //       console.log('error', error)
  //     })
  // }

  // loadHomePageDescription () {
  //   let thisComp = this
  //   let endpoint = '/api/home/'

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
  //         description:  responceData.description,
  //       })
  //       document.title = this.state.tab_title
  //     }).catch((error) => {
  //       console.log('error', error)
  //     })
  // }

  // loadLastProjects () {
  //   let thisComp = this
  //   let endpoint = '/api/home/last-projects/'

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
  //         last_projects: responceData,
  //       })
  //     }).catch((error) => {
  //       console.log('error', error)
  //     })
  // }

  // carouselResize () {
  //   const viewportHeight = window.innerHeight;
  //   const carouselMaxHeight = viewportHeight - this.navbarComponent.clientHeight - 91
  //   this.setState(
  //     {
  //       carouselMaxHeight: carouselMaxHeight
  //     }
  //     )
  //   }

  componentDidMount () {
    this.props.loadCarousel()
    this.props.loadHomePageDescription()
    this.props.loadLastProjects()
    // this.carouselResize()
  }

  render () {
    const { title, short_description, description, last_projects, showMore, showMoreHome, carousel_imgs } = this.props
    document.title = this.props.tab_title
    // console.log(carousel_imgs)
    return (
      <div className='main-container'>
        <Navbar ref={(navbarComponent) => this.navbarComponent = navbarComponent} />
        { carousel_imgs ? <Carousel carousel_imgs={carousel_imgs} /> : '' }
        <PageDescription showMore={showMore}
          showMoreButtonToggle={showMoreHome}
          title={title}
          short_description={short_description}
          description={description} />
        { last_projects
          ? <LastProjects last_projects={last_projects} />
          : ''}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tab_title: state.homePage.tab_title,
    title: state.homePage.title,
    short_description: state.homePage.short_description,
    description: state.homePage.description,
    carousel_imgs: state.homePage.carousel_imgs,
    last_projects: state.homePage.last_projects,
    showMore: state.homePage.showMore

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHomePageDescription: () => dispatch(actionCreator.loadHomePageDescription()),
    loadLastProjects: () => dispatch(actionCreator.loadLastProjects()),
    loadCarousel: () => dispatch(actionCreator.loadCarousel()),
    showMoreHome: (e) => dispatch(actionCreator.showMoreHome(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
