import React, { Component } from 'react'
import 'whatwg-fetch'
import cookie from 'react-cookies'
import moment from 'moment'

class PostForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.state = {
      draft: false,
      title: null,
      slug: null,
      content: null,
      publish: null
    }
  }

  handleInputChange (event) {
    if (event.target.name !== 'draft') {
      event.preventDefault()
      this.setState({
        [event.target.name]: event.target.value
      })
      console.log(event.target.name, event.target.value)
    } else {
      this.setState({
        [event.target.name]: event.target.checked
      })
      console.log(event.target.name, event.target.checked)
    }
  }

  createPost (data) {
    const endpoint = '/api/posts/'
    let csrfToken = cookie.load('csrftoken')
    let thisComp = this
    if (csrfToken !== undefined) {
      let lookupOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        },
        body: JSON.stringify(data),
        credentials: 'include'
      }

      fetch(endpoint, lookupOptions)
        .then((responce) => {
          return responce.json()
        }).then((responceData) => {
          // console.log(responceData)
          if (thisComp.props.onNewItemCreated) {
            thisComp.props.onNewItemCreated(responceData)
            thisComp.setState({
              draft: false,
              title: null,
              slug: null,
              content: null,
              publish: moment().format('YYYY-MM-DD')
            })
            thisComp.postCreateForm.reset()
          }
        }).catch((error) => {
          console.log('error', error)
        })
    }
  }

  updatePost (data) {
    const { slug } = this.state
    // console.log(slug)
    const endpoint = `/api/posts/${slug}/`
    let csrfToken = cookie.load('csrftoken')
    let thisComp = this
    if (csrfToken !== undefined) {
      let lookupOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        },
        body: JSON.stringify(data),
        credentials: 'include'
      }

      fetch(endpoint, lookupOptions)
        .then((responce) => {
          return responce.json()
        }).then((responceData) => {
          // console.log(responceData)
          if (thisComp.props.onPostUpdate) {
            thisComp.props.onPostUpdate(responceData)
            // thisComp.postForm.reset()
          }
        }).catch((error) => {
          console.log('error', error)
        })
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    let data = this.state
    console.log(data)
    if (this.props.post) {
      this.updatePost(data)
    } else {
      this.createPost(data)
    }
  }

  clearForm (event) {
    if (event) {
      event.preventDefault()
    }
    this.setState({
      draft: false,
      title: null,
      slug: null,
      content: null,
      publish: moment().format('YYYY-MM-DD')
    })
    this.postForm.reset()
  }

  componentDidMount () {
    const { post } = this.props
    if (post) {
      this.setState({
        draft: post.draft,
        title: post.title,
        slug: post.slug,
        content: post.content,
        publish: moment(post.publish).format('YYYY-MM-DD')
      })
    } else {
      this.setState({
        draft: false,
        title: null,
        slug: null,
        content: null,
        publish: moment().format('YYYY-MM-DD')
      })
    }

    this.postTitleInputRef.focus()
  }

  render () {
    const { title } = this.state
    const { content } = this.state
    const { publish } = this.state
    console.log(this.state)
    console.log(content)
    return (
      <form onSubmit={this.handleSubmit} ref={(el) => { this.postForm = el }}>
        <div className='form-group'>
          <label for='title'>Post title</label>
          <input ref={(el) => { this.postTitleInputRef = el }}
            type='text'
            name='title'
            id='title'
            className='form-control'
            placeholder='post title'
            value={title}
            onChange={this.handleInputChange}
            required='required' />
        </div>

        <div className='form-group'>
          <label for='content'>Content</label>
          <textarea onChange={this.handleInputChange}
            name='content'
            id='content'
            className='form-control'
            placeholder='post content'
            value={content || ''}
            required='required' />
        </div>

        <div className='form-group form-check'>
          <input type='checkbox' className='form-check-input' name='draft' id='draft' onChange={this.handleInputChange} />
          <label className='form-check-label' for='draft'>Draft</label>
        </div>

        <div className='form-group'>
          <label for='publish'>Publish</label>
          <input type='date'
            name='publish'
            value={publish}
            id='publish'
            className='form-control'
            onChange={this.handleInputChange}
            required='required' />
        </div>
        <button type='submit' className='btn btn-primary'>{this.props.post === undefined ? 'Create' : 'Update'}</button>
        <button className={`btn btn-secondary ${this.props.post === undefined ? '' : 'd-none'}`}
          onClick={this.clearForm}>Clear</button>
      </form>
    )
  }
}

export default PostForm
