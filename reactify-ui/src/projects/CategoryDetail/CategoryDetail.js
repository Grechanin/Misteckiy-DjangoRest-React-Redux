import React, { Component } from 'react'
// import 'whatwg-fetch'
import Navbar from '../../header/navbar'
import Footer from '../../snipets/footer'
import ProjectCategoriesNav from '../projectCategoriesNav/ProjectCategoriesNav'
import Breadcrumb from './Breadcrumb'
import PageDescription from '../../snipets/pageDescription'
import ProjectsList from '../main/ProjectsList'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/actions'
import Loader from 'react-loader'

// import MainContent from './mainContent'

class CategoryDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
          loaded: false,
          category_name: null
      }
  }

  projectsCategoryDetailLoaded = () => {
    this.setState({loaded:true})
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const currentCategoryId = nextProps.match.params.id
      this.props.loadPageAndProjectsByCategory(currentCategoryId)
    }
  }

  componentDidMount () {
    this.props.loadCategories()
    if (this.props.match) {
      const { id } = this.props.match.params
      this.props.loadPageAndProjectsByCategory(id)
    }
  }

  componentDidUpdate (){
    this.props.categories.forEach((cat) => {
      if (cat.id.toString()===this.props.match.params.id && cat.name !== this.state.category_name) {
         this.setState({...this.state, category_name: cat.name})
      }
    })
  }

  render () {
    const { title,
      short_description,
      description,
      projects,
      categories,
      showMore,
      showMoreCategoryDetail } = this.props
    document.title = this.props.tab_title
    return (
      <div className='main-container'>
        <Navbar />
        { categories
          ? <ProjectCategoriesNav categories={categories} />
          : '' }
          <Loader loaded={this.state.loaded} color='#e7e0e0' />
        <main>
          <Breadcrumb title={this.state.category_name} />
          <div className='page__container'>
            <div className='container'>
              <PageDescription title={title}
                short_description={short_description}
                description={description}
                showMore={showMore}
                showMoreButtonToggle={showMoreCategoryDetail} />
            </div>
            { projects
              ? <ProjectsList projects={projects} projectsPageLoaded={this.projectsCategoryDetailLoaded} />
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
    tab_title: state.projects.categoryDetail.tab_title,
    title: state.projects.categoryDetail.title,
    short_description: state.projects.categoryDetail.short_description,
    description: state.projects.categoryDetail.description,
    categories: state.projects.categories.categories,
    projects: state.projects.categoryDetail.projects,
    showMore: state.projects.categoryDetail.showMore

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPageAndProjectsByCategory: (id) => dispatch(actionCreator.loadPageAndProjectsByCategory(id)),
    loadCategories: () => dispatch(actionCreator.loadCategories()),
    showMoreCategoryDetail: (e) => dispatch(actionCreator.showMoreCategoryDetail(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail)
