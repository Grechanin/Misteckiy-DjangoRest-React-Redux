import React, { Component } from 'react'
import 'whatwg-fetch'
import Navbar from '../header/navbar'
import Footer from '../snipets/footer'
import Breadcrumb from '../snipets/breadcrumd.js'
import GoogleMap from './googleMap.js'
import MainContent from './mainContant.js'

class Contacts extends Component {
  constructor (props) {
    super(props)
    this.loadContacts = this.loadContacts.bind(this)
  }

    state = {
        tab_title: null, 
        address_title: null,
        address: null,
        email_title: null,
        email: null,
        title_phone_for_customers: null,
        phone_for_customers: null,
        title_phone_for_partners: null,
        phone_for_partners: null,
    }

    loadContacts () {
      let thisComp = this
      let endpoint = '/api/contacts/'

      let lookupOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
  // console.log(endpoint)

      fetch(endpoint, lookupOptions)
        .then((responce) => {
          return responce.json()
        }).then((responceData) => {
          thisComp.setState({
            tab_title: responceData.tab_title,
            address_title: responceData.address_title,
            address: responceData.address,
            email_title: responceData.email_title,
            email: responceData.email,
            title_phone_for_customers: responceData.title_phone_for_customers,
            phone_for_customers: responceData.phone_for_customers,
            title_phone_for_partners: responceData.title_phone_for_partners,
            phone_for_partners: responceData.phone_for_partners,
          })
          document.title = this.state.tab_title
        }).catch((error) => {
          console.log('error', error)
        })
    }

    componentDidMount () {
      this.loadContacts()
    }

  render () {
    const {
            tab_title,
            address_title,
            address,
            email_title,
            email,
            title_phone_for_customers,
            phone_for_customers,
            title_phone_for_partners,
            phone_for_partners,
          } = this.state
    return (
      <div className='main-container'>
        <Navbar />
        <GoogleMap />
        <Breadcrumb title={tab_title} />
        <MainContent  address_title={address_title}
                      address={address}
                      email_title={email_title}
                      email={email}
                      title_phone_for_customers={title_phone_for_customers}
                      phone_for_customers={phone_for_customers}
                      title_phone_for_partners={title_phone_for_partners}
                      phone_for_partners={phone_for_partners} />

        <Footer />
      </div>
    )
  }
}

export default Contacts
