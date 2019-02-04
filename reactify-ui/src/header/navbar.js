import React, { Component } from 'react'
import 'whatwg-fetch'
import MainMenuSection from './mainMenuSection'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'

class Navbar extends Component {
  componentDidMount () {
    if (this.props.loadBrandImg) {
      this.props.loadBrandImg()
    }
  }

  render () {
    const { brandImageUrl } = this.props
    return (
      <div className='sticky-top' id='navbar-component' >
        <MainMenuSection logo={brandImageUrl} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    brandImageUrl: state.header.brandImageUrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBrandImg: () => dispatch(actionCreator.loadBrandImg())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
