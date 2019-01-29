import React, { Component } from 'react'
import Navbar from '../../header/navbar'
import Footer from '../../snipets/footer'
import ProjectCategoriesNav from '../projectCategoriesNav/ProjectCategoriesNav'
import Breadcrumb from '../../snipets/breadcrumd'
import PageDescription from '../../snipets/pageDescription'
import ProjectsList from './ProjectsList'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/actions'
import Loader from 'react-loader'

// import MainContent from './mainContent'

class Projects extends Component {
  componentDidMount () {
    this.props.loadProjectsPageDescription()
    this.props.loadCategories()
    // this.loadHomePageDescription()
    this.props.loadProjects()
  }

  render () {
    const { title,
      short_description,
      description,
      projects,
      categories,
      showMore,
      showMoreProjects,
      loaded,
      projectsPageLoaded } = this.props
    document.title = this.props.tab_title
    return (
      <div className='main-container'>
        <Navbar />
        <Loader loaded={loaded} color='#e7e0e0' />
        { categories
          ? <ProjectCategoriesNav categories={categories} />
          : '' }
        <main>
          <Breadcrumb title={title} />
          <div className='page__container'>
            <div className='container'>
              <PageDescription title={title}
                short_description={short_description}
                description={description}
                showMore={showMore}
                showMoreButtonToggle={showMoreProjects} />
            </div>
            { projects
              ? <ProjectsList projects={projects} projectsPageLoaded={projectsPageLoaded} />
              : '' }
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tab_title: state.projects.projectsPage.tab_title,
    title: state.projects.projectsPage.title,
    short_description: state.projects.projectsPage.short_description,
    description: state.projects.projectsPage.description,
    categories: state.projects.categories.categories,
    projects: state.projects.projectsPage.projects,
    loaded: state.projects.projectsPage.loaded,
    showMore: state.projects.projectsPage.showMore

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProjectsPageDescription: () => dispatch(actionCreator.loadProjectsPageDescription()),
    loadProjects: () => dispatch(actionCreator.loadProjects()),
    loadCategories: () => dispatch(actionCreator.loadCategories()),
    showMoreProjects: (e) => dispatch(actionCreator.showMoreProjects(e)),
    projectsPageLoaded: () => dispatch(actionCreator.projectsPageLoaded())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
