import React, { Component } from 'react'
import TabContentDescriptionInline from './TabContentDescriptionInline.js'

class TabContentInline extends Component {
  render () {
    const { category, categoriesDescription, index } = this.props
    return (
      <div class={index === 0 ? 'tab-pane active' : 'tab-pane'}
        id={category}
        role='tabpanel'
        aria-labelledby={index === 0 ? 'pills-home-tab' : 'pills-profile-tab'}>
        <div class='row'>
          {categoriesDescription
            ? categoriesDescription.map((instance, index) => {
              if (category === instance.category) {
                return (
                  <TabContentDescriptionInline instance={instance} key={index} />
                )
              } else {}
            })
            : ''}
        </div>
      </div>
    )
  }
}

export default TabContentInline
