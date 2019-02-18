import React, { Component } from 'react'
import Navbar from '../header/navbar'
import Footer from '../snipets/footer'
import Breadcrumb from '../snipets/breadcrumd.js'
import GoogleMap from './googleMap.js'
import MainContent from './mainContant.js'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'

class Contacts extends Component {
  componentDidMount () {
    this.props.loadContacts()
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
      phone_for_partners
    } = this.props
    return (
      <div className='main-container'>
        <Navbar />
        <GoogleMap />
        <Breadcrumb title='Контакти' />
        <MainContent address_title={address_title}
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

const mapStateToProps = (state) => {
  return {
    tab_title: state.contactsPage.tab_title,
    address_title: state.contactsPage.address_title,
    address: state.contactsPage.address,
    email_title: state.contactsPage.email_title,
    email: state.contactsPage.email,
    title_phone_for_customers: state.contactsPage.title_phone_for_customers,
    phone_for_customers: state.contactsPage.phone_for_customers,
    title_phone_for_partners: state.contactsPage.title_phone_for_partners,
    phone_for_partners: state.contactsPage.phone_for_partners
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadContacts: () => dispatch(actionCreator.loadContacts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
