import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';



class PageDescription extends Component {
    constructor (props) {
    super(props)
    this.showMoreHandle = this.showMoreHandle.bind(this)
  }

  state = {
    showMore: false
  }

  showMoreHandle(e){
    e.preventDefault()
    let {showMore} = this.state
    this.setState({
      showMore: !showMore
    })
  }

  render () {
    const { title, short_description, description } = this.props
    const {showMore} = this.state
    const toggleOpenedClass = showMore ? 'more-link opened' : 'more-link'
    const toggleLinkedText = showMore ? 'Згорнути' : 'Детальніше'
    return (
            <div>
              { title ? <h1 className='text-center page__title'>{ title }</h1> : ''}
              { short_description ? <p dangerouslySetInnerHTML={{ __html: short_description }} /> : ''}

              { description
                ? <div>
                  <AnimateHeight
                    duration={ 500 }
                    height={ showMore ? 'auto' : 0  }>
                    <p  dangerouslySetInnerHTML={{ __html: description }} />
                  </AnimateHeight> 
                                                
                  <div className='show-more'>
                    <a href='# ' className={toggleOpenedClass} onClick={this.showMoreHandle} >{toggleLinkedText}</a>
                  </div>
                </div>
                : ''}

            </div>
    )
  }
}


export default PageDescription
