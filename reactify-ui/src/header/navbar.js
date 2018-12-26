import React, { Component } from 'react'
import 'whatwg-fetch'
import MainMenuSection from './mainMenuSection'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.loadBrandImg = this.loadBrandImg.bind(this)
  }

  state = {
      brand_url: null
  }

  loadBrandImg () {
    let thisComp = this
    let endpoint = '/api/home/favicon/'

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
          brand_url:responceData.favicon_url
        })
      }).catch((error) => {
        console.log('error', error)
      })
  }

  componentDidMount () {
    this.loadBrandImg()
  }

  render () {
    const {brand_url} = this.state
    return (
      <div className="sticky-top" id="navbar-component" >
        <MainMenuSection logo={brand_url} />
      </div>
    )
  }
}

export default Navbar
