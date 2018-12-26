import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'whatwg-fetch'
import cookie from 'react-cookies'
import PostForm from './PostForm'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slug: null,
      post: null,
      loaded: false
    }
    this.handleUpdatedPost = this.handleUpdatedPost.bind(this)
  }

  handleUpdatedPost (post) {
    this.setState({
      post: post
    })
  }

  loadPost (slug) {
    let thisComp = this
    let endpoint = `/api/posts/${slug}/`
    let lookupOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let csrfToken = cookie.load('csrftoken')
    if (csrfToken !== undefined) {
      lookupOptions['credentials'] = 'include'
      lookupOptions['headers']['X-CSRFToken'] = csrfToken
    }

    fetch(endpoint, lookupOptions)
      .then((responce) => {
        console.log(responce.status)
        return responce.json()
      }).then((responceData) => {
        if (responceData.detail) {
          console.log(responceData)
          thisComp.setState({
            post: null,
            loaded: true
          })
        } else {
          thisComp.setState({
            post: responceData,
            loaded: true
          })
        }
      }).catch((error) => {
        console.log('error', error)
      })
  }

  componentDidMount () {
    if (this.props.match) {
      const { slug } = this.props.match.params
      this.loadPost(slug)
    }
  }
  render () {
    const { post } = this.state
    const { loaded } = this.state
    return (
      <div>
        {loaded !== true ? <p>Loading...</p>
          : <div> {post === null ? <p>Page not found</p>
            : <div>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <p><Link maintainScrollPosition={false} to={{
                pathname: '/posts/',
                state: { fromDashboard: false }
              }} >Back to posts</Link></p>
              {post.owner === true ? <PostForm post={post} onPostUpdate={this.handleUpdatedPost} /> : ''}
            </div>}
          </div>
        }

      </div>
    )
  }
}

export default PostDetail
