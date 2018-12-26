import React, { Component } from 'react'

class PillTabInline extends Component {
  render () {
    const { index, category } = this.props
    return (

      <li class='nav-item'>
        <a class={index === 0 ? 'nav-link active' : 'nav-link'}
          id={index === 0 ? 'pills-home-tab' : 'pills-profile-tab'}
          data-toggle='pill'
          href={'#' + category}
          role='tab'
          aria-controls={index === 0 ? 'pills-home' : 'pills-profile'}
          aria-selected={index === 0 ? 'true' : 'false'}>{ category }</a>
      </li>

    )
  }
}

export default PillTabInline
