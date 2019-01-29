import React, { Component } from 'react'
import Navbar from '../header/navbar'
import Footer from '../snipets/footer'
import Breadcrumb from '../snipets/breadcrumd.js'
import MainContent from './mainContant.js'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'
import Loader from 'react-loader'

class Prices extends Component {
  // constructor (props) {
  //   super(props)
  // this.loadDesignPricesPageDescription = this.loadDesignPricesPageDescription.bind(this)
  // this.loadDesignPricesCategories = this.loadDesignPricesCategories.bind(this)
  // this.loadDesignCategoriesDescription = this.loadDesignCategoriesDescription.bind(this)
  // }

  //   state = {
  //     tab_title: null,
  //     title: null,
  //     short_description: null,
  //     description: null,
  //     categories: null,
  //     categoriesDescription: null,
  //   }

  // loadDesignPricesPageDescription () {
  //   let thisComp = this
  //   let endpoint = '/api/design-prices/'

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
  //       // console.log(responceData)
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

  // loadDesignPricesCategories () {
  //   let thisComp = this
  //   let endpoint = '/api/design-prices/categories/'

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
  //       // console.log(responceData)
  //       thisComp.setState({
  //         categories: responceData,
  //       })
  //       document.title = this.state.tab_title
  //     }).catch((error) => {
  //       console.log('error', error)
  //     })
  // }

  // loadDesignCategoriesDescription () {
  //   let thisComp = this
  //   let endpoint = '/api/design-prices/categories_description/'

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
  //       // console.log(responceData)
  //       thisComp.setState({
  //         categoriesDescription: responceData,
  //       })
  //       document.title = this.state.tab_title
  //     }).catch((error) => {
  //       console.log('error', error)
  //     })
  // }

  componentDidMount () {
    this.props.loadDesignPricesPageDescription()
    this.props.loadDesignPricesCategories()
    this.props.loadDesignCategoriesDescription()
  }

  render () {
    // const {
    //         order_form,
    //         order_name } = this.state
    const {
      title,
      short_description,
      description,
      categories,
      categoriesDescription,
      showMore,
      showMoreDesignPricesDetail,
      loaded } = this.props
    document.title = this.props.tab_title
    return (
      <div className='main-container'>
        <Navbar />
        <Loader loaded={loaded} color='#e7e0e0' />
        <Breadcrumb title={title} />
        { categories && categoriesDescription
          ? <MainContent title={title}
            short_description={short_description}
            description={description}
            categories={categories}
            categoriesDescription={categoriesDescription}
            showMore={showMore}
            showMoreButtonToggle={showMoreDesignPricesDetail}
            // order_form={order_form}
            // order_name={order_name}
          /> : '' }

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tab_title: state.pricesPage.tab_title,
    title: state.pricesPage.title,
    short_description: state.pricesPage.short_description,
    description: state.pricesPage.description,
    categories: state.pricesPage.categories,
    categoriesDescription: state.pricesPage.categoriesDescription,
    showMore: state.pricesPage.showMore,
    loaded: state.pricesPage.loaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDesignPricesPageDescription: () => dispatch(actionCreator.loadDesignPricesPageDescription()),
    loadDesignPricesCategories: () => dispatch(actionCreator.loadDesignPricesCategories()),
    loadDesignCategoriesDescription: () => dispatch(actionCreator.loadDesignCategoriesDescription()),
    showMoreDesignPricesDetail: (e) => dispatch(actionCreator.showMoreDesignPricesDetail(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prices)
