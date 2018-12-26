import React, { Component } from 'react'
import 'whatwg-fetch'
import Navbar from '../header/navbar'
import Footer from '../snipets/footer'
import Breadcrumb from '../snipets/breadcrumd.js'
import MainContent from './mainContant.js'

class Prices extends Component {
  constructor (props) {
    super(props)
    this.loadDesignPricesPageDescription = this.loadDesignPricesPageDescription.bind(this)
    this.loadDesignPricesCategories = this.loadDesignPricesCategories.bind(this)
    this.loadDesignCategoriesDescription = this.loadDesignCategoriesDescription.bind(this)
  }

    state = {
      tab_title: null,
      title: null,
      short_description: null,
      description: null,
      categories: null,
      categoriesDescription: null,
    }

    loadDesignPricesPageDescription () {
      let thisComp = this
      let endpoint = '/api/design-prices/'

      let lookupOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }


      fetch(endpoint, lookupOptions)
        .then((responce) => {
          return responce.json()
        }).then((responceData) => {
          // console.log(responceData)
          thisComp.setState({
            tab_title: responceData.tab_title,
            title: responceData.title,
            short_description: responceData.short_description,
            description: responceData.description,
          })
          document.title = this.state.tab_title
        }).catch((error) => {
          console.log('error', error)
        })
    }


    loadDesignPricesCategories () {
      let thisComp = this
      let endpoint = '/api/design-prices/categories/'

      let lookupOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }


      fetch(endpoint, lookupOptions)
        .then((responce) => {
          return responce.json()
        }).then((responceData) => {
          // console.log(responceData)
          thisComp.setState({
            categories: responceData,
          })
          document.title = this.state.tab_title
        }).catch((error) => {
          console.log('error', error)
        })
    }


    loadDesignCategoriesDescription () {
      let thisComp = this
      let endpoint = '/api/design-prices/categories_description/'

      let lookupOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }


      fetch(endpoint, lookupOptions)
        .then((responce) => {
          return responce.json()
        }).then((responceData) => {
          // console.log(responceData)
          thisComp.setState({
            categoriesDescription: responceData,
          })
          document.title = this.state.tab_title
        }).catch((error) => {
          console.log('error', error)
        })
    }



    componentDidMount () {
      this.loadDesignPricesPageDescription()
      this.loadDesignPricesCategories()
      this.loadDesignCategoriesDescription()
    }

  render () {
    const {
            tab_title,
            short_description,
            description,
            categories,
            categoriesDescription,
            order_form,
            order_name } = this.state
    return (
      <div className='main-container'>
        <Navbar />
        <Breadcrumb title={tab_title} />
        { categories && categoriesDescription ? 
        <MainContent  title={tab_title}
                      short_description={short_description}
                      description={description}
                      categories={categories}
                      categoriesDescription={categoriesDescription}
                      order_form={order_form}
                      order_name={order_name}  /> : '' }
       
        <Footer />
      </div>
    )
  }
}

export default Prices
