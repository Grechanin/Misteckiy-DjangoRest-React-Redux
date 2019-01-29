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

// import MainContent from './mainContent'

class ProjectDetail extends Component {
  constructor (props) {
    super(props)
    // this.loadCategories = this.loadCategories.bind(this)
    // this.loadProject = this.loadProject.bind(this)
  }

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

  //   loadCategories () {
  //     let thisComp = this
  //     let endpoint = '/api/projects/categories/'

  //     let lookupOptions = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }

  //     fetch(endpoint, lookupOptions)
  //       .then((responce) => {
  //         return responce.json()
  //       }).then((responceData) => {
  //         thisComp.setState({
  //           categories: responceData,
  //         })
  //       }).catch((error) => {
  //         console.log('error', error)
  //       })
  //   }

  //   loadProject (id) {
  //     let thisComp = this
  //     let endpoint = `/api/projects/project/${id}`

  //     let lookupOptions = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }

  //     fetch(endpoint, lookupOptions)
  //       .then((responce) => {
  //         return responce.json()
  //       }).then((responceData) => {
  //         thisComp.setState({
  //           tab_title: responceData.tab_title,
  //           name: responceData.name,
  //           short_description: responceData.short_description,
  //           description:  responceData.description,
  //           project_images: responceData.project_images,
  //           project_thumbnail_images: responceData.project_thumbnail_images,
  //           main_image_url: responceData.main_image_url,
  //           category_id: responceData.category,
  //           category_name: responceData.category_name
  //         })
  //         document.title = this.state.tab_title
  //       }).catch((error) => {
  //         console.log('error', error)
  //       })
  //   }

  // componentWillReceiveProps (nextProps) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     const currentCategoryId = nextProps.match.params.id
  //     this.props.loadProjectDetail(currentCategoryId)
  //   }
  // }

  // componentDidMount () {
  //   this.props.loadCategories()
  //   if (this.props.match) {
  //     const { id } = this.props.match.params
  //     this.props.loadProjectDetail(id)
  //   }
  // }



  //  componentWillReceiveProps (nextProps) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     if (this.props.match) {
  //       const { id } = nextProps.match.params
  //       const { projects_detail } = this.props
  //       let is_product_in_state = false
  //       projects_detail.forEach(
  //         (instance, idex) => {
  //           if (instance.id.toString() === id) {
  //             console.log('props instance', instance)
  //             is_product_in_state = true
  //             this.setState({ project: { ...this.state.project, ...instance }, loaded: true })
  //             console.log('this.setState', this.state)
  //           }
  //         }
  //       )
  //       if (!is_product_in_state) {
  //         console.log('is_product_in_state', is_product_in_state)
  //         this.props.loadProjectDetail(id)
  //         this.setState({ loaded: false })
  //       }
  //     }
  //   }
  // }

  componentDidMount () {
    this.props.loadCategories()
    if (this.props.match) {
      const { id } = this.props.match.params
      const { projects_detail } = this.props
      let is_product_in_state = false
      projects_detail.forEach(
        (instance, idex) => {
          if (instance.id.toString() === id) {
            console.log('did instance', instance)
            is_product_in_state = true
            this.setState({ project: { ...this.state.project, ...instance }, loaded: true })
            console.log('this.setState', this.state)
          }
        }
      )
      // if (!is_product_in_state) {
      //   console.log('is_product_in_state', is_product_in_state)
      //   this.props.loadProjectDetail(id)
      // }
    }
  }

  componentDidUpdate () {
    console.log('didupdate this.setState', this.state)
    if (!this.state.loaded) {
      let loaded = false
      if (this.props.match) {
        const { id } = this.props.match.params
        const { projects_detail } = this.props
        console.log('did up projects_detail', projects_detail)
        projects_detail.forEach(
          (instance, idex) => {
            console.log('instance', instance)
            console.log('instance id', instance.id)
            console.log(' id', id)
            if (instance.id.toString() === id) {
              console.log('this.setState', this.state)
              loaded = true
              if (instance !== this.state.project) {
                this.setState({ project: { ...this.state.project, ...instance }, loaded: true })
              }
            }
          }
        )
        if (!loaded) {
          console.log('!loaded', !loaded)
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
