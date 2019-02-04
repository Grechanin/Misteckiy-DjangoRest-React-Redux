import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height'
import MobileBasket from '../gypsum/cart/MobileBasket'

class PageDescription extends Component {
  render () {
    const { title, short_description, description, showMore, shop } = this.props
    const toggleOpenedClass = showMore ? 'more-link opened' : 'more-link'
    const toggleLinkedText = showMore ? 'Згорнути' : 'Детальніше'
    return (
      <div className='row'>
        <div className='col-md-12'>
          { title ? <h1 className='text-center page__title'>{ title }</h1> : ''}
          { shop ? <div className='d-block d-md-none d-xl-none'><MobileBasket /></div> : ''}
          { short_description ? <p dangerouslySetInnerHTML={{ __html: short_description }} /> : ''}

          { description
            ? <div>
              <AnimateHeight
                duration={500}
                height={showMore ? 'auto' : 0}>
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </AnimateHeight>

              <div className='show-more'>
                <a href='# ' className={toggleOpenedClass} onClick={this.props.showMoreButtonToggle} >{toggleLinkedText}</a>
              </div>
            </div>
            : ''}

        </div>
      </div>
    )
  }
}

export default PageDescription
