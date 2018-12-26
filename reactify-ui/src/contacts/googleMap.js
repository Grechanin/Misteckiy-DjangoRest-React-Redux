
import React, { Component } from 'react'

class GoogleMap extends Component {
  render () {
    return (
      <div className='container-fluid map-container'>
        <iframe title='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41973.8365847669!2d26.825514327825626!3d48.889384748249846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47324a2d7ab903dd%3A0x34a5a4968fd8d3ed!2z0JTRg9C90LDRl9Cy0YbRliwg0KXQvNC10LvRjNC90LjRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1suk!2sua!4v1523864174245' width='100%' height='450' frameBorder='0' style={{ border: 0 }} allowFullScreen />
      </div>
    )
  }
}

export default GoogleMap
