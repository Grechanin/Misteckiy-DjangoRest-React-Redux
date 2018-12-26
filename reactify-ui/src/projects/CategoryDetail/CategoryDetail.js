import React, { Component } from 'react'
import 'whatwg-fetch'
import Navbar from '../../header/navbar'
import Footer from '../../snipets/footer'
import ProjectCategoriesNav from '../projectCategoriesNav/ProjectCategoriesNav'
import Breadcrumb from './Breadcrumb'
import PageDescription from '../../snipets/pageDescription'
import ProjectsList from '../main/ProjectsList'


// import MainContent from './mainContent'

class CategoryDetail extends Component {
  constructor (props) {
    super(props)
    this.loadCategories = this.loadCategories.bind(this)
    this.loadPageAndProjects = this.loadPageAndProjects.bind(this)
  }

    state = {
        tab_title: null,
        title: null, 
        short_description: null, 
        description: null,
        categories: null,
        projects: null,
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
  // console.log(endpoint)

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


    loadPageAndProjects (id) {
      let thisComp = this
      let endpoint = `/api/projects/categories-detail/${id}`

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
          console.log(responceData)
          thisComp.setState({
            title: responceData.title,
            tab_title: responceData.tab_title,
            short_description: responceData.short_description,
            description: responceData.description,
            projects: responceData.projects,
          })
          document.title = this.state.tab_title
        }).catch((error) => {
          console.log('error', error)
        })
    }


    componentWillReceiveProps(nextProps) {
      if (nextProps.match.params.id !== this.props.match.params.id) {
        const currentCategoryId = nextProps.match.params.id
        this.loadPageAndProjects(currentCategoryId)
      }
    }

    componentDidMount () {    
      this.loadCategories()
      if (this.props.match) {
        const { id } = this.props.match.params
        this.loadPageAndProjects(id)
      }
    }

  render () {
    const {title, short_description, description, categories, projects } = this.state 
    return (
       <div className='main-container'>
        <Navbar />
        { categories ? 
          <ProjectCategoriesNav categories={categories} />
           : '' }
        <main>
          <Breadcrumb title={title} />
          <div className="page__container">
            <div className="container">
              <PageDescription title={title} short_description={short_description} description={description} />
            </div>
          { projects ? 
            <ProjectsList projects={projects} />
             : '' }     
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default CategoryDetail
