import React, { Component } from 'react'
import PageDescription from './pageDescription'
import PillTabInline from './pillTabInline'
import TabContentInline from './tabContentInline.js'

class MainContent extends Component {
  render () {
    const { title,
      short_description,
      description,
      categories,
      categoriesDescription,
      showMore,
      showMoreButtonToggle
    } = this.props

    return (
      <main>
        <div class='container main-background-color page__container margin-bottom-65px'>
          <div class='row'>
            <div class='col-md-12'>
              <PageDescription title={title}
                short_description={short_description}
                description={description}
                showMore={showMore}
                showMoreButtonToggle={showMoreButtonToggle} />

              <ul class='nav nav-pills' id='pills-tab' role='tablist'>
                { categories.map((instance, index) => {
                  return (
                    <PillTabInline category={instance.name}
                      index={index}
                      key={index} />
                  )
                })
                }
              </ul>

              <div class='tab-content' id='pills-tabContent'>
                { categories.map((instance, index) => {
                  return (
                    <TabContentInline categoriesDescription={categoriesDescription}
                      category={instance.name}
                      index={index}
                      key={index} />
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default MainContent
