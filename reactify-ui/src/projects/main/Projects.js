import React, { Component } from 'react'
import 'whatwg-fetch'
import Navbar from '../../header/navbar'
import Footer from '../../snipets/footer'
import ProjectCategoriesNav from '../projectCategoriesNav/ProjectCategoriesNav'
import Breadcrumb from '../../snipets/breadcrumd'
import PageDescription from '../../snipets/pageDescription'
import ProjectsList from './ProjectsList'


// import MainContent from './mainContent'

class Projects extends Component {
  constructor (props) {
    super(props)
    this.loadCategories = this.loadCategories.bind(this)
    this.loadHomePageDescription = this.loadHomePageDescription.bind(this)
    this.loadProjects = this.loadProjects.bind(this)
  }

    state = {
        tab_title: null,
        title: null, 
        short_description: null, 
        description: null,
        categories: null,
        projects: null
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


    loadHomePageDescription () {
      let thisComp = this
      let endpoint = '/api/projects/'

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
            title: responceData.title, 
            short_description: responceData.short_description, 
            description:  responceData.description,
          })
          document.title = this.state.tab_title
        }).catch((error) => {
          console.log('error', error)
        })
    }

    loadProjects () {
      let thisComp = this
      let endpoint = '/api/projects/projects-list/'

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
            projects: responceData,
          })
        }).catch((error) => {
          console.log('error', error)
        })
    }


    componentDidMount () {
      this.loadCategories()
      this.loadHomePageDescription()
      this.loadProjects()
    }

  render () {
    const {title, short_description, description, categories, projects } = this.state 
    return (
      <div className='main-container'>
        <Navbar />
        { categories ? 
          <ProjectCategoriesNav categories={categories} categoryFilterHandler={this.categoryFilterHandler} />
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

export default Projects
