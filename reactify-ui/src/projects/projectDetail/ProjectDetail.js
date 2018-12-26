import React, { Component } from 'react'
import 'whatwg-fetch'
import Navbar from '../../header/navbar'
import Footer from '../../snipets/footer'
import ProjectCategoriesNav from '../projectCategoriesNav/ProjectCategoriesNav'
import Breadcrumb from './breadcrumb'
import PageDescription from '../../snipets/pageDescription'
import ProjectImages from './ProjectImages'
import SocialShare from './SocialShare'


// import MainContent from './mainContent'

class ProjectDetail extends Component {
  constructor (props) {
    super(props)
    this.loadCategories = this.loadCategories.bind(this)
    this.loadProject = this.loadProject.bind(this)
  }

    state = {
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
    }

    loadCategories () {
      let thisComp = this
      let endpoint = '/api/projects/categories/'

      let lookupOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      fetch(endpoint, lookupOptions)
        .then((responce) => {
          return responce.json()
        }).then((responceData) => {
          thisComp.setState({ 
            categories: responceData,
          })
        }).catch((error) => {
          console.log('error', error)
        })
    }


    loadProject (id) {
      let thisComp = this
      let endpoint = `/api/projects/project/${id}`

      let lookupOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }


      fetch(endpoint, lookupOptions)
        .then((responce) => {
          return responce.json()
        }).then((responceData) => {
          thisComp.setState({ 
            tab_title: responceData.tab_title,
            name: responceData.name, 
            short_description: responceData.short_description, 
            description:  responceData.description,
            project_images: responceData.project_images,
            project_thumbnail_images: responceData.project_thumbnail_images,
            main_image_url: responceData.main_image_url,
            category_id: responceData.category,
            category_name: responceData.category_name
          })
          document.title = this.state.tab_title
        }).catch((error) => {
          console.log('error', error)
        })
    }


    componentWillReceiveProps(nextProps) {
      if (nextProps.match.params.id !== this.props.match.params.id) {
        const currentCategoryId = nextProps.match.params.id
        this.loadProject(currentCategoryId)
      }
    }

    componentDidMount () {    
      this.loadCategories()
      if (this.props.match) {
        const { id } = this.props.match.params
        this.loadProject(id)
      }
    }

  render () {
    const { name, 
            short_description, 
            description, 
            categories, 
            project_images, 
            project_thumbnail_images, 
            main_image_url, 
            category_id, 
            category_name } = this.state 
    return (
      <div className='main-container'>
        <Navbar />
        { categories ? 
          <ProjectCategoriesNav categories={categories} categoryFilterHandler={this.categoryFilterHandler} />
           : '' }
        <main>
          <Breadcrumb title={name} category_name={category_name} id={category_id} />
          <div className="page__container">
            <div className="container">
              <PageDescription title={name} short_description={short_description} description={description} />
            </div>
            { project_images ? 
              <ProjectImages  project_images={project_images} 
                              project_name={name}
                              project_thumbnail_images={project_thumbnail_images} />
               : '' } 
               <SocialShare main_image_url={main_image_url} project_name={name} />
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default ProjectDetail
