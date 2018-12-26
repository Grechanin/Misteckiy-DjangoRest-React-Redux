import React, { Component } from 'react'
import Navbar from '../header/navbar'
import Footer from '../snipets/footer'
import Breadcrumb from '../snipets/breadcrumd'
import MainContent from './mainContent'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'

class AboutUs extends Component {
  // constructor (props) {
  //   super(props)
  //   this.loadAboutUs = this.loadAboutUs.bind(this)
  // }

  //   state = {
  //       tab_title: null,
  //       title: null,
  //       short_description: null,
  //       description: null,
  //   }

  // loadAboutUs () {
  //   let thisComp = this
  //   let endpoint = '/api/about_us/'

  //   let lookupOptions = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  // console.log(endpoint)

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

  componentDidMount () {
    this.props.loadAboutUs()
    // this.forceUpdate()
  }

  render () {
    // const { title, short_description, description } = this.props
    document.title = this.props.tab_title
    return (
      <div className='main-container'>
        <Navbar />
        <Breadcrumb title={this.props.title} />
        <MainContent title={this.props.title}
          short_description={this.props.short_description}
          description={this.props.description}
          showMore={this.props.showMore}
          showMoreButtonToggle={this.props.showMoreAboutUs}
        />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tab_title: state.aboutUsPage.tab_title,
    title: state.aboutUsPage.title,
    short_description: state.aboutUsPage.short_description,
    description: state.aboutUsPage.description,
    showMore: state.aboutUsPage.showMore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAboutUs: () => dispatch(actionCreator.loadAboutUsPageData()),
    showMoreAboutUs: (e) => dispatch(actionCreator.showMoreButton(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)
