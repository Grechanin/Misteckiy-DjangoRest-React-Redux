import React, { Component } from 'react'
import PageDescription from '../snipets/pageDescription'

class MainContent extends Component {
  render () {
    const { title, short_description, description, showMore, showMoreButtonToggle } = this.props
    return (
      <main>
        <div className='container main-background-color page__container margin-bottom-65px'>
          <PageDescription title={title}
            short_description={short_description}
            description={description}
            showMore={showMore}
            showMoreButtonToggle={showMoreButtonToggle} />
        </div>
      </main>
    )
  }
}

export default MainContent
