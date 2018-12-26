import React, { Component } from 'react'
import LastProjectInline from './LastProjectInline'

class LastProjects extends Component {
  render () {
    const { last_projects } = this.props
    return (
      <div className='background-color-fbfbfb'>
        <div className='container'>
          <div className='section__title'>Останні проекти</div>
          <div className='section__title-divider' />
          <div className='row'>
            { last_projects.map(
              (instance, index) => {
                return (
                  <LastProjectInline img={instance.img_url} name={instance.name} id={instance.id} key={index} />
                )
              })
            }

          </div>
        </div>
      </div>
    )
  }
}

export default LastProjects
