import React, { Component } from 'react'
import 'whatwg-fetch'
import Navbar from '../../header/navbar'
import Footer from '../../snipets/footer'
import ProjectCategoriesNav from '../projectCategoriesNav/ProjectCategoriesNav'
import Breadcrumb from './breadcrumb'
import PageDescription from '../../snipets/pageDescription'
import ProjectImages from './ProjectImages'
import SocialShare from '../../snipets/SocialShare'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/actions'
import Loader from 'react-loader'


class ProjectDetail extends Component {
    state = {
        project: {
          tab_title: null,
          name: null,
          short_description: null,
          description: null,
          categories: null,
          project_images: null,
          project_thumbnail_images: null,
          main_image_url: null,
          category_id: null,
          category_name: null
        },
        loaded: false
    }

  componentDidMount () {
    this.props.loadCategories()
    if (this.props.match) {
      const { id } = this.props.match.params
      const { projects_detail } = this.props
      projects_detail.forEach(
        (instance, idex) => {
          if (instance.id.toString() === id) {
            this.setState({ project: { ...this.state.project, ...instance }, loaded: true })
          }
        }
      )

    }
  }

  componentDidUpdate () {
    if (!this.state.loaded) {
      let loaded = false
      if (this.props.match) {
        const { id } = this.props.match.params
        const { projects_detail } = this.props
        projects_detail.forEach(
          (instance, idex) => {
            if (instance.id.toString() === id) {
              loaded = true
              if (instance !== this.state.project) {
                this.setState({ project: { ...this.state.project, ...instance }, loaded: true })
              }
            }
          }
        )
        if (!loaded) {
          this.props.loadProjectDetail(id)
        }
      }
    }
  }


  render () {
    const { name,
      short_description,
      description,
      project_images,
      project_thumbnail_images,
      main_image_url,
      category,
      category_name,
      showMore,
      showMoreProjectDetail } = this.state.project
      const { loaded } = this.state
      const {categories} = this.props
    document.title = this.state.project.tab_title
    return (
      <div className='main-container'>
        <Navbar />
        { categories
          ? <ProjectCategoriesNav categories={categories} categoryFilterHandler={this.categoryFilterHandler} />
          : '' }
        <Loader loaded={loaded} color='#e7e0e0' />
        { loaded
          ?  <main>
              <Breadcrumb title={name} category_name={category_name} id={category} />
              <div className='page__container'>
                <div className='container'>
                  <PageDescription title={name}
                    short_description={short_description}
                    description={description}
                    showMore={showMore}
                    showMoreButtonToggle={showMoreProjectDetail} />
                </div>
                { project_images
                  ? <ProjectImages project_images={project_images}
                    project_name={name}
                    project_thumbnail_images={project_thumbnail_images} />
                  : '' }
                <SocialShare main_image_url={main_image_url} project_name={name} />
              </div>
            </main> : ''
        }

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects_detail: state.projects.projects_detail,
    tab_title: state.projects.projectDetail.tab_title,
    name: state.projects.projectDetail.name,
    short_description: state.projects.projectDetail.short_description,
    description: state.projects.projectDetail.description,
    categories: state.projects.categories.categories,
    project_images: state.projects.projectDetail.project_images,
    project_thumbnail_images: state.projects.projectDetail.project_thumbnail_images,
    main_image_url: state.projects.projectDetail.main_image_url,
    category_id: state.projects.projectDetail.category_id,
    category_name: state.projects.projectDetail.category_name,
    showMore: state.projects.projectDetail.showMore

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProjectDetail: (id) => dispatch(actionCreator.loadProjectDetail(id)),
    loadCategories: () => dispatch(actionCreator.loadCategories()),
    showMoreProjectDetail: (e) => dispatch(actionCreator.showMoreProjectDetail(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail)
