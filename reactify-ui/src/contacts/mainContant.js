import React, { Component } from 'react'

class MainContent extends Component {
  render () {
    const {
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
      <main>
        <div className='container margin-bottom-65px'>
          <div className='row'>
            <div className='col-md-6 text-center'>
              <div className='contact'>
                <h4 dangerouslySetInnerHTML={{ __html: address_title }} />
                <div dangerouslySetInnerHTML={{ __html: address }} />
              </div>
            </div>
            <div className='col-md-6 text-center'>
              <div className='contact'>
                <h4 dangerouslySetInnerHTML={{ __html: email_title }} />
                <div dangerouslySetInnerHTML={{ __html: email }} />
              </div>
            </div>
            <div className='col-md-6 text-center'>
              <div className='contact'>
                <h4 dangerouslySetInnerHTML={{ __html: title_phone_for_customers }} />
                <div dangerouslySetInnerHTML={{ __html: phone_for_customers }} />
              </div>
            </div>
            <div className='col-md-6 text-center'>
              <div className='contact'>
                <h4 dangerouslySetInnerHTML={{ __html: title_phone_for_partners }} />
                <div dangerouslySetInnerHTML={{ __html: phone_for_partners }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default MainContent
