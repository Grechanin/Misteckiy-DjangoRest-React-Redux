import React, { Component } from 'react'
import NavItemInline from './NavItemInline'

class ProjectCategoriesNav extends Component {
  render () {
    const { categories } = this.props
    return (
      <nav class='navbar navbar-expand-md sub-nav-bar-sticky main-background-color d-none d-md-block d-xl-block' style={{ top: 52 + 'px' }} >
        <div class='container'>

          <ul class='navbar-nav mx-auto'>
            {categories.map(
              (category, index) => {
                return (
                  <NavItemInline name={category.name} id={category.id} key={index} />
                )
              }
            )}

          </ul>
        </div>
      </nav>
    )
  }
}

export default ProjectCategoriesNav
